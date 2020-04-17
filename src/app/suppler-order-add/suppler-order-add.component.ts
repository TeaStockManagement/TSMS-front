import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from "jquery";

import { AuthenticationService} from '../_services/authentication.service'
import { RepService } from '../_services/rep.service';
import { SupplerorderService } from '../_services/supplerorder.service';

@Component({
  selector: 'app-suppler-order-add',
  templateUrl: './suppler-order-add.component.html',
  styleUrls: ['./suppler-order-add.component.css']
})
export class SupplerOrderAddComponent implements OnInit {
  addShopForm:FormGroup
  apiUri='http://localhost:3000';
  shops: any;
  productItems:any;
  quantity:any=0;
  items=[];
  itemNo:any=0;
  mySubscription: any;
  constructor(private router:Router,
  private AuthenticationService:AuthenticationService,
  private formBuilder: FormBuilder,
  private repservice:RepService,
  private supplerorderservice:SupplerorderService) {
    
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
   }

   ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
   
  this.viewSuppler();
  this.getProductItems();

  }

  getProductItems(){
    this.supplerorderservice.getItemTeadetails().subscribe(
      data=>{
        this.productItems=data['result'];
        console.log(this.productItems);
      }
    )
  }

 getPrice(name){
   for(var i=0;i<this.productItems.length;i++){
     if(this.productItems[i].Item===name){
       return this.productItems[i].SellUnitPrice
     }
   }
 }

  addItem(quantity){
    var itemName=$("#selectItem").val();
    var itemPrice=this.getPrice(itemName);
    var totalPrice=itemPrice * quantity;
    this.items.push({itemName:itemName,quantity:quantity,price:totalPrice});
  }

  deleteItem(item){
    console.log(item);
    for(var i=0;i<this.items.length;i++){
      if(this.items[i].itemName===item){
        this.items.splice(i,1)
      }
    }
  }
  addOrder(){
    var billTotal=0;
    for(var i=0;i<this.items.length;i++){
      billTotal=billTotal+this.items[i].price;
    }
    var shopName=$("#shopName").val();
    var date=$("#datePicker").val();
    var order={
      shopName:shopName,
      date:date,
      details:this.items,
      billTotal:billTotal
    }
    console.log(order);
    this.repservice.addOrder(order).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl(`/rep-home`)
      },err=>{
        console.log(err);
        
      }
    )
  }
  viewSuppler(){
    this.supplerorderservice.getTeaBrokerdetails().subscribe()
  }
}
