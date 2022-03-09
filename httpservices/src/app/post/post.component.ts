import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

//Currently class is responsible for presentation that to add,update and delete items from list and to get data from server
//And you may need posts at many places in project and also in case if URL changes need to make changes everywhere
//For testing it hard for server calls
//Therefor use a service
export class PostComponent implements OnInit{

  posts: any[] | undefined;
  private url = 'https://jsonplaceholder.typicode.com/posts';


  ngOnInit(): void {
    //When the result is ready consumer will be notified with subscribe
          this.http.get<[]>(this.url)
          .subscribe(response=>{
              this.posts = response;
      });
  }
   constructor(private http:HttpClient){

   }

   createPost(input:HTMLInputElement){
     let post :any = {title:input.value}
     input.value = '';
     this.http.post(this.url,JSON.stringify(post))
     .subscribe(response => {
        post['id'] = response;
        this.posts?.splice(0,0,post);
  });
   }


   updatePost(post:HTMLInputElement){
    //Sending only parts(few properties) of body to be modify instead of whole body that is why patch
    this.http.patch(this.url + '/' +post.id,JSON.stringify({isRead : true}))
      .subscribe(response=>{
         console.log(response,{name:post.title});
      });

    //this.http.put(this.url,JSON.stringify(post));  whole object needs to be passed
  }

  deletePost(post:HTMLInputElement){
    this.http.delete(this.url + '/' +post.id)
      .subscribe(response=>{
         this.posts?.splice(this.posts?.indexOf(post),1);
      });
  }
}
