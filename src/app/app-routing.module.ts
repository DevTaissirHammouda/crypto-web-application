import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoComponent } from './crypto/crypto.component';
import { DetaillsComponent } from './detaills/detaills.component';


const routes: Routes = [
  {path:"",component:CryptoComponent},
  {path:"detaills/:name",component:DetaillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
    
  ]
})
export class AppRoutingModule { }
