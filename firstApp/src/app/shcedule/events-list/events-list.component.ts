import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {COLOR} from 'src/app/models/Color'
import { TaskEvent } from 'src/app/models/TaskEvent';
import { BaseServiceService } from 'src/app/service/base-service.service';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  @Input() tasks: any[]
  @Input() selectedDate: String
  @Input() allow: boolean;
  @Input() dateSelected:boolean;
  @Output() updateEvent = new EventEmitter<any>()

  tasksNotEmpty:boolean

  allowAdd:boolean

  user:User;

  constructor(private baseService: BaseServiceService,
              public dialog: MatDialog){}

ngOnInit(){
  console.log(this.tasks)
  this.baseService.getPrincipal().subscribe(data =>{
    this.user = data;
    console.log(this.user.principal.authorities[0].authority)
  })
}

emptyList(){
  this.tasks.length = 0;
  console.log(this.tasks)
  console.log(this.dateSelected)
}

putTask(task: TaskEvent) {

  var edTask = structuredClone(task);

  const dialogPutingNewTask = this.dialog.open(EditTaskComponent, {
    width: '400px',
    data: edTask,
  });

  dialogPutingNewTask.afterClosed().subscribe((result: TaskEvent) => {
    if(result != null) {
      console.log("putting new student: " + result.id);
      this.baseService.putNewTask(result).subscribe(k=>{
        const index = this.tasks.findIndex((task) => task.id === result.id);
        if (index !== -1) {
          this.tasks[index] = result;
        }
        this.updateEvent.emit()
      });
    }
  });
}

deletePost(deleteTask: TaskEvent) {
  this.baseService.deleteTask(deleteTask.id).subscribe(k=>{
    const index = this.tasks.findIndex((task) => task.id === deleteTask.id);
    if (index !== -1) {
      this.tasks.splice(index, 1)
    }
    this.updateEvent.emit()
  })
}

addNewTask() {
  var newTask = new TaskEvent;
  const dialogAddingNewTask = this.dialog.open(EditTaskComponent, {
    width: '400px',
    data: newTask
  });
  dialogAddingNewTask.afterClosed().subscribe((result: TaskEvent) => {
    if(result != null) {
      console.log("adding new student: " + result.id);
      result.color = this._getRandomColor();
      result.date = this.selectedDate;
      this.baseService.addNewTask(result, this.user.name).subscribe(k=>{
          this.tasks.push(k);
        this.updateEvent.emit()
      })
    }
  });
}

ngOnChanges(changes: SimpleChanges){
  if(this.tasks.length !== 0)
    this.tasksNotEmpty = true;
  else
    this.tasksNotEmpty = false;
}



_getRandomColor(): COLOR {
  const values = Object.values(COLOR);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex] as COLOR;
}
}
