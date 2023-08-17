import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive_form';


  signupForm = new FormGroup({
      name : new FormControl('' ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      age : new FormControl('' , [Validators.required,Validators.min(10),Validators.max(50)]),
      email : new FormControl('' , [Validators.required,Validators.pattern('^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})')]),
      pass : new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')])  
    });

  //Email :-  ^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$
  // Password :- (?=^.{8,}$)((?=.*\d)|(?=.\*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$
  //^([a-zA-Z0-9@*#]{8,15})$

  handleSubmit(){
   console.log(this.signupForm.value); 
  }
get f(){
  return this.signupForm.controls;
}

}
