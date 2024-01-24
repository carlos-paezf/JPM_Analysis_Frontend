import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { ACCOUNTS } from '../../../../shared/mocks';
import { AccountType, ResponseSheetsType } from '../../../../shared/types';


@Injectable( {
    providedIn: 'root'
} )
export class AccountsService {
    constructor () { }

    public getAccounts (): Observable<ResponseSheetsType<AccountType>> {
        const response: ResponseSheetsType<AccountType> = {
            data: ACCOUNTS,
            totalResults: ACCOUNTS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getAccountById ( account_number: string ): Observable<AccountType | null> {
        const response = ACCOUNTS.find( account => account.account_number === account_number ) || null;

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public updateAccount ( accountNumber: string, updatedData: AccountType ): Observable<boolean> {
        const index = ACCOUNTS.findIndex( account => account.account_number === accountNumber );

        if ( index !== -1 ) {
            ACCOUNTS[ index ] = {
                ...updatedData,
                account_number: ACCOUNTS[ index ].account_number,
                account_name: ACCOUNTS[ index ].account_name,
                updated_at: new Date()
            };
        }

        return of( true );
    }

    public deleteAccount ( accountNumber: string ): Observable<boolean> {
        const index = ACCOUNTS.findIndex( account => account.account_number === accountNumber );

        if ( index !== -1 ) {
            ACCOUNTS[ index ] = { ...ACCOUNTS[ index ], deleted_at: new Date() };
        }

        return of( true );
    }

    public reactivateAccount ( accountNumber: string ): Observable<boolean> {
        const index = ACCOUNTS.findIndex( account => account.account_number === accountNumber );

        if ( index !== -1 ) {
            ACCOUNTS[ index ] = { ...ACCOUNTS[ index ], deleted_at: null };
        }

        return of( true );
    }
}
