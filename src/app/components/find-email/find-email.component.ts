import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-find-email',
  templateUrl: './find-email.component.html',
  styleUrls: ['./find-email.component.scss']
})
export class FindEmailComponent implements OnInit {
  findemailForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit() {
    this.findemailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get f() { return this.findemailForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.findemailForm.valid) {
      let reqData={
        email:this.findemailForm.value.email
      }
      this.user.forgetPassword(reqData).subscribe((response:any)=>{
        console.log(response);
        //localStorage.setItem("token",response.id)
      })
    }
   //this.token = this.activeRoute.snapshot.paramMap.get('token');
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.findemailForm.value, null, 4));
  }

}



