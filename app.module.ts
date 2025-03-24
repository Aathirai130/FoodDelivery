import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItem } from './models/menu-item';

import { MenuService } from './services/menu.service';
import { OrderService } from './services/order.service';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminAddMenuComponent } from './components/admin-add-menu/admin-add-menu.component';
import { AdminViewMenuComponent } from './components/admin-view-menu/admin-view-menu.component';
import { AdminService } from './services/admin.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Restaurant } from './models/restaurant';
import { UserService } from './services/user.service';
import { AdminAddrestaurantComponent } from './admin-addrestaurant/admin-addrestaurant.component';
import { AdminViewrestaurantComponent } from './admin-viewrestaurant/admin-viewrestaurant.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutusComponent,
    ContactusComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    AdminAddMenuComponent,
    AdminDashboardComponent,
    AdminAddrestaurantComponent,
    AdminViewrestaurantComponent,
 

  ],
  imports: [
  BrowserModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  AppRoutingModule,
  HttpClientModule,
  OrderComponent,
  MenuComponent,
  AdminViewMenuComponent

  ],
  providers:[
    OrderService,
    MenuService,
    AdminService,
    UserService,
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
