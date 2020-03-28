import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      mobile: ['', [Validators.required,Validators.maxLength(10)]],
      email: ['', Validators.email],
      nic: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  onSubmit(){
    this.userService.registerUser(this.registerForm.value).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl(`/login`);
      },
      err=>{
        console.log(err);
      })
      this.registerForm.reset();
  }

}
