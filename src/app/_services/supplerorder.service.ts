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

  addTeaQualityDB(teaquality){
    
    return this.http.post(`${this.apiUri}/TeaQuality/addteaquality`,teaquality);

  }

  getqualitydetails(){
    return this.http.get(`${this.apiUri}/TeaQuality/allteaquality`);
  }
    
  addItemDB(item){
   
    return this.http.post(`${this.apiUri}/Item/additem`,item);
  }

}
