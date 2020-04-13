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


  DeleteTeaquality(deleteId){
   
    return this.http.put(`${this.apiUri}/TeaQuality/deleteQuality`,deleteId);
    
  }
    
  addItemDB(item){
   
    return this.http.post(`${this.apiUri}/Item/additem`,item);
  }

  getItemTeadetails(){
    return this.http.get(`${this.apiUri}/Item/getAllItem`);
  }

  DeleteTeaItem(deleteID){
    return this.http.put(`${this.apiUri}/Item/deleteItem`,deleteID);
  }


  BrokerAdd(user){
    return this.http.post(`${this.apiUri}/Broker/addbroker`,user);
  }

  getITeaBrokerdetails(){
    return this.http.get(`${this.apiUri}/Broker/getAllBroker`);
  }
  DeleteBroker(brokerID){
    return this.http.put(`${this.apiUri}/Broker/deleteBroker`,brokerID);
  }

}
