import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { ACCOUNTS, CLIENTS, PRODUCTS } from '../../../../shared/mocks';
import { ClientEagerLoadingType, ClientType, ResponseSheetsType } from '../../../../shared/types';


@Injectable( {
    providedIn: 'root'
} )
export class ClientsService {
    constructor () { }

    public getClients (): Observable<ResponseSheetsType<ClientType>> {
        const response: ResponseSheetsType<ClientType> = {
            data: CLIENTS,
            totalResults: CLIENTS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }


    public getClientsEagerStrategy (): Observable<ResponseSheetsType<ClientEagerLoadingType>> {
        const data: ClientEagerLoadingType[] = CLIENTS.map( client => ( {
            ...client,
            product: PRODUCTS.find( product => product.id === client.product_id )!,
            account: ACCOUNTS.find( account => account.account_number === client.account_number )!
        } ) );

        const response: ResponseSheetsType<ClientEagerLoadingType> = {
            data,
            totalResults: CLIENTS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getClientById ( id: number ): Observable<ClientType | null> {
        const response = CLIENTS.find( e => e.id === id ) || null;

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public updateClient ( id: number, updatedData: { product_id: string, account_number: string; } ): Observable<boolean> {
        const index = CLIENTS.findIndex( client => client.id === id );

        if ( index !== -1 ) {
            CLIENTS[ index ] = {
                ...updatedData,
                id: CLIENTS[ index ].id,
                created_at: CLIENTS[ index ].created_at,
                deleted_at: CLIENTS[ index ].deleted_at,
                updated_at: new Date(),
            };
        }

        return of( true );
    }

    public deleteClient ( id: number ): Observable<boolean> {
        const index = CLIENTS.findIndex( client => client.id === id );

        if ( index !== -1 ) {
            CLIENTS[ index ] = { ...CLIENTS[ index ], deleted_at: new Date() };
        }

        return of( true );
    }

    public reactivateClient ( id: number ): Observable<boolean> {
        const index = CLIENTS.findIndex( client => client.id === id );

        if ( index !== -1 ) {
            CLIENTS[ index ] = { ...CLIENTS[ index ], deleted_at: null };
        }

        return of( true );
    }
}
