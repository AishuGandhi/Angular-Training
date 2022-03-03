import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent implements OnInit {

  title = "Authors List";
  authors;
  imageURL = "https://www.pexels.com/photo/woman-sitting-on-sofa-while-looking-at-phone-with-laptop-on-lap-920382/";
  colspan = 2;
  isActive = true;
  constructor(service:AuthorsService) {
      this.authors = service.getAuthors();
      this.title = this.authors.length + this.title;
  }
  onKeyUpWithoutEventValue(email:any)
  {
       console.log(email);
  }
  onKeyUpWithEvent($event:any)
  {
    console.log($event.target.value);
  }
  onKeyUpWithoutEvent()
  {
    console.log("Enter Key is Pressed");
  }
  onKeyUp($event: any)
  {
    if($event.keyCode === 13)
     console.log("Enter Key is Pressed");


  }
  onSave($event: any)
  {
   //To Avoid Bubbling of Elements that when clicked on button div event is also getting triggered
    $event.stopPropagation();
    console.log("Button is clicked",$event);
  }
  onDivClicked()
  {
    console.log("Div is Clicked");
  }

  ngOnInit(): void {
  }

}
