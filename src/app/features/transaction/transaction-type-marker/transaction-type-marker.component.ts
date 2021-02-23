import { Component, Input, OnInit } from '@angular/core';
import { TransactionType } from 'src/app/enums/transaction-type';

@Component({
  selector: 'app-transaction-type-marker',
  templateUrl: './transaction-type-marker.component.html',
  styleUrls: ['./transaction-type-marker.component.scss']
})
export class TransactionTypeMarkerComponent implements OnInit {

  @Input()
  transactionType: TransactionType;

  

  constructor() { }

  ngOnInit(): void {
  }

  getMarkerColor() {
    switch (this.transactionType) {
      case TransactionType.Deposit:
        return 'green';
      case TransactionType.Payment:
        return '#ffd966';
    }
  }

}
