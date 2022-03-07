import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'newformbuilder',
  templateUrl: './newformbuilder.component.html',
  styleUrls: ['./newformbuilder.component.css']
})
export class NewformbuilderComponent {

  // 2 ways of building forms
   form = new FormGroup({
    name : new FormControl('',Validators.required),
    contact : new FormGroup({
      email : new FormControl(),
      phone : new FormControl()
    }),
    topic : new FormArray([])
   });

   constructor(fb:FormBuilder){
     this.form =  fb.group({
          name: ['',Validators.required],
          contact:fb.group({
            email:[],
            phone:[]
          }),
          topics: fb.array([])
       });
   }

}
