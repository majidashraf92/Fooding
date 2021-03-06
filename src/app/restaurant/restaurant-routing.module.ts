import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent} from './restaurant.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
