import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepService {

  apiUri='http://localhost:3000';
  constructor(private http: HttpClient) { }

  allShops(){
    return this.http.get(`${this.apiUri}/shops/all`);
  }
  
  registerShop(shop){
    return this.http.post(`${this.apiUri}/shops/add`,shop);
  }
}
