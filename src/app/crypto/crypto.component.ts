import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
  allCrypto: any = [];
  search: any;
  term: string = "";
  
  constructor(public _CryptoService: CryptoService) {
    this.loadCryptoData();
  }

  ngOnInit() {
  }

  loadCryptoData() {
    this._CryptoService.cryptoD().subscribe((data) => {
      this.allCrypto = data.data.coins;
      console.log(this.allCrypto);
    });
  }

  formatPrice(price: string): string {
    const numPrice = parseFloat(price);
    if (numPrice >= 1) {
      return numPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (numPrice >= 0.01) {
      return numPrice.toFixed(4);
    } else {
      return numPrice.toFixed(8);
    }
  }

  formatLargeNumber(num: string): string {
    const value = parseFloat(num);
    if (value >= 1e12) {
      return (value / 1e12).toFixed(2) + 'T';
    } else if (value >= 1e9) {
      return (value / 1e9).toFixed(2) + 'B';
    } else if (value >= 1e6) {
      return (value / 1e6).toFixed(2) + 'M';
    } else if (value >= 1e3) {
      return (value / 1e3).toFixed(2) + 'K';
    }
    return value.toFixed(2);
  }

  generateSparkline(crypto: any): string {
    // Generate a simple sparkline path
    const points = 20;
    const width = 100;
    const height = 40;
    const change = parseFloat(crypto.change) || 0;
    
    let path = 'M 0 ' + (height / 2);
    
    for (let i = 1; i <= points; i++) {
      const x = (width / points) * i;
      const randomVariation = (Math.random() - 0.5) * 10;
      const trend = (change / 100) * height * (i / points);
      const y = (height / 2) - trend + randomVariation;
      path += ` L ${x} ${y}`;
    }
    
    return path;
  }
}
