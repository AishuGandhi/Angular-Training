import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
    static cannotContainSpace(control:AbstractControl): ValidationErrors | null {

      if((control.value as string).indexOf(' ')>=0)
        return { noSpace : true};
        /*
          return { minlength : {
            requiredLength : 10,
            actualLength : control.value.length,
          }};

        */
      return null;
    }

    static shouldBeUnique(control:AbstractControl) : Promise<ValidationErrors | null>{
      //Returns result to the consumer of the promise
       return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(control.value ==='mosh')
              resolve ({shouldBeUnique : true});
          else
           resolve(null);
        },2000);
       });
    }
    /*Problem is it will always return null to avoid this there is different syntax
    for asynchronous operations
    static shouldBeUnique(control:AbstractControl) : ValidationErrors | null{

      //Asynchronous Operation
      setTimeout(() => {
        console.log("Ok");
        if(control.value == 'Mosh')
        return {shouldBeUnique : true}
      return null;
      },2000);
      return null;
    }*/

}
