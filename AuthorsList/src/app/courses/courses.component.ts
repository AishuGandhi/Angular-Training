import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  //Two way binding from component to view and view to component
  email = "aishugandhi64@gmail.com";

  text = "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  //For Pipe example
  course = {
    title:'The Complete Angular Course',
    rating:4.789,
    students:90089,
    price:40907,
    releaseDate:new Date(2020,10,12)
  }
  onKeyUp()
  {
    console.log(this.email);
  }
  ngOnInit(): void {
  }

}
