import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { AuthGuard } from './_helpers/auth.guard';

import { SupplerOrderAddComponent } from './suppler-order-add/suppler-order-add.component'

const routes: Routes = [
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
    path:'addsupplerorder',
    component:SupplerOrderAddComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'register',
    component: RegisterComponent
  },
  { path: '**', redirectTo: ''},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
