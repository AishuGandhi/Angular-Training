import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators{

    static inValidoldPassword(control:AbstractControl) : Promise<ValidationErrors | null>{
      //Returns result to the consumer of the promise
       return new Promise((resolve) =>{
        setTimeout(() => {
            if(control.value !='1234')
              resolve ({invalidOldPassword: true});
          else
           resolve(null);
        },2000);
       });
    }

    static passwordsShouldMatch(control:AbstractControl)  {
      let newPassword = control.get('newPassword');
      let confirmPassword = control.get('confirmPassword');
      if(newPassword?.value != confirmPassword?.value)
              return {passwordsShouldMatch : true};
      return null;
    }
}
