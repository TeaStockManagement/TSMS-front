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


  constructor(
    public supplerorder:SupplerorderService,
    private _flashMessagesService: FlashMessagesService
 ) { }

  ngOnInit(): void {
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
)
       
  }

}
