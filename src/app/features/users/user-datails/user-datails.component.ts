import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStatus } from 'src/app/enums/user-status';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { TransactionFilter } from 'src/app/models/transaction-filter.model';
import { TransactionListItem } from 'src/app/models/transaction-list.model';
import { Order } from 'src/app/models/users/orders';
import { UserAccount, UserDetails } from 'src/app/models/users/user-details.model';
import { UsersFilter } from 'src/app/models/users/users-filter.model';
import { TransactionService } from '../../transaction/transaction.service';
import { UserService } from '../user.service';

const defaultPageSize = 10;

@Component({
  selector: 'app-user-datails',
  templateUrl: './user-datails.component.html',
  styleUrls: ['./user-datails.component.scss']
})
export class UserDatailsComponent implements OnInit {

  currentUserId: number;

  paginatorOrder: PaginatorModel = new PaginatorModel(0, defaultPageSize);
  paginatorTransaction: PaginatorModel = new PaginatorModel(0, defaultPageSize);

  userAccount: UserAccount = {};

  get userDetails(): UserDetails {
    return this.userAccount.userDetails
  }

  get orders(): Order[] {
    return this.userAccount.userOrders;
  }

  get transactions(): TransactionListItem[] {
    return this.userAccount.transactions;
  }

  get isBlocked() {
    return this.userDetails?.statusId == UserStatus.Blocked;
  }

  constructor(
    private readonly userService: UserService,
    private readonly transactionService: TransactionService,
    private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUserId = +this.activatedRoute.snapshot.paramMap.get('userId')

    this.getUserDetails();
    this.getOrdersCount();
    this.getTransactiosCount();
  }

  unblockUserClick() {
    this.unblockUser();
  }

  blockUserClick() {
    this.blockUser();
  }

  onPaginateOrders(event: { page: number, rows: number }) {
    this.paginatorOrder.pageNumber = event.page;
    this.paginatorOrder.pageSize = event.rows;

    this.getOrders();
  }

  onPaginateTransactions() {
    this.getTransactions();
  }

  getTransactions() {
    const filter: TransactionFilter = {
      userId: this.currentUserId,
      pageNumber: this.paginatorTransaction.pageNumber,
      pageSize: this.paginatorTransaction.pageSize
    }
    this.transactionService.getTransactions(filter).subscribe(
      response => {
        this.userAccount.transactions = response;
      }
    );
  }

  getTransactiosCount() {
    this.transactionService.getTransactionsCount(this.currentUserId).subscribe(
      response => {
        this.paginatorTransaction.totalRecords = response;
      }
    )
  }

  getOrders() {
    this.userService.getOrders(this.currentUserId, this.paginatorOrder.pageNumber, this.paginatorOrder.pageSize).subscribe(
      response => {
        this.userAccount.userOrders = response
      }
    )
  }

  getOrdersCount() {
    this.userService.getOrdersCount(this.currentUserId).subscribe(
      response => {
        this.paginatorOrder.totalRecords = response;
      }
    )
  }

  private blockUser() {
    this.userService.blockUser().subscribe(
      response => {

      }
    )
  }

  private unblockUser() {
    this.userService.unblockUser().subscribe(
      response => {

      }
    )
  }

  private getUserDetails() {
    this.userService.getUserDetails(this.currentUserId, defaultPageSize).subscribe(
      response => {
        this.userAccount = response
      }
    )
  }
}
