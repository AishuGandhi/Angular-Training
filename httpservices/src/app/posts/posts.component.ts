import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts: any[] | undefined;

  ngOnInit(): void {
        this.service.getPosts()
          .subscribe(response=>{
              this.posts = response;
      });
  }

  constructor(private service:PostsService){

  }

  createPost(input:HTMLInputElement){
    let post :any = {title:input.value}
    input.value = '';
    this.service.createPost(post)
          .subscribe(response => {
            post['id'] = response;
            this.posts?.splice(0,0,post);
      });
  }
  updatePost(post:HTMLInputElement){
      this.service.updatePost(post)
      .subscribe(response=>{
         console.log(response,{name:post.title});
      });
  }
  deletePost(post:HTMLInputElement){
      this.service.deletePost(post.id)
      .subscribe(response=>{
         this.posts?.splice(this.posts?.indexOf(post),1);
      });
  }
}
