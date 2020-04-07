import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService} from '../_services/authentication.service'
import { RepService } from '../_services/rep.service';


@Component({
  selector: 'app-rep-home',
  templateUrl: './rep-home.component.html',
  styleUrls: ['./rep-home.component.css']
})
export class RepHomeComponent implements OnInit {

  addShopForm:FormGroup
  apiUri='http://localhost:3000';
  shops: any;
  constructor(private router:Router,
  private AuthenticationService:AuthenticationService,
  private formBuilder: FormBuilder,
  private repservice:RepService) { }

  ngOnInit(): void {
    this.addShopForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required]
  });
  this.viewShops();
  }

  logOut(){
    this.AuthenticationService.logout();
    this.router.navigateByUrl(`/login`);
  }
  addShop(){
    this.repservice.registerShop(this.addShopForm.value).subscribe(
      data=>{
        console.log(data);
        this.viewShops();
        this.addShopForm.reset();
      },err=>{
        console.log(err);
      }
    )
  }
  viewShops(){
    this.repservice.allShops().subscribe(
      data=>{
        this.shops=data['data'];
        console.log(this.shops);
      },err=>{
        console.log(err);
      }
    )
  }
}
