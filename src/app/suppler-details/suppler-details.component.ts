import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplerorderService } from '../_services/supplerorder.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-suppler-details',
  templateUrl: './suppler-details.component.html',
  styleUrls: ['./suppler-details.component.css']
})
export class SupplerDetailsComponent implements OnInit {

  brokerAddForm: FormGroup;
  details:any;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public supplerorder:SupplerorderService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void {

    this.brokerAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required,Validators.maxLength(10)]],
      email: ['', Validators.email],
      vatRegNo:['',[Validators.maxLength(100)]],
      address:['',[Validators.maxLength(255)]]

  });

  
  this.supplerorder.getITeaBrokerdetails().subscribe(
    data=>{
      this.details=data['result']; 
    });
    (res:any)=>console.log(res);

  }

  onSubmit(){
     this.supplerorder.BrokerAdd(this.brokerAddForm.value).subscribe(
      (res:any)=>{
        if(res.state){
          this._flashMessagesService.show('Tea Item successfully Added !', { cssClass: 'alert-success', timeout: 2500 });
        }
        else{
          this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 2500 });
        }
      });

      this.supplerorder.getITeaBrokerdetails().subscribe(
        data=>{
          this.details=data['result']; 
        });
        (res:any)=>console.log(res);

  }

  
  onDelete(_id){

  }
  onUpdate(detail){

  }




}
