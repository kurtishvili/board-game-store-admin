import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersFilter } from 'src/app/models/users/users-filter.model';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.scss']
})
export class UsersFilterComponent implements OnInit {

  filter: UsersFilter = {}

  @Output()
  onFilter: EventEmitter<UsersFilter> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchClick() {
    this.onFilter.next(this.filter)
  }

  clearClick() {
    this.filter = {};
    this.onFilter.next(this.filter);
  }
}
