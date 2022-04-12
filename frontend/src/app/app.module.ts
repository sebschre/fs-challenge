import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbdSortableHeader,
  NgbdTableSortable,
} from './item-table/item-table.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [AppComponent, NgbdSortableHeader, NgbdTableSortable, DatepickerComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
