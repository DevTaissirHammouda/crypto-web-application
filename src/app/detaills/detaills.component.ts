import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detaills',
  templateUrl: './detaills.component.html',
  styleUrls: ['./detaills.component.css']
})
export class DetaillsComponent implements OnInit {
  id: any = '';
  dataa: any = null;
  allCrypto: any = [];

  constructor(
    public _CryptoService: CryptoService,
    public _ActivatedRoute: ActivatedRoute
  ) {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("name");
  }

  ngOnInit() {
    this._CryptoService.cryptoD().subscribe((data) => {
      this.allCrypto = data.data.coins;
      
      for (let crypto of this.allCrypto) {
        if (crypto.symbol == this.id) {
          this.dataa = crypto;
          break;
        }
      }
      
      console.log('Crypto Details:', this.dataa);
    });
  }

  formatPrice(price: string): string {
    if (!price) return '0.00';
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
    if (!num) return '0';
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

  formatDate(timestamp: string): string {
    if (!timestamp) return 'N/A';
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  generateChartPath(): string {
    if (!this.dataa) return '';
    
    const points = 50;
    const width = 800;
    const height = 300;
    const change = parseFloat(this.dataa.change) || 0;
    const padding = 20;
    
    let path = `M 0 ${height / 2}`;
    
    for (let i = 1; i <= points; i++) {
      const x = (width / points) * i;
      const randomVariation = (Math.random() - 0.5) * 40;
      const trend = (change / 100) * (height - padding * 2) * (i / points);
      const y = (height / 2) - trend + randomVariation;
      path += ` L ${x} ${Math.max(padding, Math.min(height - padding, y))}`;
    }
    
    // Add bottom part for fill
    path += ` L ${width} ${height} L 0 ${height} Z`;
    
    return path;
  }
}
