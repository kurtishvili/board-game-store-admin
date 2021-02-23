import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TransactionFilter } from 'src/app/models/transaction-filter.model';

@Component({
  selector: 'app-transaction-filter',
  templateUrl: './transaction-filter.component.html',
  styleUrls: ['./transaction-filter.component.scss']
})
export class TransactionFilterComponent implements OnInit {

  @Output()
  onFilter: EventEmitter<TransactionFilter> = new EventEmitter();

  transactionTypes: SelectItem[] = [
    { value: 1, label: 'Deposit' },
    { value: 2, label: 'Payment' }
  ]
  filter: TransactionFilter = {}

  constructor() { }

  ngOnInit(): void {
  }

  searchClick() {
    this.onFilter.next(this.filter)

  }

  clearClick() {
    this.filter = {}
    this.onFilter.next(this.filter)
  }

}
