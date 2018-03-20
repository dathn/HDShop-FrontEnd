import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryComponent } from './product-category.component';
import { ProductCategoryIndexComponent } from './product-category-index/product-category-index.component';


const routes: Routes = [
  {
    path: '',
    component: ProductCategoryComponent,
    data: {
      title: 'Product Category'
    },
    children: [
      {
        path: '',
        component: ProductCategoryIndexComponent
      }
    ]
  }
];

export const ProductCategoryRoutes = RouterModule.forChild(routes);
