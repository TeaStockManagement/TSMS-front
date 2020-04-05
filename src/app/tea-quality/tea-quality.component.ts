import { Component, OnInit } from '@angular/core';
import { SupplerorderService } from '../_services/supplerorder.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-tea-quality',
  templateUrl: './tea-quality.component.html',
  styleUrls: ['./tea-quality.component.css']
})
export class TeaQualityComponent implements OnInit {

  qualityadd:string;
  constructor( 
        public supplerorder:SupplerorderService,
        private _flashMessagesService: FlashMessagesService

        ) { }

  ngOnInit(): void {

  }

  AddTeaQuality(){
    
    const teaquality = {
        
    qualityadd:this.qualityadd

    }
    this.supplerorder.addTeaQualityDB(teaquality).subscribe(
      (res:any)=>{
        if(res.state){
          this._flashMessagesService.show('Tea quality successfully Added !', { cssClass: 'alert-success', timeout: 2500 });
        }
        else{
          this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 2500 });
        }
      }
    )
  }

}
