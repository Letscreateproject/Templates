import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.scss'],
})
export class AddApplicantComponent implements OnInit {
  profileForm: any = FormGroup;
  constructor(private router: Router) {}
  gender: any = [
    { viewValue: 'Male', value: 'Male' },
    { viewValue: 'Female', value: 'Female' },
  ];

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      if (
        this.profileForm.value.username == 'Operator' ||
        this.profileForm.value.username == 'Manager' ||
        this.profileForm.value.username == 'operator' ||
        this.profileForm.value.username == 'manager'
      ) {
        // debugger
        localStorage.setItem('Operator', this.profileForm.value.username);
        if (
          this.profileForm.value.username == 'Operator' ||
          this.profileForm.value.username == 'operator'
        ) {
          this.router.navigate(['/home/process']);
        } else {
          this.router.navigate(['/home/voucherlist']);
        }
      } else {
        alert('No User Found');
      }
    }
  }
  signIn() {
    this.router.navigate(['/login']);
  }
}