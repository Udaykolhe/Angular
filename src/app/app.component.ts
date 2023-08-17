import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive_form';

  hobbiesArray: string[] = ['Cricket', 'FootBall', 'Pool','Chess','Reading',];



  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(50)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})')]),
    pass: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),
    gender: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    accept: new FormControl(false, Validators.requiredTrue),
    hobbies: new FormArray([], [Validators.required])

  });

  //Email :-  ^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$
  // Password :- (?=^.{8,}$)((?=.*\d)|(?=.\*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$
  //^([a-zA-Z0-9@*#]{8,15})$

  onChange(e: any) {
    let selectedValue = e.target.value;
    const checked = e.target.checked;
    console.log(selectedValue, checked)

    const checkedArray = this.signupForm.get('hobbies') as FormArray;
    if (checked) {
      checkedArray.push(new FormControl(selectedValue));
    } else {
      let i: number = 0;
      checkedArray.controls.forEach((item) =>{
            if(item == selectedValue){
              checkedArray.removeAt(i);
            }
            i++;
      });
    }
  }

  handleSubmit() {
    console.log(this.signupForm.value);
  }
  get f() {
    return this.signupForm.controls;
  }

}
