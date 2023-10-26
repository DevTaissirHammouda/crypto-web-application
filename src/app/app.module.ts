import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoComponent } from './crypto/crypto.component';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http'
import { DetaillsComponent } from './detaills/detaills.component';
import { FilterSearchPipe } from './crypto/filter-search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [			
    AppComponent,
      CryptoComponent,
      SearchComponent,
      DetaillsComponent,
      FilterSearchPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
