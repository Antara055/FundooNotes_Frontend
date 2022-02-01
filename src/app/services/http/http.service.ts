import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseURL
  constructor(private httpClient: HttpClient) { }
  postService(url: string, reqdata: any, token: boolean = false, httpOption: any = {}) {
    return this.httpClient.post(this.baseUrl + url, reqdata, token && httpOption)
  }
  putService(url: string, reqdata: any, token: boolean = false, httpOption: any = {}) {
    return this.httpClient.put(this.baseUrl + url, reqdata, token && httpOption)
  }
}
