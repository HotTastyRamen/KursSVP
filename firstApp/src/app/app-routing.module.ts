import { CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/home/login/login.component';
import { AdminComponent } from './components/home/admin/admin.component';
import { StudentComponent } from './components/home/student/student.component';
import { AuthGuard } from './auth/auth.guard';
import { TeacherComponent } from './components/home/teacher/teacher.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { NewsComponent } from './news/news.component';
import { ShceduleComponent } from './shcedule/shcedule.component';
import { TimeTableComponent } from './time-table/time-table.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  },
  {
  path: 'login',
  component: LoginComponent,
  },
    {
    path: 'imgUpload',
    component: ShceduleComponent,
    },
    {
      path: 'schedule',
      component: TimeTableComponent,
      },
    {
    path: 'news',
    component: NewsComponent,

    },
    {
    path: 'tasks',
    component: ShceduleComponent,
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
