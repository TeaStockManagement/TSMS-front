import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RepHomeComponent } from './rep-home/rep-home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AuthGuard } from './_helpers/auth.guard';

import { SupplerOrderAddComponent } from './suppler-order-add/suppler-order-add.component'
import{ PackageComponent } from './package/package.component';
import { MetirialComponent } from './metirial/metirial.component';
import { TeaQualityComponent } from './tea-quality/tea-quality.component';
import { SupplerItemAddComponent } from './suppler-item-add/suppler-item-add.component'



const routes: Routes = [
  {
    path:'rep-home',
    component: RepHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  { 
    path:'addsupplerorder',
    component:SupplerOrderAddComponent,
    canActivate:[AuthGuard]
  },
  { 
    path:'app-metirial',
    component:MetirialComponent,
    canActivate:[AuthGuard]
  },
  { 
    path:'app-package',
    component:PackageComponent,
    canActivate:[AuthGuard]
  },
  { 
    path:'app-suppler-item-add',
    component:SupplerItemAddComponent,
    canActivate:[AuthGuard]
  },
  { 
    path:'app-tea-quality',
    component:TeaQualityComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'nav-bar',
    component: NavBarComponent,
    canActivate:[AuthGuard]
  },

  { path: '**', redirectTo: ''}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
