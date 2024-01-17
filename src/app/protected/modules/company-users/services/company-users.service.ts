import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { COMPANY_USERS } from '../../../../shared/mocks';
import { CompanyUserType, ResponseSheetsType } from '../../../../shared/types';


@Injectable( {
    providedIn: 'root'
} )
export class CompanyUsersService {
    constructor () { }

    public getCompanyUsers (): Observable<ResponseSheetsType<CompanyUserType>> {
        const response: ResponseSheetsType<CompanyUserType> = {
            data: COMPANY_USERS,
            totalResults: COMPANY_USERS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getCompanyUserByAccessId ( access_id: string ): Observable<CompanyUserType | null> {
        const response = COMPANY_USERS.find( user => user.access_id === access_id ) || null;

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public updateCompanyUser ( access_id: string, updatedData: CompanyUserType ): Observable<boolean> {
        const index = COMPANY_USERS.findIndex( companyUser => companyUser.access_id === access_id );

        if ( index !== -1 ) {
            COMPANY_USERS[ index ] = { ...updatedData, access_id: COMPANY_USERS[ index ].access_id, updated_at: new Date() };
        }

        return of( true );
    }

    public deleteCompanyUser ( id: string ): Observable<boolean> {
        const index = COMPANY_USERS.findIndex( companyUser => companyUser.access_id === id );

        if ( index !== -1 ) {
            COMPANY_USERS[ index ] = { ...COMPANY_USERS[ index ], deleted_at: new Date() };
        }

        return of( true );
    }

    public getCompanyUsersByProfileId ( profileId: string ): Observable<ResponseSheetsType<CompanyUserType>> {
        const response: ResponseSheetsType<CompanyUserType> = {
            data: COMPANY_USERS.filter( ( element ) => element.profile_id === profileId ),
            totalResults: COMPANY_USERS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );

    }
}
