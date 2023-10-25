import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  profileForm: any = FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
    });
  }

  submit() {
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      this.router.navigate(['/home/dashboard']);
    }
  }
  signup() {
    this.router.navigate(['/signup']);
  }
  forgot() {
    this.router.navigate(['/forgotpassword']);
  }
}
