import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'

  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  
  },
  {
    path: 'restaurant',
    loadChildren: './restaurant/restaurant.module#RestaurantModule'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
