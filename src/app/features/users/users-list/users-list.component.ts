import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { UsersFilter } from 'src/app/models/users/users-filter.model';
import { UserListItem } from 'src/app/models/users/users-list.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input()
  paginator: PaginatorModel;

  @Input()
  users: UserListItem[] = [];

  @Output('onPaginate')
  onPaginateEmitter : EventEmitter<{page : number, rows: number}> = new EventEmitter();


  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  onPaginate(event: { page: number, rows: number }) {
    this.paginator.pageNumber = event.page
    this.paginator.pageSize = event.rows

    this.onPaginateEmitter.emit(event);
  }

  

}
