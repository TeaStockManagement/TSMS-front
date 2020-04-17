import { Component, OnInit } from '@angular/core';
import { SupplerorderService } from '../_services/supplerorder.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

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
  qualityupdate:any;
  qualityID:any;
  
 
  constructor( 
        public supplerorder:SupplerorderService,
        public _flashMessagesService: FlashMessagesService,
        private router:Router
 
        ) { }

  ngOnInit(): void {

    this.supplerorder.getqualitydetails().subscribe(
      data=>{
        this.details=data['result'];
      });
  }

  //Set model data
  onUpdate(detail){
    this.modeldata = detail['quality'];
    this.qualityID = detail['_id'];
   // console.log(this.modeldata);
    //console.log(this.qualityID);
  }
 
  //Get model data update
 UpdateTeaModel(){
    const teaquality = {
      qualityupdate:this.qualityupdate,
      qualityID:this.qualityID
    }
 
    this.supplerorder.updateTeaQualityDB(teaquality).subscribe(
      (res:any)=>{
        if(res.state){
          this._flashMessagesService.show('Tea quality successfully Added !', { cssClass: 'alert-success', timeout: 2500 });  
        }
        else{
          this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 2500 });
        }
      });
      
      //refresh data
      this.supplerorder.getqualitydetails().subscribe(
        data=>{
          this.details=data['result'];
        });
  }

  //Delete Tea Quality
  onDelete(_deleteID){

    const deletequality = {
       deleteID:_deleteID
    }
    
    this.supplerorder.DeleteTeaquality(deletequality).subscribe(
      (res:any)=>{
        console.log(res);
        if(res.state){
          this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 5000 });
        }
        else{
          this._flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 2500 });
        }
      });
      //refresh data
    this.supplerorder.getqualitydetails().subscribe(
      data=>{
        this.details=data['result'];   
      });

  }


  //Add Tea Quality 
  AddTeaQuality(){
    
    const teaquality = {       
    qualityadd:this.qualityadd
    }
    
    this.supplerorder.addTeaQualityDB(teaquality).subscribe(
      (res:any)=>{
       // console.log(res.state);
          if(res.state){
            this._flashMessagesService.show('Tea quality successfully Added !', { cssClass: 'alert-success', timeout: 2500 });      
          }
          else{
           this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 2500 });
         }
      });
      //refresh data
      this.supplerorder.getqualitydetails().subscribe(
        data=>{
          this.details=data['result'];   
          //console.log(this.details);
        });
  }

}


