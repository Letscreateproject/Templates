import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicantComponent } from './add-applicant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonPageHeaderComponent } from '../shared-component/common-page-header/common-page-header.component';

describe('AddApplicantComponent', () => {
  let component: AddApplicantComponent;
  let fixture: ComponentFixture<AddApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddApplicantComponent, CommonPageHeaderComponent],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    component.profileForm.patchValue({
      firstName: '',
      lastName: '',
      email: '',
      address1: '',
    });
    expect(component.profileForm.valid).toBeFalsy();
  });
  it('should be valid with a valid  ', () => {
    component.profileForm.patchValue({
      firstName: 'mithun',
      lastName: 'Raj',
      email: 'm@d.com',
      address1: 'sss',
    });
    expect(component.profileForm.valid).toBeTruthy();
  });

  it('should have a required First Name field', () => {
    const usernameControl = component.profileForm.controls['firstName'];
    usernameControl.setValue('');
    expect(usernameControl.hasError('required')).toBeTruthy();
  });

  it('should have a required Last Name field', () => {
    const passwordControl = component.profileForm.controls['lastName'];
    passwordControl.setValue('');
    expect(passwordControl.hasError('required')).toBeTruthy();
  });

  it('should have a required email field', () => {
    const passwordControl = component.profileForm.controls['email'];
    passwordControl.setValue('');
    expect(passwordControl.hasError('required')).toBeTruthy();
  });

  it('should have a first Name with minimum length validation', () => {
    const usernameControl = component.profileForm.controls['firstName'];
    usernameControl.setValue('ab');
    expect(usernameControl.hasError('minlength')).toBeTruthy();
  });

  it('should have a Last Name with minimum length validation', () => {
    const passwordControl = component.profileForm.controls['lastName'];
    passwordControl.setValue('12');
    expect(passwordControl.hasError('minlength')).toBeTruthy();
  });
  it('should have a First Name with maximum length validation', () => {
    const usernameControl = component.profileForm.controls['firstName'];
    usernameControl.setValue('12345678910');
    expect(usernameControl.hasError('maxlength')).toBeTruthy();
  });

  it('should have a Last Name with maximum length validation', () => {
    const passwordControl = component.profileForm.controls['lastName'];
    passwordControl.setValue('12345678910');
    expect(passwordControl.hasError('maxlength')).toBeTruthy();
  });
});
