import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetpassForm!: FormGroup;
  submitted = false;
  token:any;

  constructor(private formBuilder: FormBuilder, private user: UserService, private ActivatedRouter:ActivatedRoute) { }

  
  ngOnInit() {
    this.token=this.ActivatedRouter.snapshot.paramMap.get('token');
    this.resetpassForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    
  }
  get f() { return this.resetpassForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.resetpassForm.valid) {
      console.log(this.resetpassForm.value,this.token);
      let reqData={
        email:this.resetpassForm.value.email,
        password:this.resetpassForm.value.password
      }
      this.user.resetPassword(reqData,this.token).subscribe((response:any)=>{
        console.log(response);   
      })
    } 
  }
}


