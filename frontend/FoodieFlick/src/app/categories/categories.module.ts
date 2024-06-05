import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { CategoryRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CategoryRoutingModule,
  ],
})
export class CategoryModule { }