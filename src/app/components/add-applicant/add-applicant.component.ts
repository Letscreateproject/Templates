import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.scss'],
})
export class AddApplicantComponent implements OnInit {
  profileForm: any = FormGroup;
  constructor(private router: Router, public dialog: MatDialog) {}
  gender: any = [
    { viewValue: 'Male', value: 'Male' },
    { viewValue: 'Female', value: 'Female' },
  ];
  options: string[] = ['Option1', 'Option2', 'Option3'];
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      dob: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl('', Validators.required),
      phone: new FormControl(''),
      address1: new FormControl('', Validators.required),
      address2: new FormControl(''),
      autocomplete: new FormControl(''),
      mfaEnabed: new FormControl(''),
    });
    this.filteredOptions =
      this.profileForm.controls.autocomplete.valueChanges.pipe(
        startWith(''),
        map((value: any) => this._filter(value || ''))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  submit() {
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      // success
    }
  }
  signIn() {
    this.router.navigate(['/login']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '700px',
      height: '270px',

      data: {
        data: 'data',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
