import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-edit-wrapper',
  templateUrl: './dialog-edit-wrapper.component.html',
  styleUrls: ['./dialog-edit-wrapper.component.css']
})
export class DialogEditWrapperComponent {
  editingStudent:Student;

  constructor(public dialogRef: MatDialogRef<DialogEditWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) {
      console.log(data);
      this.editingStudent = data;
     }
    ngOnInit(): void{

    }

    onNoClick(): void{
      this.dialogRef.close();
    }

}
