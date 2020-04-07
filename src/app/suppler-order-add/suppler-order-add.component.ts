import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

import { SupplerorderService } from '../_services/supplerorder.service'

@Component({
  selector: 'app-suppler-order-add',
  templateUrl: './suppler-order-add.component.html',
  styleUrls: ['./suppler-order-add.component.css']
})
export class SupplerOrderAddComponent implements OnInit {

  paymenttype: any = ['Cash', 'Check', 'Credit']

  constructor(
           public supplerorder:FormBuilder, 
          public supplerorderservice:SupplerorderService
          ) { }

  ngOnInit(): void {

    this.supplerorderservice.getaddorderdata();

  }






   addorder = this.supplerorder.group({
    name: ['']
  });








  onSubmit() {
    alert(JSON.stringify(this.addorder.value))
  }

}
