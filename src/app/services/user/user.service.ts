import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  registration(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService('/users/register',reqdata,false,header)
  }
  login(reqdata:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorization':'token'
      })
    }
    return this.httpService.postService('/users/login',reqdata,false,header)
  }
  forgetPassword(reqdata:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService('/users/forgetpassword',reqdata,false,header)
  }
  resetPassword(reqdata:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'token':token
      })
    }
    return this.httpService.putService('/users/resetpassword',reqdata,true,header)
  }
  
}
