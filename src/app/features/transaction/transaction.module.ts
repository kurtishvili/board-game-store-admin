import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { BgsSharedModule } from 'src/app/shared/bgs-shared.module';
import { TransactionFilterComponent } from './transaction-filter/transaction-filter.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionService } from './transaction.service';
import { TransactionTypeMarkerComponent } from './transaction-type-marker/transaction-type-marker.component';

@NgModule({
  declarations: [
    TransactionComponent,
    TransactionFilterComponent,
    TransactionListComponent,
    TransactionTypeMarkerComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    BgsSharedModule
  ],
  providers: [
    TransactionService
  ],
  exports: [
    TransactionListComponent
  ]
})
export class TransactionModule { }
