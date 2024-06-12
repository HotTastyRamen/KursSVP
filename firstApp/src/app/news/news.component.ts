import { BaseServiceService } from 'src/app/service/base-service.service';
import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { MatDialog } from '@angular/material/dialog';
import { EditPostComponent } from './edit-post/edit-post.component';
import { User } from '../models/User';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  posts: Post[];
  user:User;
  isAdminLogged:boolean;

  constructor(private baseService: BaseServiceService,
              public dialog: MatDialog) {}

  ngOnInit(){
    debugger
    this.isAdminLogged=false;
    this.baseService.getAllPosts().subscribe( allPosts=>{
      this.posts = allPosts;
    })
    this.baseService.getPrincipal().subscribe(data =>{
      console.log(data)
      this.user = data;
      console.log(this.user.principal.authorities[0].authority)
      if (this.user.principal.authorities[0].authority === "SUPER_USER"){
        this.isAdminLogged = true
      }
    })
  }

  putPost(post: Post) {

    var edPost = structuredClone(post);

    const dialogPutingNewPost = this.dialog.open(EditPostComponent, {
      width: '400px',
      data: edPost,
    });

    dialogPutingNewPost.afterClosed().subscribe((result: Post) => {
      if(result != null) {
        console.log("putting new student: " + result.id);
        this.baseService.putNewPost(result).subscribe(k=>{
          this.baseService.getAllPosts().subscribe(data=>this.posts=data)
        });
      }
    });
  }

  deletePost(post: Post) {
    this.baseService.deletePost(post.id).subscribe(k=>{
      this.baseService.getAllPosts().subscribe(data=>this.posts=data)
    })
  }

  addNewPost() {
    var newPost = new Post;
    const dialogAddingNewPost = this.dialog.open(EditPostComponent, {
      width: '400px',
      data: newPost
    });
    dialogAddingNewPost.afterClosed().subscribe((result: Post) => {
      if(result != null) {
        console.log("adding new student: " + result.id);

        this.baseService.addNewPost(result, this.user.name).subscribe(k=>{
          this.baseService.getAllPosts().subscribe(data=>this.posts=data)
        });
      }
    });
  }
}
