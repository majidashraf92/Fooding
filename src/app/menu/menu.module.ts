import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule { }
