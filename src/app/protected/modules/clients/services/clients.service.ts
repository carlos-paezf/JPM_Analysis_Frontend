import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { CLIENTS } from '../../../../shared/mocks';
import { ClientType, ResponseSheetsType } from '../../../../shared/types';


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
}
