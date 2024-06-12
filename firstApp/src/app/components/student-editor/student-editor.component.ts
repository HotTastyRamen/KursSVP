import { TableStudentComponent } from './../table-student/table-student.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';
import { BaseServiceService } from 'src/app/service/base-service.service';
import { DialogEditWrapperComponent } from './dialog-edit-wrapper/dialog-edit-wrapper.component';


@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent implements OnInit {

  name='name';
  surname='surname';

  editingStudent: Student

  constructor(private baseService: BaseServiceService,public dialog: MatDialog) {
    this.editingStudent = new Student();
  }


  ngOnInit(){

      }

  addStudent() {
    this.baseService.addNewStudent(this.editingStudent);
    this.editingStudent = new Student();
    }

    addNewStudent(): void {
      const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
        width: '400px',
        data: null
      });
    }


}
