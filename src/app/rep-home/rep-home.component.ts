import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationEnd } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as $ from "jquery";

import { AuthenticationService } from "../_services/authentication.service";
import { RepService } from "../_services/rep.service";
import { SupplerorderService } from "../_services/supplerorder.service";

@Component({
  selector: "app-rep-home",
  templateUrl: "./rep-home.component.html",
  styleUrls: ["./rep-home.component.css"],
})
export class RepHomeComponent implements OnInit {
  addShopForm: FormGroup;
  apiUri = "http://localhost:3000";
  shops: any;
  productItems: any;
  quantity: any = 0;
  items = [];
  itemNo: any = 0;
  mySubscription: any;
  billTotal: any = 0;
  cashAmount: any;
  chequeAmount: any;
  creditAmount: any;
  markedCash:any=false;
  markedCheque:any=false;
  markedCredit:any=false;
  constructor(
    private router: Router,
    private AuthenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private repservice: RepService,
    private supplerorderservice: SupplerorderService
  ) {
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
    this.addShopForm = this.formBuilder.group({
      name: ["", Validators.required],
      address: ["", Validators.required],
      mobile: ["", Validators.required],
    });
    this.viewShops();
    this.getProductItems();
  }

  toggleVisibilityCash(e){
    this.markedCash= e.target.checked;
  }
  toggleVisibilityCheque(e){
    this.markedCheque= e.target.checked;
  }
  toggleVisibilityCredit(e){
    this.markedCredit= e.target.checked;
  }

  logOut() {
    this.AuthenticationService.logout();
    this.router.navigateByUrl(`/login`);
  }
  addShop() {
    this.repservice.registerShop(this.addShopForm.value).subscribe(
      (data) => {
        console.log(data);
        this.viewShops();
        this.addShopForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getProductItems() {
    this.supplerorderservice.getItemTeadetails().subscribe((data) => {
      this.productItems = data["result"];
      console.log(this.productItems);
    });
  }

  getPrice(name) {
    for (var i = 0; i < this.productItems.length; i++) {
      if (this.productItems[i].Item === name) {
        return this.productItems[i].SellUnitPrice;
      }
    }
  }

  addItem(quantity) {
    this.billTotal = 0;
    var itemName = $("#selectItem").val();
    var itemPrice = this.getPrice(itemName);
    var totalPrice = itemPrice * quantity;
    this.items.push({
      itemName: itemName,
      quantity: quantity,
      price: totalPrice,
    });
    this.calculateBill();
  }

  deleteItem(item) {
    this.billTotal = 0;
    console.log(item);
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].itemName === item) {
        this.items.splice(i, 1);
        this.calculateBill();
      }
    }
  }

  calculateBill() {
    for (var i = 0; i < this.items.length; i++) {
      this.billTotal = this.billTotal + this.items[i].price;
    }
  }

  addOrder() {
    var shopName = $("#shopName").val();
    var date = $("#datePicker").val();
    var order = {
      shopName: shopName,
      date: date,
      details: this.items,
      billTotal: this.billTotal,
      cashAmount: this.cashAmount,
      chequeAmount: this.chequeAmount,
      creditAmount: this.creditAmount,
    };
    this.repservice.addOrder(order).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/rep-home')
      },
      (err) => {
        console.log(err);
      }
    );
  }
  viewShops() {
    this.repservice.allShops().subscribe(
      (data) => {
        this.shops = data["data"];
        console.log(this.shops);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
