import { Component } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService, Item } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fullItemList: Item[];
  itemList: Item[];

  constructor(private itemsService: ItemsService) {
    this.itemsService.getItems$().subscribe((items) => {
      this.fullItemList = items;
      this.itemList = items;
    });
  }

  onDateRangeChange(dateRange: { fromDate: Date | null; toDate: Date | null }) {
    this.itemList = this.fullItemList
      .filter((item) => {
        if (dateRange.fromDate != null)
          return item.start_date >= dateRange.fromDate;
        return true;
      })
      .filter((item) => {
        if (dateRange.toDate != null) return item.end_date <= dateRange.toDate;
        return true;
      });
  }
}
