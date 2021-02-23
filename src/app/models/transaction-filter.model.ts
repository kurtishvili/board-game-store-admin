import { TransactionType } from '../enums/transaction-type';

export interface TransactionFilter {
    userId?: number;
    typeId?: TransactionType;
    pinCode?: number;
    dateFrom?: string;
    dateTo?: string;
    amountFrom?: number;
    amountTo?: number;
    pageNumber?: number;
    pageSize?: number;
}

