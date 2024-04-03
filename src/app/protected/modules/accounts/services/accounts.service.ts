import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseServiceWithSoftDelete } from '../../../../shared/classes/base-service.class';
import { AccountEagerType, AccountType } from '../../../../shared/types';


@Injectable( {
    providedIn: 'root'
} )
export class AccountsService extends BaseServiceWithSoftDelete<AccountType, AccountEagerType> {
    constructor ( _http: HttpClient ) {
        super( _http, "accounts" );
    }
}