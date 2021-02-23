import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { UserStatus } from 'src/app/enums/user-status';
import { Order } from 'src/app/models/users/orders';
import { UserAccount, UserDetails } from 'src/app/models/users/user-details.model';
import { UsersFilter } from 'src/app/models/users/users-filter.model';
import { UserListItem } from 'src/app/models/users/users-list.model';

const apiBaseUrl = "http://localhost:64764/api/user"

@Injectable()
export class UserService {

    constructor(private readonly httpService: HttpService) { }

    getUsers(filter: UsersFilter) {
        return this.httpService.get<UserListItem[]>(`${apiBaseUrl}/getAll`, filter)
    }

    getUsersCount(filter: UsersFilter) {
        return this.httpService.get<number>(`${apiBaseUrl}/getUsersCount`, filter)
    }

    getUserDetails(userId: number, pageSize: number) {
        return this.httpService.get<UserAccount>(`${apiBaseUrl}/getDetails`, { userId, pageSize })
    }

    getOrders(userId:number, pageNumber: number, pageSize:number){
        return this.httpService.get<Order[]>(`${apiBaseUrl}/getOrders`, {userId, pageNumber, pageSize} )
    }

    getOrdersCount(userId: number) {
        return this.httpService.get<number>(`${apiBaseUrl}/getOrdersCount`, {userId})
    }

    blockUser() {
        return this.httpService.post<UserStatus>(`${apiBaseUrl}/blockUser`)
    }
    unblockUser() {
        return this.httpService.post<UserStatus>(`${apiBaseUrl}/unblockUser`)
    }


}