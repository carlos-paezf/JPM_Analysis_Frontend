import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { COMPANY_USERS, PROFILES } from '../../../../shared/mocks';
import { CompanyUserType, FunctionType, ProfileType, ResponseSheetsType } from '../../../../shared/types';
import { FunctionsService } from './functions.service';


@Injectable( {
    providedIn: 'root'
} )
export class ProfilesService {

    constructor ( private _functionsService: FunctionsService ) { }

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

    public updateProfile ( id: string, updatedData: ProfileType, associatedFunctions: FunctionType[] ): Observable<boolean> {
        const index = PROFILES.findIndex( profile => profile.id === id );

        this._functionsService.updateProfileFunctions( id, associatedFunctions );

        if ( index !== -1 ) {
            // PROFILES[ index ] = { ...updatedData, id: PROFILES[ index ].id };
            PROFILES[ index ] = { ...PROFILES[ index ], ...updatedData, updated_at: new Date() };
        }

        return of( true );
    }

    public deleteProfile ( id: string ): Observable<boolean> {
        const index = PROFILES.findIndex( profile => profile.id === id );

        if ( index !== -1 ) {
            PROFILES[ index ] = { ...PROFILES[ index ], deleted_at: new Date() };
        }

        return of( true );
    }
}
