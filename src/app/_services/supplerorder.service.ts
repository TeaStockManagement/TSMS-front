import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplerorderService {

  authtoken:any;
  apiUri='http://localhost:3000';

  constructor(private http: HttpClient) { }



  fetchToken(){
    this.authtoken =localStorage.getItem("token");
  }

  addMetirialDB( metirialobj ){
    console.log(metirialobj);
   
     return this.http.post(`${this.apiUri}/metirial/addmetiral`,metirialobj);  
  }

   getaddorderdata(){
      
      this.fetchToken();
   }



}
