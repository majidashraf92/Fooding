import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent} from './restaurant.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ],
  declarations: [
    RestaurantComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent, 
  ]
})
export class RestaurantModule { }
