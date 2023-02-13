import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

// const trimValidator: ValidatorFn = (control: FormControl) => {
//   if (control.value.startsWith(' ')) {
//     return {
//       'trimError': { value: 'control has leading whitespace' }
//     };
//   }
//   if (control.value.endsWith(' ')) {
//     return {
//       'trimError': { value: 'control has trailing whitespace' }
//     };
//   }

//   return null;
// };
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup | any;
  showPassword: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    this.loginformvalidation()
  }


  loginformvalidation() {
    this.loginform = new FormGroup({
      'Email': new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'Password': new FormControl('', [Validators.required,Validators.minLength(8), Validators.maxLength(16), Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}")]),
    });
  }

  onSubmit() {
    console.log(this.loginform.value);
  }

}
