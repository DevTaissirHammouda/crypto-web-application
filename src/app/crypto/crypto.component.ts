import { Component, OnInit } from '@angular/core';
import {CryptoService} from '../crypto.service';
@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {


allCrypto:any= {};
search: any;
term: string="";
  constructor(public _CryptoService:CryptoService) {
    this._CryptoService.cryptoD().subscribe((data) => {
      this.allCrypto=data.data.coins;
      console.log(this.allCrypto); 
    });
   
   }
      



  ngOnInit() {
  }

}
