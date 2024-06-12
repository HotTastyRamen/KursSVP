import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentEditorComponent } from './components/student-editor/student-editor.component';
import { TableStudentComponent } from './components/table-student/table-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogEditWrapperComponent } from './components/student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { HttpClientModule } from  '@angular/common/http';
import { MatTableModule} from  '@angular/material/table';
import { TableBasicExampleComponent } from './components/table-basic-example/table-basic-example.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgIf, DatePipe} from '@angular/common';
import { TableOverviewExampleComponent } from './components/table-overview-example/table-overview-example.component';
import { BaseServiceService } from './service/base-service.service';
import { SessionStorageService } from 'angular-web-storage';
import { LoginComponent } from './components/home/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { StudentComponent } from './components/home/student/student.component';
import { TeacherComponent } from './components/home/teacher/teacher.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { NewsComponent } from './news/news.component';
import {MatCardModule} from '@angular/material/card';
import { EditPostComponent } from './news/edit-post/edit-post.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ShceduleComponent } from './shcedule/shcedule.component';
import { EventsListComponent } from './shcedule/events-list/events-list.component';
import { EditTaskComponent } from './shcedule/edit-task/edit-task.component';
import { NavigationComponent } from './navigation/navigation.component'; // for dayGridMonth view
import {MatToolbarModule} from '@angular/material/toolbar';
import { TimeTableComponent } from './time-table/time-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEditorComponent,
    TableStudentComponent,
    DialogEditWrapperComponent,
    TableBasicExampleComponent,
    TableOverviewExampleComponent,
    LoginComponent,
    HomeComponent,
    StudentComponent,
    TeacherComponent,
    ImageUploadComponent,
    NewsComponent,
    EditPostComponent,
    ShceduleComponent,
    EventsListComponent,
    EditTaskComponent,
    NavigationComponent,
    TimeTableComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    NgIf,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DatePipe,
    NgxMatFileInputModule,
    MatToolbarModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [BaseServiceService, SessionStorageService],
  bootstrap: [AppComponent]


})
export class AppModule { }
