import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { USER_ENTITLEMENTS } from '../../../../shared/mocks';
import { ResponseSheetsType, UserEntitlementType } from '../../../../shared/types';


@Injectable( {
    providedIn: 'root'
} )
export class UserEntitlementsService {
    constructor () { }

    public getUserEntitlements (): Observable<ResponseSheetsType<UserEntitlementType>> {
        const response: ResponseSheetsType<UserEntitlementType> = {
            data: USER_ENTITLEMENTS,
            totalResults: USER_ENTITLEMENTS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getUserEntitlementById ( id: string | number ): Observable<UserEntitlementType | null> {
        const response = USER_ENTITLEMENTS.find( userEntitlement => userEntitlement.id === id ) || null;

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public updateUserEntitlement ( id: string | number, updatedData: UserEntitlementType ): Observable<boolean> {
        const index = USER_ENTITLEMENTS.findIndex( userEntitlement => userEntitlement.id === id );

        if ( index !== -1 ) {
            USER_ENTITLEMENTS[ index ] = { ...updatedData, id: USER_ENTITLEMENTS[ index ].id, updated_at: new Date() };
        }

        return of( true );
    }

    public deleteUserEntitlement ( id: number ): Observable<boolean> {
        const index = USER_ENTITLEMENTS.findIndex( userEntitlement => userEntitlement.id === id );

        if ( index !== -1 ) {
            USER_ENTITLEMENTS[ index ] = { ...USER_ENTITLEMENTS[ index ], deleted_at: new Date() };
        }

        return of( true );
    }

    public reactivateUserEntitlement ( id: number ): Observable<boolean> {
        const index = USER_ENTITLEMENTS.findIndex( userEntitlement => userEntitlement.id === id );

        if ( index !== -1 ) {
            USER_ENTITLEMENTS[ index ] = { ...USER_ENTITLEMENTS[ index ], deleted_at: null };
        }

        return of( true );
    }
}
