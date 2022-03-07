import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'newcourseform',
  templateUrl: './newcourseform.component.html',
  styleUrls: ['./newcourseform.component.css']
})
export class NewcourseformComponent {
   form = new FormGroup({
     topics : new FormArray([])
   });
   get topics(){
      return this.form.get('topics') as FormArray;
   }
   //topic is template variable passed from html
   addTopic(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
   }

   removeTopic(topic:AbstractControl){
      let index = this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);
   }
}
