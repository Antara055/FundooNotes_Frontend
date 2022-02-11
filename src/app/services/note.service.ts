import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private httpService:HttpService) { }
  token:any
  createNote(reqdata:any){
    this.token=localStorage.getItem('token')
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'token':this.token
      })
    }
    return this.httpService.postService('/notes',reqdata,true,header)
  }
  getAllNotes(){
    this.token=localStorage.getItem('token')
    let header = {
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.getService('/notes/',true,header)
  }
  updateNotes(reqData:any){
    this.token=localStorage.getItem('token')
    let header = {
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.putService('/notes/note:_id',reqData,true,header)
  }
  archiveNotes(reqData:any){
    this.token=localStorage.getItem('token')
    let header = {
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.putService('/notes/archieve/_id',reqData,true,header)
  }
  trashNotes(reqData:any){
    this.token=localStorage.getItem('token')
    let header={
      headers: new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.putService('/notes/trash/_id',reqData,true,header)
  }
}


  