import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
  title : 'favourite',
  isFavourite: true
  }
  tweet = {
    body:"Here is the Tweet",
    likesCount : 10,
    isLiked : true
  }
  onFavouriteChanged(isFav: any)
  {
     console.log("Favourite Changed:",isFav);
  }
}
