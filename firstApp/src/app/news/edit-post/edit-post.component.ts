import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from 'src/app/models/Post';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  editingPost:Post;
  base64String: String;
  selectedFile: File;

  constructor(public dialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post) {
      console.log(data);
      this.editingPost = /*new Student()*/ data;
      this.base64String = data.img64;
     }
    ngOnInit(): void{

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
          this.editingPost.img64=base64String;
          console.log(base64String) ;
      };
    }

    onNoClick(): void{
      this.dialogRef.close();
    }
}
