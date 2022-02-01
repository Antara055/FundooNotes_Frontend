import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


 @Component({
   selector: 'app-registration',
   templateUrl: './registration.component.html',
   styleUrls: ['./registration.component.scss']
 })

 export class RegistrationComponent implements OnInit {

registerForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private user: UserService,private _snackBar: MatSnackBar) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            //acceptTerms: [false, Validators.requiredTrue]
        } /* {
            validator: MustMatch('password', 'confirmPassword')
        } */);
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.valid) {
            let reqData={
                firstName:this.registerForm.value.firstName,
                lastName:this.registerForm.value.lastName,
                email:this.registerForm.value.email,
                password:this.registerForm.value.password
            }
            this.user.registration(reqData).subscribe((response:any)=>{
                console.log(response);
            })
                this._snackBar.open("register succesfully",'',{
                    duration:  1000,
                  })
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

        }      
    }
} 
