import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseServiceWithSoftDelete } from '../../../../shared/classes/base-service.class';
import { ProductEagerType, ProductType } from '../../../../shared/types';


/**
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class ProductsService extends BaseServiceWithSoftDelete<ProductType, ProductEagerType> {
    constructor ( _http: HttpClient ) {
        super( _http, "products" );
    }
}
