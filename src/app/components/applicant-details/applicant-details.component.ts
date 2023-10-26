import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/models/applicant';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.scss'],
})
export class ApplicantDetailsComponent implements OnInit {
  applicant: Applicant = {};
  constructor() {}

  ngOnInit(): void {
    this.getApplicantDetails();
  }
  /**
   * Function to get the details of applicant
   */
  getApplicantDetails() {
    this.applicant = {
      id: 'AAA00123',
      firstName: 'John',
      middleName: 'S',
      lastName: 'Doe',
      countryOfBirth: 'Virgenia',
      dob: '20/10/1988',
      gender: 'Male',
    };
  }
}
