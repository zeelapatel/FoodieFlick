import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
    {path:'',component:CategoriesComponent},
    {path:'products',component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
