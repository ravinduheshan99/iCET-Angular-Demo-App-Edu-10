import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  {
    path:"home",
    component:MainComponent
  },
  {
    path:"product",
    component:ProductComponent
  }
];
