import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-product-category-index',
  templateUrl: './product-category-index.component.html',
  styleUrls: ['./product-category-index.component.css']
})
export class ProductCategoryIndexComponent implements OnInit {
  productCategories: any;
  pageIndex = 1;
  pageSize = 10;
  totalItems: number;
  maxSize = 5;
  contentArray = new Array(90).fill('');
  returnedArray: string[];
  constructor(
    private _dateService: DataService,
    private _notify: NotificationService,
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this._dateService.get('/api/productcategory/getall?page=' + this.pageIndex + '&pageSize=' + this.pageSize)
      .subscribe((response: any) => {
        this.productCategories = response.Items;
        this.totalItems = response.TotalCount;
        console.log(response);
      }, error => this._dateService.handleError(error));
  }
  pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.getAll();
  }

}
