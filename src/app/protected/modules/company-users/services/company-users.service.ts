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

    public getCompanyUserByAccessId ( accessId: string ): Observable<CompanyUserType | null> {
        const response = COMPANY_USERS.find( user => user.accessId === accessId ) || null;

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public updateCompanyUser ( accessId: string, updatedData: CompanyUserType ): Observable<boolean> {
        const index = COMPANY_USERS.findIndex( companyUser => companyUser.accessId === accessId );

        if ( index !== -1 ) {
            COMPANY_USERS[ index ] = { ...updatedData, accessId: COMPANY_USERS[ index ].accessId, updatedAt: new Date() };
        }

        return of( true );
    }

    public deleteCompanyUser ( accessId: string ): Observable<boolean> {
        const index = COMPANY_USERS.findIndex( companyUser => companyUser.accessId === accessId );

        if ( index !== -1 ) {
            COMPANY_USERS[ index ] = { ...COMPANY_USERS[ index ], deletedAt: new Date() };
        }

        return of( true );
    }

    public reactivateCompanyUser ( accessId: string ): Observable<boolean> {
        const index = COMPANY_USERS.findIndex( companyUser => companyUser.accessId === accessId );

        if ( index !== -1 ) {
            COMPANY_USERS[ index ] = { ...COMPANY_USERS[ index ], deletedAt: null };
        }

        return of( true );
    }

    public getCompanyUsersByProfileId ( profileId: string ): Observable<ResponseSheetsType<CompanyUserType>> {
        const response: ResponseSheetsType<CompanyUserType> = {
            data: COMPANY_USERS.filter( ( element ) => element.profileId === profileId ),
            totalResults: COMPANY_USERS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );

    }
}
