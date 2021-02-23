import { Injectable } from "@angular/core";
import { of, scheduled } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { TransactionFilter } from 'src/app/models/transaction-filter.model';
import { TransactionListItem } from 'src/app/models/transaction-list.model';

const apiBaseUrl = "http://localhost:64764/api/transaction"
@Injectable()
export class TransactionService {
    

    constructor(private readonly httpService: HttpService) { }

    getTransactions(filter: TransactionFilter) {
        return this.httpService.get<TransactionListItem[]>(`${apiBaseUrl}/getAll`, filter)
        
    }
    getTransactionsCount(userId : number){
        return this.httpService.get<number>(`${apiBaseUrl}/getTransactionsCount`, userId)
    } 

}