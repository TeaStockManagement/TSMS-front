import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

import { SupplerorderService } from '../_services/supplerorder.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-suppler-order-add',
  templateUrl: './suppler-order-add.component.html',
  styleUrls: ['./suppler-order-add.component.css']
})
export class SupplerOrderAddComponent implements OnInit {

  details:any;
  myControl = new FormControl();
  options:any;

  constructor(
           public supplerorder:FormBuilder, 
           public supplerorderservice:SupplerorderService
          ) {   }


  ngOnInit(): void {

    this.supplerorderservice.getTeaBrokerdetails().subscribe(
      data=>{
        this.options=data['result']; 
      }
    );

    this.supplerorderservice.getaddorderdata();

  }


}
