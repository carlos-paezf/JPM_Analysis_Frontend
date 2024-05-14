import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseServiceWithSoftDelete } from '../../../../shared/classes/base-service.class';
import { ProductAccountEagerType, ProductAccountType } from '../../../../shared/types';
import { Observable } from 'rxjs';
import { ResponseSheetsType } from '../../../../shared/types/index';


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

    /**
     * The function `getAll` makes an HTTP GET request to retrieve eager-loaded product account data.
     * @returns An Observable of type ResponseSheetsType<ProductAccountEagerType> is being returned.
     */
    public override getAll (): Observable<ResponseSheetsType<ProductAccountEagerType>> {
        return this._http.get<ResponseSheetsType<ProductAccountEagerType>>( `${ this._baseUrl }/eager` );
    }
}
