import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RepHomeComponent } from './rep-home/rep-home.component';

import { AuthGuard } from './_helpers/auth.guard';

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
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
