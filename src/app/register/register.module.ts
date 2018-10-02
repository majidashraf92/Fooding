import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    HttpClientModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
