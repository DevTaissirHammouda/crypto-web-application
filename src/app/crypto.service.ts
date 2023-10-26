import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment"
@Injectable({
  providedIn: 'root'
})

export class CryptoService {

  constructor( public _HttpClient:HttpClient) { }
  
  cryptoD():Observable<any>
  {
    return this._HttpClient.get(environment.apiUrl+"/?timePeriod=1h");
  }


}
