import { Component, OnInit } from '@angular/core';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { TransactionFilter } from 'src/app/models/transaction-filter.model';
import { TransactionListItem } from 'src/app/models/transaction-list.model';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactions: TransactionListItem[] = [];
  filter: TransactionFilter = {};
  paginator: PaginatorModel = new PaginatorModel(0, 10);

  constructor(private readonly transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransations();
  }

  onFilter(filter: TransactionFilter) {
    this.filter = filter;

    this.getTransations();
  }

  onPaginate() {
    this.getTransations();
  }

  private getTransactionsCount(){
    this.transactionService.getTransactionsCount(this.filter.userId).subscribe(
      response => {
        this.paginator.totalRecords=response
      }
    )
  }

  private getTransations() {
    this.filter.pageNumber = this.paginator.pageNumber;
    this.filter.pageSize = this.paginator.pageSize;

    this.transactionService.getTransactions(this.filter).subscribe(
      response => {
        this.transactions = response;
        this.getTransactionsCount();
      }
    )
  }
}
