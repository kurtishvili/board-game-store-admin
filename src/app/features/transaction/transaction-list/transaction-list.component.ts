import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { TransactionListItem } from 'src/app/models/transaction-list.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {

  @Input()
  transactions: TransactionListItem[] = [];
  @Input()
  userId: number;
  @Input()
  paginator: PaginatorModel;

  @Output('onPaginate')
  onPaginateEmitter: EventEmitter<{ page: number, rows: number }> = new EventEmitter();

  onPaginate(event: { page: number, rows: number }) {
    this.paginator.pageNumber = event.page
    this.paginator.pageSize=event.rows;

    this.onPaginateEmitter.emit(event);
  }
}