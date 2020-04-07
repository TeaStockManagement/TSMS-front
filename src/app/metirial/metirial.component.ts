import { Component, OnInit } from '@angular/core';
import { SupplerorderService } from '../_services/supplerorder.service'

@Component({
  selector: 'app-metirial',
  templateUrl: './metirial.component.html',
  styleUrls: ['./metirial.component.css']
})
export class MetirialComponent implements OnInit {


  metirialadd:string;
  constructor(
    public supplerorderservice:SupplerorderService
  ) { }

  ngOnInit(): void {
  }

  AddMetirial(){

    const metirialobj = {
      metirialadd:this.metirialadd
    }
   
   this.supplerorderservice.addMetirialDB(metirialobj).subscribe();
  }

}
