import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductIndexComponent } from './product-index/product-index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, ProductIndexComponent]
})
export class ProductModule { }
