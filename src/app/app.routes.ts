import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: '/products',
    component: ProductListComponent,
  },
];
