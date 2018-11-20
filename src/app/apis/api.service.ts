import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://restaurantapis.local/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'secure':'true',
      'changeOrigin':'true'
      })
  };
  
  constructor(private httpclient:HttpClient) {}
   getUserslist()
   {
    return  this.httpclient.get(`${this.API_URL}/userLists`);
   }
   registerUser(user)
   {
     return  this.httpclient.post(`${this.API_URL}/registerUser`,user);
  }
}
