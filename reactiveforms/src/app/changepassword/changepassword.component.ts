import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent  {
   form = new FormGroup({
         oldPassword: new FormControl('',Validators.required,PasswordValidators.inValidoldPassword),
         newPassword:new FormControl('',Validators.required),
         confirmPassword: new FormControl('',Validators.required)
   },PasswordValidators.passwordsShouldMatch
  );

   get oldPassword(){
      return this.form.get('oldPassword');
   }
    get newPassword(){
      return this.form.get('newPassword');
  }
    get confirmPassword(){
      return this.form.get('confirmPassword');
    }
}
