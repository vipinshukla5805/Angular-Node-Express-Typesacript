import { Component } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators,FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckInComponent {
  title = 'app';
  appForm: FormGroup;
  bookingCode;
  familyCode;
  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.appForm = this.fb.group({
      bookingCodeFromControl: [null,Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')])],
      familyCodeFormControl: [null,Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z]*$')])]
    });
  }

  onFormSubmit(val){
    console.log(val);
  }


}
