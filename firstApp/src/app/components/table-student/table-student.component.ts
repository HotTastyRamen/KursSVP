import { Student } from './../../models/student';
  import { Component, OnInit } from '@angular/core';
  import { MatDialog } from '@angular/material/dialog';
  import { BaseServiceService } from 'src/app/service/base-service.service';
  import { DialogEditWrapperComponent } from '../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';

  import {HttpClient} from '@angular/common/http';
  import {ViewChild, AfterViewInit} from '@angular/core';
  import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
  import {MatSort, MatSortModule, SortDirection} from '@angular/material/sort';
  import {merge, Observable, of as observableOf} from 'rxjs';
  import {catchError, map, startWith, switchMap} from 'rxjs/operators';
  import {MatTableDataSource, MatTableModule} from '@angular/material/table';
  import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
  import {NgIf, DatePipe} from '@angular/common';
  import {Page} from 'src/app/models/Page';

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.css'],
})
export class TableStudentComponent implements OnInit {

  students: MatTableDataSource<Student>;
  //edStud: Student;
  displayedColumns: string[] = ['id', 'fio', 'group', 'phoneNumber', 'Func'];

  dataSource: MatTableDataSource<Student>;

  pageData: Page;

  startPI:number = 0;
  startPS:number = 5;
  filterValue:string = "";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private baseService: BaseServiceService,
              public dialog: MatDialog)
  {

    this.students = new MatTableDataSource;

  }



  ngOnInit() {
    console.log("TableStudentsComponent");
  }

  addNewStudent() {
    var newStud = new Student;
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
      width: '400px',
      data: newStud
    });
    dialogAddingNewStudent.afterClosed().subscribe((result: Student) => {
      if(result != null) {
        console.log("adding new student: " + result.fio);
        this.baseService.addNewStudent(result).subscribe(k=>{
          if (this.paginator.length % this.paginator.pageSize == 0 ){
            this.paginator.pageIndex =this.paginator.pageIndex+1;
          }

          this._getPage(this.filterValue, this.paginator.pageIndex, this.paginator.pageSize) });
      }
    });
  }

  putNewStudent(student: Student) {

    var edStud = structuredClone(student);

    const dialogPutingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
      width: '400px',
      data: edStud,
    });

    dialogPutingNewStudent.afterClosed().subscribe((result: Student) => {
      if(result != null) {
        console.log("putting new student: " + result.fio);
        this.baseService.putNewStudent(result).subscribe(k=>{
          this._getPage(this.filterValue, this.paginator.pageIndex, this.paginator.pageSize)
        });
      }
    });
  }

  deleteStudent(student: Student) {
    this.baseService.deleteStudent(student.id).subscribe(k=>{
      if (this.paginator.length % this.paginator.pageSize == 1 ){
        this.paginator.pageIndex =this.paginator.pageIndex-1;
      }
      this._getPage(this.filterValue, this.paginator.pageIndex, this.paginator.pageSize) });
  }

  ngAfterViewInit() {
    this._getPage(this.filterValue, this.startPI, this.startPS);
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    console.log(this.filterValue);
    this.students.filter = this.filterValue.trim().toLowerCase();
    this._getPage(this.filterValue, this.startPI, this.startPS);

    this.paginator.firstPage();

    // if (this.students.paginator) {
    //   this.students.paginator.firstPage();
    // }
  }

  onChangePage(event:PageEvent)
  {
    console.log(event.pageIndex);
    console.log(event.pageSize);

    this._getPage(this.filterValue, event.pageIndex, event.pageSize)
  }

  _getPage (filter:string, pageIndex: number, pageSize: number){
    console.log(filter);
    this.baseService.getFilterStudentsPage(filter, pageIndex, pageSize).subscribe(data =>{
      this.pageData=data;
      this.paginator.length = this.pageData.totalElements;
      this.paginator.pageSize= this.pageData.size;
      this.students.data = this.pageData.content;
    });
  }
}
