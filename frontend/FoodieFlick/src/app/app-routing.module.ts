import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProductsComponent } from './categories/products/products.component';

const routes: Routes = [ 
  { path: '', component: FirstPageComponent },
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoryModule)},
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
