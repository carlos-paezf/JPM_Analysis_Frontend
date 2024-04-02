import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { ACCOUNTS, PRODUCTS_ACCOUNTS, PRODUCTS } from '../../../../shared/mocks';
import { ProductAccountEagerType, ProductAccountType, ResponseSheetsType } from '../../../../shared/types';


@Injectable( {
    providedIn: 'root'
} )
export class ProductsAccountsService {
    constructor () { }

    public getProductsAccounts (): Observable<ResponseSheetsType<ProductAccountType>> {
        const response: ResponseSheetsType<ProductAccountType> = {
            data: PRODUCTS_ACCOUNTS,
            totalResults: PRODUCTS_ACCOUNTS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }


    public getProductsAccountsStrategy (): Observable<ResponseSheetsType<ProductAccountEagerType>> {
        const data: ProductAccountEagerType[] = PRODUCTS_ACCOUNTS.map( client => ( {
            ...client,
            product: PRODUCTS.find( product => product.id === client.productId )!,
            account: ACCOUNTS.find( account => account.accountNumber === client.accountNumber )!
        } ) );

        const response: ResponseSheetsType<ProductAccountEagerType> = {
            data,
            totalResults: PRODUCTS_ACCOUNTS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getProductAccountById ( id: string ): Observable<ProductAccountType | null> {
        const response = PRODUCTS_ACCOUNTS.find( e => e.id === id ) || null;

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public updateProductAccount ( id: string, updatedData: { productId: string, accountNumber: string; } ): Observable<boolean> {
        const index = PRODUCTS_ACCOUNTS.findIndex( client => client.id === id );

        if ( index !== -1 ) {
            PRODUCTS_ACCOUNTS[ index ] = {
                ...updatedData,
                id: PRODUCTS_ACCOUNTS[ index ].id,
                createdAt: PRODUCTS_ACCOUNTS[ index ].createdAt,
                deletedAt: PRODUCTS_ACCOUNTS[ index ].deletedAt,
                updatedAt: new Date(),
            };
        }

        return of( true );
    }

    public deactivateProductAccount ( id: string ): Observable<boolean> {
        const index = PRODUCTS_ACCOUNTS.findIndex( client => client.id === id );

        if ( index !== -1 ) {
            PRODUCTS_ACCOUNTS[ index ] = { ...PRODUCTS_ACCOUNTS[ index ], deletedAt: new Date() };
        }

        return of( true );
    }

    public reactivateProductAccount ( id: string ): Observable<boolean> {
        const index = PRODUCTS_ACCOUNTS.findIndex( client => client.id === id );

        if ( index !== -1 ) {
            PRODUCTS_ACCOUNTS[ index ] = { ...PRODUCTS_ACCOUNTS[ index ], deletedAt: null };
        }

        return of( true );
    }
}
