import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rep-orders',
  templateUrl: './rep-orders.component.html',
  styleUrls: ['./rep-orders.component.css']
})
export class RepOrdersComponent implements OnInit {

  user:any;
  constructor() { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.user['data'].id);
    
  }

}
