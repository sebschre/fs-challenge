import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  NgbDate,
  NgbCalendar,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent {
  hoveredDate: NgbDate | null = null;

  @Output() newDateRange = new EventEmitter<{
    fromDate: Date | null;
    toDate: Date | null;
  }>();

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate &&
      !this.toDate &&
      date &&
      date.after(this.fromDate)
    ) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    let fromDate = new Date(
      this.fromDate.year,
      this.fromDate.month - 1,
      this.fromDate.day
    );
    let toDate: Date | null;
    if (this.toDate == null) {
      toDate = null;
    } else {
      toDate = new Date(
        this.toDate.year,
        this.toDate.month - 1,
        this.toDate.day
      );
    }
    this.newDateRange.emit({ fromDate: fromDate, toDate: toDate });
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }
}
