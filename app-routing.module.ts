import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddMenuComponent } from './components/admin-add-menu/admin-add-menu.component';
import { AdminViewMenuComponent } from './components/admin-view-menu/admin-view-menu.component';
import { AdminAddrestaurantComponent } from './admin-addrestaurant/admin-addrestaurant.component';
import { AdminViewrestaurantComponent } from './admin-viewrestaurant/admin-viewrestaurant.component';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'about',component:AboutusComponent},
  { path:'contact',component:ContactusComponent},
  { path:'menu',component:MenuComponent},
  { path:'order',component:OrderComponent},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'adminlogin',component:AdminLoginComponent},
  { path:'admin-dashboard',component:AdminDashboardComponent},
  { path:'admin-add-menu',component:AdminAddMenuComponent},
  {path:'admin-view-menu',component:AdminViewMenuComponent},
  {path:'admin-add-restaurant',component:AdminAddrestaurantComponent},
  {path:'admin-view-restaurant',component:AdminViewrestaurantComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
