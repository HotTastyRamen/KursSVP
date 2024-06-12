import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from 'src/app/models/student';
import { HttpParams } from '@angular/common/http';
import {Page} from 'src/app/models/Page';
import { User } from 'src/app/models/User';
import { Post } from '../models/Post';
import { TaskEvent } from '../models/TaskEvent';
import { authUserEntity } from '../models/authUserEntity';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  /*students: Student[] = [
    {id: 0, name: 'Имя', surname: 'Фамилия'},
    {id: 1, name: 'Имя 1', surname: 'Фамилия 1'},
    {id: 2, name: 'Имя 2', surname: 'Фамилия 2'}
  ];*/

  private studentsUrl = 'api/base/students';

  constructor(
    private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  private userUrl = 'api/user'

  getPrincipal():Observable<User>{
    console.log(this.http.get<User>(this.userUrl))
    return this.http.get<User>(this.userUrl)
  }

  private newsUrl = 'api/news';

  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.newsUrl + "/posts")
  }

  putNewPost(post:Post):Observable<Post>{
    console.log('puttingPost')
    console.log(post)
    return this.http.put<Post>(this.newsUrl + '/post', post)
  }

  deletePost(id: number): Observable<Post> {
    console.log('deletePost' + id);
    return this.http.delete<Post>(this.newsUrl + '/post' + `/${id}` ).pipe();
  }

  addNewPost(post: Post, user:String): Observable<Post> {
    console.log('addNewPost');
    return this.http.post<Post>(this.newsUrl + '/post' + '/' + user, post).pipe();
  }

  private scheduleUrl = 'api/schedule'

  getAllTasks():Observable<TaskEvent[]>{
    return this.http.get<TaskEvent[]>(this.scheduleUrl + "/tasks")
  }

  putNewTask(task: TaskEvent):Observable<TaskEvent>{
    return this.http.put<TaskEvent>(this.scheduleUrl + "/task", task )
  }

  deleteTask(id: number):Observable<TaskEvent>{
    return this.http.delete<TaskEvent>(this.scheduleUrl + "/task" + `/${id}`)
  }

  addNewTask(task: TaskEvent, user:String):Observable<TaskEvent>{
    return this.http.post<TaskEvent>(this.scheduleUrl + "/task" + '/' + user, task)
  }

  getTaskByUser(username:String):Observable<TaskEvent[]>{
    console.log(this.scheduleUrl + "/userTasks" + '/' + username)
    return this.http.get<TaskEvent[]>(this.scheduleUrl + "/userTasks" + '/' + username)
  }

  private adminUrl = 'api/admin'

  getAllUsers():Observable<authUserEntity[]>{
    return this.http.get<authUserEntity[]>(this.adminUrl + "/users")
  }

  getUserByUsername(username:String):Observable<authUserEntity>{
    return this.http.get<authUserEntity>(this.adminUrl + "/user" + '/' + username)
  }

  getAllStudentsPage( page: number, length: number ): Observable<Page> {
    return this.http.get<Page>(this.studentsUrl + "/page", {
      params: new HttpParams().set('page', page)
                              .set('length', length)
  });
  }

  getFilterStudentsPage(filter: string, page: number, length: number ): Observable<Page> {
    return this.http.get<Page>(this.studentsUrl + "/filter", {
      params: new HttpParams().set('filter', filter)
                              .set('page', page)
                              .set('length', length)
  });
  }

  addNewStudent(student: Student): Observable<Student> {
    console.log('addNewStudent');
    return this.http.post<Student>(this.studentsUrl, student).pipe();
  }

  putNewStudent(student: Student): Observable<Student> {
    console.log('putNewStudent');
    return this.http.put<Student>(this.studentsUrl, student ).pipe();
  }

  deleteStudent(id: number): Observable<Student> {
    console.log('deleteStudent' + id);
    return this.http.delete<Student>(this.studentsUrl + `/${id}` ).pipe();
  }
}
