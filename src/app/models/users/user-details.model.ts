import { UserStatus } from 'src/app/enums/user-status';
import { TransactionListItem } from '../transaction-list.model';
import { Order } from './orders';

export interface UserAccount {
    userDetails?: UserDetails;
    userOrders?: Order[];
    transactions?: TransactionListItem[];

}

export interface UserDetails {
    id?: number;
    avatarUrl?: string;
    pinCode?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    statusId?: UserStatus;

}



