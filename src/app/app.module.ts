import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RepHomeComponent } from './rep-home/rep-home.component';
import { SupplerOrderAddComponent } from './suppler-order-add/suppler-order-add.component';
import { SupplerorderService } from './_services/supplerorder.service';

import { MetirialComponent } from './metirial/metirial.component';
import { TeaQualityComponent } from './tea-quality/tea-quality.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { SupplerItemAddComponent } from './suppler-item-add/suppler-item-add.component';
import { SupplerordertabComponent } from './supplerordertab/supplerordertab.component';
import { SupplerDetailsComponent } from './suppler-details/suppler-details.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RepOrdersComponent } from './rep-orders/rep-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavBarComponent,

    RepHomeComponent,
    SupplerOrderAddComponent,
    MetirialComponent,
    TeaQualityComponent,
    SupplerItemAddComponent,
    SupplerordertabComponent,
    SupplerDetailsComponent,
    RepOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ButtonsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatDatepickerModule,
    TabsModule.forRoot(),
    MatDatepickerModule,
    FlashMessagesModule.forRoot(),
    MatAutocompleteModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    SupplerorderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
