import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUri='http://localhost:3000';
  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post(`${this.apiUri}/users/register`,user);
  }
  registerEvent(event){
    return this.http.post(`${this.apiUri}/event/add`,event);
  }
}
