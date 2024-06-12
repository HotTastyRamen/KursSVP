import { BaseServiceService } from 'src/app/service/base-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imposter';
  navVisible:boolean

  constructor(private baseService:BaseServiceService){}

  ngOnInit(){
    this.baseService.getPrincipal().subscribe(princ=>{
      console.log(princ)
    })
  }

  ngOnChanges(){

  }
}
