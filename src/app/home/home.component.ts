import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { AuthenticationService} from '../_services/authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  users:any;
  apiUri='http://localhost:3000';
  constructor(
    private http: HttpClient,
    private AuthenticationService:AuthenticationService,
    private router: Router,
    breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }

  onclick(){
    this.http.get(`${this.apiUri}/users`).subscribe(data=>{
      this.users=data;
      console.log(this.users);
    })
  }
  onLogout(){
    this.AuthenticationService.logout();
    this.router.navigateByUrl(`/login`);
  }

}
