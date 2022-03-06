import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  courses = [1,2];
  viewMode = 'something';
  courseArr : any;
  canSave = false;

  task = {
     title : 'Review Application',
     assignee: {
         name: 'John Smith'
     }
  }
  onAdd() {
      this.courseArr.push({ id:4 , name: 'Course4'})
  }
  onRemove(course:any) {
        this.courseArr.splice(this.courseArr.indexOf(course),1);
  }
  onChange(course:any) {
    course.name = course.name+ ' UPDATED';
  }
  loadCourses(){
    this.courseArr = [
        { id : 1, name: 'Course1'},
        { id : 2, name: 'Course2'},
        { id : 3, name: 'Course3'},
      ];
  }
  //To avoid rendering of duplicate elements with same id and change angular tracking mechanism
  trackCourse(course:any){
    return course  ? course.id : undefined;
  }
}
