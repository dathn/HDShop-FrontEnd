import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import { ProductCategoryIndexComponent } from './product-category-index/product-category-index.component';
import { ProductCategoryRoutes } from './product-category-routes';

import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ProductCategoryRoutes
  ],
  declarations: [
    ProductCategoryComponent,
    ProductCategoryIndexComponent
  ]
})
export class ProductCategoryModule { }
