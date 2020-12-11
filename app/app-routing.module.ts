import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutinfoComponent } from './aboutinfo/aboutinfo.component';
import { AboutlocationComponent } from './aboutlocation/aboutlocation.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path:"" , component:AboutComponent },
  { path:"about" , component:AboutComponent , children:[
    { path:'' , component:AboutinfoComponent },
    { path:'info' , component:AboutinfoComponent },
    { path:'location' , component:AboutlocationComponent  },
    
  ] },
  { path:"contact/:id/:sec" , component:ContactComponent },
  { path:"service" , component:ServicesComponent },
  { path:"portfolio" , component:ProtfolioComponent , canActivate:[AuthGuard] },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) , canActivate:[AuthGuard] },
  
  { path:"login", component:LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
