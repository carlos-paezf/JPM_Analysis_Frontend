import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseServiceWithSoftDelete } from '../../../../shared/classes/base-service.class';
import { ProductAccountEagerType, ProductAccountType } from '../../../../shared/types';


/**
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class ProductsAccountsService extends BaseServiceWithSoftDelete<ProductAccountType, ProductAccountEagerType> {
    constructor ( _http: HttpClient ) {
        super( _http, "productsAccounts" );
    }
}
