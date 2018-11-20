import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

    {
      path:'',
      component:MenuComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
