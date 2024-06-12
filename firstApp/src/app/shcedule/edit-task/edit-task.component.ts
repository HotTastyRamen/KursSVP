import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskEvent } from 'src/app/models/TaskEvent';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  editingTask:TaskEvent;

  constructor(public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskEvent) {
      console.log(data);
      this.editingTask = data;
     }
    ngOnInit(): void{

    }

    onNoClick(): void{
      this.dialogRef.close();
    }

}
