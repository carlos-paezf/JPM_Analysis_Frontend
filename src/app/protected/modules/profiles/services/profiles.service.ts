import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { COMPANY_USERS, PROFILES } from '../../../../shared/mocks';
import { CompanyUserType, ProfileType, ResponseSheetsType } from '../../../../shared/types';


@Injectable( {
    providedIn: 'root'
} )
export class ProfilesService {

    constructor () { }

    public getProfiles (): Observable<ResponseSheetsType<ProfileType>> {
        const response: ResponseSheetsType<ProfileType> = {
            data: PROFILES,
            totalResults: PROFILES.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getProfileById ( id: string ): Observable<ProfileType | null> {
        const response = PROFILES.find( ele => ele.id === id ) || null;

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getCompanyUsersByProfileId ( id: string ): Observable<ResponseSheetsType<CompanyUserType> | null> {
        const companyUsers = COMPANY_USERS.filter( user => user.profile_id === id );

        const response: ResponseSheetsType<CompanyUserType> = {
            data: companyUsers,
            totalResults: companyUsers.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public updateProfile ( id: string, updatedData: ProfileType ): Observable<boolean> {
        const index = PROFILES.findIndex( profile => profile.id === id );

        if ( index !== -1 ) {
            PROFILES[ index ] = { ...updatedData, id: PROFILES[ index ].id };
        }

        return of( true );
    }
}
