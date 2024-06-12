import { authUserEntity } from './../models/authUserEntity';
import { principal } from './../models/principal';
import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ruLocale from '@fullcalendar/core/locales/ru';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BaseServiceService } from '../service/base-service.service';
import { User } from '../models/User';
import { EventsListComponent } from './events-list/events-list.component';

@Component({
  selector: 'app-shcedule',
  templateUrl: './shcedule.component.html',
  styleUrls: ['./shcedule.component.css']
})
export class ShceduleComponent {

  @ViewChild(EventsListComponent) eventsListComponent: EventsListComponent;

  selectedStartDate: String
  events: any = []

  principalName:String;
  principalAuthority:String;

  selectedOption: String;

  options:authUserEntity[];

  selectedDateEvents:any

  dateSelected:boolean;
  allow:boolean;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale:ruLocale,
    plugins: [interactionPlugin, dayGridPlugin],
    eventClick: this.handlerDateClick.bind(this),
    selectable: true,

    select: (info: DateSelectArg) => {
      this.selectedStartDate = info.startStr;
      this.dateSelected = true;
      this.selectedDateEvents = this.events.filter(event => event.date === this.selectedStartDate)
      console.log('Выбранная дата', this.selectedStartDate);
      console.log(this.selectedDateEvents);
    }

  };
  isAdminLogged: boolean;

  constructor(private baseService: BaseServiceService){}

  ngOnInit(){
    this.isAdminLogged = false;
    this.allow = true;
    this.baseService.getPrincipal().subscribe(princ =>{
      if (princ.principal.authorities[0].authority === "SUPER_USER"){
        this.isAdminLogged = true
        this.baseService.getAllUsers().subscribe(data=>{
          this.options= data;
          this.baseService.getUserByUsername(princ.name).subscribe(fullPrinc=>{
            this.options.unshift(fullPrinc)
            this.selectedOption = this.options[0].username;
            this.updateTasks()
          })
        })
      }
      else{
        this.selectedOption = princ.name
        this.updateTasks()
      }
    })
  }

  handlerDateClick(arg:any){
    console.log(arg);
  }

  updateTasks(){
    this.baseService.getTaskByUser(this.selectedOption).subscribe(data => {
      this.events = data;
      console.log(data)
      this.calendarOptions ={
        events: this.events
      }
      console.log('updated')
    })
  }

  onSelectChange(event: string){
    console.log("event:", event);
    this.selectedOption=event
    console.log(this.selectedOption)
    this.updateTasks()
    this.baseService.getPrincipal().subscribe(princ=>{
      if (princ.name === event){
        this.allow = true
        this.dateSelected = false;}
      else{
        this.allow = false;
        this.dateSelected = false;}
    })
    this.eventsListComponent.emptyList();
    this.dateSelected = false;
    console.log(this.dateSelected)
    console.log("listempty")
  }

}
