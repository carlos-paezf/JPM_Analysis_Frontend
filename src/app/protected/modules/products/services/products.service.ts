import { Injectable } from '@angular/core';
import { ProductType, ResponseSheetsType } from '../../../../shared/types';
import { Observable, delay, of } from 'rxjs';
import { PRODUCTS } from '../../../../shared/mocks';

@Injectable( {
    providedIn: 'root'
} )
export class ProductsService {

    public getProducts (): Observable<ResponseSheetsType<ProductType>> {
        const response: ResponseSheetsType<ProductType> = {
            data: PRODUCTS,
            totalResults: PRODUCTS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getProductById ( id: string ): Observable<ProductType | null> {
        const response = PRODUCTS.find( user => user.id === id ) || null;

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public updateProduct ( id: string, updatedData: ProductType ): Observable<boolean> {
        const index = PRODUCTS.findIndex( product => product.id === id );

        if ( index !== -1 ) {
            PRODUCTS[ index ] = { ...updatedData, id: PRODUCTS[ index ].id, updated_at: new Date() };
        }

        return of( true );
    }

    public deleteProduct ( id: string ): Observable<boolean> {
        const index = PRODUCTS.findIndex( product => product.id === id );

        if ( index !== -1 ) {
            PRODUCTS[ index ] = { ...PRODUCTS[ index ], deleted_at: new Date() };
        }

        return of( true );
    }

    public reactivateProduct ( id: string ): Observable<boolean> {
        const index = PRODUCTS.findIndex( product => product.id === id );

        if ( index !== -1 ) {
            PRODUCTS[ index ] = { ...PRODUCTS[ index ], deleted_at: null };
        }

        return of( true );
    }

    public getProductsByProfileId ( profileId: string ): Observable<ResponseSheetsType<ProductType>> {
        const response: ResponseSheetsType<ProductType> = {
            data: PRODUCTS.filter( ( element ) => element.id === profileId ),
            totalResults: PRODUCTS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );

    }
}
