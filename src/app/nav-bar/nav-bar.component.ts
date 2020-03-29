import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService} from '../_services/authentication.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private AuthenticationService:AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onLogout(){
    this.AuthenticationService.logout();
    this.router.navigateByUrl(`/login`);
  }

}
