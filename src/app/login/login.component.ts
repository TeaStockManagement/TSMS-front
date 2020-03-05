import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiUrl="http://localhost:3000";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .subscribe(
            data => {
                console.log(data);
                this.router.navigateByUrl(`/home`);
            },
            error => {
                console.log(error);
            });
    this.loginForm.reset();
  }

}
