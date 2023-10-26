import { Component, OnInit } from '@angular/core';
import {CryptoService} from '../crypto.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detaills',
  templateUrl: './detaills.component.html',
  styleUrls: ['./detaills.component.css']
})
export class DetaillsComponent implements OnInit {
  id:any='';
 
  dataa:any={};
  allCrypto:any= {};
  constructor(public _CryptoService:CryptoService ,public _ActivatedRoute:ActivatedRoute ) {
    this.id=this._ActivatedRoute.snapshot.paramMap.get("name");
    
   }

  ngOnInit() {
    this._CryptoService.cryptoD().subscribe((data) => {
     
      this.allCrypto=data.data.coins; 
      for (let i of this.allCrypto)
      {
        if (i.symbol==this.id)
        {this.dataa=i;
      break;}
      
      }
     
      console.log(this.dataa);
      this.ngOnInit();
    });
  }



}
