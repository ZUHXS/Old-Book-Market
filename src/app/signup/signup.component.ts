import { AuthService } from './../auth.service';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private notificationsService: NotificationsService,
    private authService: AuthService
  ) {
   this.signupForm = fb.group({
    nick: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    password2: ['', [Validators.required, Validators.minLength(8)]]
   }, {validators: (group: FormGroup) => {
     const p1 = group.get('password');
     const p2 = group.get('password2');
     const password1 = p1 ? p1.value : '';
     const password2 = p2 ? p2.value : '';
     return password1 !== password2 ? { passwordNotEqual: true} : null;
   }});
  }

  get email() {
    return this.signupForm.get('email') as any;
  }

  get password() {
    return this.signupForm.get('password') as any;
  }

  get password2() {
    return this.signupForm.get('password2') as any;
  }

  get nick() {
    return this.signupForm.get('nick') as any;
  }
  ngOnInit() {
  }

  OnSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    console.log('register with' + this.email.value + ' ' + this.password.value);
    this.authService.register(this.email.value as string, this.password.value as string, this.nick.value as string);
  }

}
