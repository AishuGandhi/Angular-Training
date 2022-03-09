import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
     PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
