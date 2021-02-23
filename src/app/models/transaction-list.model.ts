import { TransactionType } from '../enums/transaction-type';

export interface TransactionListItem {
    typeId?: TransactionType;
    type?: string;
    pinCode?: string;
    createDate?: string;
    amount?: number;
}