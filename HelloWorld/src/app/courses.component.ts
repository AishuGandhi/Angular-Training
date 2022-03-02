//to access this component outside module export is used
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

//To tell angular how this component works add properties
//Component Decorator
@Component({
   selector:'courses',
   //Using ` backtick developer can break this template into more lines and more readable
   template:`
   <h2>{{ title }}</h2>
   <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
   </ul>`

})
export class CoursesComponent
{
   title = "List of Courses";
   courses;

   //injecting providing/ dependency into a constructor
   constructor(service : CoursesService){
     //let service = new CoursesService();Tightly coupled this component wih this service and also in future if we add parameter to constructor of Component Service need to make changes here also
     this.courses = service.getCourses();
   }
   getTitle()
   {
     return this.title;
   }
}
