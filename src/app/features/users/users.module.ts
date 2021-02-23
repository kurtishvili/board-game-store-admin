import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { BgsSharedModule } from 'src/app/shared/bgs-shared.module';
import { UsersFilterComponent } from './users-filter/users-filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './user.service';
import { UserDatailsComponent } from './user-datails/user-datails.component';
import { TransactionListComponent } from '../transaction/transaction-list/transaction-list.component';
import { TransactionModule } from '../transaction/transaction.module';

@NgModule({
  declarations: [
    UsersComponent,
    UsersFilterComponent,
    UsersListComponent,
    UserDatailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    BgsSharedModule,
    TransactionModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
