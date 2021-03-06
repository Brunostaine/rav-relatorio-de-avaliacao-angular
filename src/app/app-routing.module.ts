import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './pages/navbar/navbar.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
        children: [{
          path: '',
          component: HomeComponent,
        }]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
