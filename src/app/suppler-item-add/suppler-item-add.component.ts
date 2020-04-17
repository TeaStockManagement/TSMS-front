import { Component, OnInit } from '@angular/core';
import { SupplerorderService } from '../_services/supplerorder.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-suppler-item-add',
  templateUrl: './suppler-item-add.component.html',
  styleUrls: ['./suppler-item-add.component.css']
})
export class SupplerItemAddComponent implements OnInit {

  item:any;
  buyprice:any;
  sellprice:any;
  details:any;
  modelitem:any;
  modelbuyunitprice:any;
  modelsellunitprice:any;
  itemID:any;
  updatebuyprice:any;
  updatesellprice:any;


  constructor(
    public supplerorder:SupplerorderService,
    private _flashMessagesService: FlashMessagesService
 ) { }

  ngOnInit(): void {

    this.supplerorder.getItemTeadetails().subscribe(
      data=>{
        this.details=data['result']; 
        // console.log(this.details);
      });
     
  }

  AddItem(){
   const itemadd  = {
      item:this.item,
      buyprice:this.buyprice,
      sellprice:this.sellprice
   }
  
  this.supplerorder.addItemDB(itemadd).subscribe(

          (res:any)=>{
            if(res.state){
              this._flashMessagesService.show('Tea Item successfully Added !', { cssClass: 'alert-success', timeout: 2500 });
            }
            else{
              this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 2500 });
            }
          }
        );
      //refresh data
      this.supplerorder.getItemTeadetails().subscribe(
        data=>{
          this.details=data['result']; 
          // console.log(this.details);
        });   
       
  }

//Set model data
UpdateItemModel(detail){
  this.modelitem = detail['Item'];
  this.modelbuyunitprice = detail['BuyUnitPrice'];
  this.modelsellunitprice = detail['SellUnitPrice'];
  this.itemID = detail['_id'];
 // console.log(this.modeldata);
 
}

onUpdate(){
   
    const teaQualityData = {
      _id:this.itemID,
      item:this.modelitem,
      updatebuyprice:this.updatebuyprice,
      updatesellprice:this.updatesellprice
    }
    console.log(teaQualityData);
    this.supplerorder.updateTeaItem(teaQualityData).subscribe();

     //refresh data
     this.supplerorder.getItemTeadetails().subscribe(
      data=>{
        this.details=data['result']; 
        // console.log(this.details);
      });   
    
}

  onDelete(_deleteID) {
  
    const deleteItem = {
       deleteID:_deleteID
    }
    this.supplerorder.DeleteTeaItem(deleteItem).subscribe();

    this.supplerorder.getItemTeadetails().subscribe(
      data=>{
        this.details=data['result']; 
      });   

  }

}