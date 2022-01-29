import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-find-email',
  templateUrl: './find-email.component.html',
  styleUrls: ['./find-email.component.scss']
})
export class FindEmailComponent implements OnInit {
  findemailForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.findemailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get f() { return this.findemailForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.findemailForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.findemailForm.value, null, 4));
  }

}



