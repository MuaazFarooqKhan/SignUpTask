import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-side',
  templateUrl: './form-side.component.html',
  styleUrls: ['./form-side.component.scss']
})
export class FormSideComponent implements OnInit {
  registerForm: FormGroup;
  passwordQuality:number=33
  passwordQualityDescription:string=""
  user_country:any
  countries_Codes=[{value:"+1",viewValue:"+1"},{value:"+34",viewValue:"+34"},{value:"+91",viewValue:"+91"}]
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      phonenumber: ['', [
        Validators.required,
       Validators.pattern("^[0-9]*$"),
       Validators.minLength(7), Validators.maxLength(15)]],
       email:["",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
       firstName:["",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]*$")]],
       lastName:["",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]*$")]],
       password:["",[Validators.required, Validators.minLength(8)]],
       userCountry: ['', [Validators.required]],
       check: [''],
       date: [''],
   });
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit() {
    
}

get f() { return this.registerForm.controls; }
onSubmit(registerForm) {
  console.log(this.registerForm.value)
    if (this.registerForm.invalid) {
        return;
    }
   
}

containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}
 containsNumber(str) {
  return /\d/.test(str);
}

checkPasswordQuality(password){
  this.passwordQuality=0
  if(password.length>=6){
    this.passwordQuality+=33.33
  }
  if(this.containsSpecialChars(password)){
    this.passwordQuality+=33.33
  }
  if(this.containsNumber(password)){
    this.passwordQuality+=33.33
  }
  if(this.passwordQuality==99.99){
    this.passwordQualityDescription="Strong"
  }
  if(this.passwordQuality>=66.66 && this.passwordQuality<99.99){
    this.passwordQualityDescription="Normal"
  }
  if(this.passwordQuality<=33.33){
    this.passwordQualityDescription="Weak"
  }
}


}
