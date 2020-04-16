import { Component, OnInit } from '@angular/core';
import { SupplerorderService } from '../_services/supplerorder.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-tea-quality',
  templateUrl: './tea-quality.component.html',
  styleUrls: ['./tea-quality.component.css']
})
export class TeaQualityComponent implements OnInit {

  details:any;
  qualityadd:string;
  deleteID:any;
  modeldata:any;


  
 
  constructor( 
        public supplerorder:SupplerorderService,
        private _flashMessagesService: FlashMessagesService,
        private router:Router
 
        ) { }

  ngOnInit(): void {

    this.supplerorder.getqualitydetails().subscribe(
      data=>{
        this.details=data['result']; 
        //console.log(this.details);
      }
    );
  }

  onUpdate(detail){
    console.log(detail);
    this.modeldata = detail['quality'];
    console.log(this.modeldata);
  }

  onDelete(_deleteID){

   
    const deletequality = {
       deleteID:_deleteID
    }
    
    this.supplerorder.DeleteTeaquality(deletequality).subscribe();
    this.supplerorder.getqualitydetails().subscribe(
      data=>{
        this.details=data['result'];   
        //console.log(this.details);
      }
    
    );

  }

  AddTeaQuality(){
    
    const teaquality = {
        
    qualityadd:this.qualityadd

    }
    
    this.supplerorder.addTeaQualityDB(teaquality).subscribe(
      (res:any)=>{
        if(res.state){
          this._flashMessagesService.show('Tea quality successfully Added !', { cssClass: 'alert-success', timeout: 2500 });
          this.supplerorder.getqualitydetails().subscribe(
            data=>{
              this.details=data['result'];   
              //console.log(this.details);
            }
          
          );
          
        }
        else{
          this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 2500 });
        }
      }
    )
  }

}


