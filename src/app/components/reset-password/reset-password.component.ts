import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetpassForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  
  ngOnInit() {
    this.resetpassForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() { return this.resetpassForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.resetpassForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetpassForm.value, null, 4));
  }


}


