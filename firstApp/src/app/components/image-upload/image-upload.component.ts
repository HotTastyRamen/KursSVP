import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from '../../service/base-service.service';
import { User } from '../../models/User';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

  selectedFile: File;
  user:User;
  base64String: String;

  constructor(private baseService: BaseServiceService) { }

  ngOnInit() {
    this.baseService.getPrincipal().subscribe(data =>{
      this.user = data;
      console.log(this.user.principal.authorities[0].authority)
    })
    console.log(this.baseService.getAllStudents());
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (): void => {
        const base64String: string = (reader.result as string).match(
            /.+;base64,(.+)/
        )[1];
        this.base64String="data:image/png;base64, "+ base64String;
        console.log(base64String) ;
    };
  }



}
