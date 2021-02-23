import { Component, OnInit } from '@angular/core';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { UsersFilter } from 'src/app/models/users/users-filter.model';
import { UserListItem } from 'src/app/models/users/users-list.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserListItem[] = [];
  filter: UsersFilter = {}
  paginator: PaginatorModel = new PaginatorModel(0, 10);

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  filterUsers(filter: UsersFilter) {
    this.filter=filter;
    this.getUsers();
  }

  onPaginate() {
    this.getUsers()
  }

  getUsersCount() {
    this.userService.getUsersCount(this.filter).subscribe(
      response => {
        this.paginator.totalRecords = response;
      }
    )
  }

  getUsers() {
    this.filter.pageNumber = this.paginator.pageNumber
    this.filter.pageSize = this.paginator.pageSize
    this.userService.getUsers(this.filter).subscribe(
      response => {
        this.users = response;
        this.getUsersCount()
      }
    )
  }

}
