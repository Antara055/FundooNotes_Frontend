import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private user: UserService, private router:Router) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.signinForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      let reqData={
        email:this.signinForm.value.email,
        password:this.signinForm.value.password
    }
    this.user.login(reqData).subscribe((response:any)=>{
        console.log(response.data.UserDetails.token);
        localStorage.setItem('token',response.data.UserDetails.token);
        this.router.navigateByUrl("/dashboard/notes"); 
      
    })
    }
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signinForm.value, null, 4));
   
}


}
