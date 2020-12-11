import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { CustomersComponent } from './customers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
