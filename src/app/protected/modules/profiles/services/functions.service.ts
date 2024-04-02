import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { FUNCTIONS, PROFILES_FUNCTIONS } from '../../../../shared/mocks';
import { FunctionType, ProfileFunctionType, ProfileType, ResponseSheetsType } from '../../../../shared/types';
import { FunctionEagerLoadingType } from '../../../../shared/types/jpm-types.type';


@Injectable( {
    providedIn: 'root'
} )
export class FunctionsService {

    constructor () { }

    public getFunctions (): Observable<ResponseSheetsType<FunctionType>> {
        const response: ResponseSheetsType<FunctionType> = {
            data: FUNCTIONS,
            totalResults: FUNCTIONS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );

    }

    public getFunctionById ( id: string ): Observable<FunctionEagerLoadingType | null> {
        const functionData = FUNCTIONS.find( func => func.id === id );

        if ( !functionData ) return of( null ).pipe( delay( Math.random() * 1000 ) );

        const response: FunctionEagerLoadingType = {
            ...FUNCTIONS.find( func => func.id === id )!,
            profiles: []
        };

        response.profiles = PROFILES_FUNCTIONS
            .filter( e => e.functionId === id )
            .map( e => e.profileId );

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getProfilesFunctions (): Observable<ResponseSheetsType<ProfileFunctionType>> {
        const response: ResponseSheetsType<ProfileFunctionType> = {
            data: PROFILES_FUNCTIONS,
            totalResults: PROFILES_FUNCTIONS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getFunctionsByProfileId ( profileId: string ): Observable<ResponseSheetsType<FunctionType>> {
        const data: FunctionType[] = [];

        for ( const e of PROFILES_FUNCTIONS ) {
            if ( e.profileId === profileId ) {
                const func = FUNCTIONS.find( ( fx ) => fx.id === e.functionId );
                func && data.push( func );
            }
        }

        const response: ResponseSheetsType<FunctionType> = {
            data: data,
            totalResults: FUNCTIONS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public getFunctionsNotAssociatedWithProfile ( profileId: string ): Observable<ResponseSheetsType<FunctionType>> {
        const data: FunctionType[] = [];

        for ( const e of PROFILES_FUNCTIONS ) {
            if ( e.profileId === profileId ) {
                const func = FUNCTIONS.find( ( fx ) => fx.id === e.functionId );
                func && data.push( func );
            }
        }

        const nData: FunctionType[] = FUNCTIONS.filter( x => {
            return !data.some( ( y ) => y.id === x.id && y.functionName === x.functionName );
        } );

        const response: ResponseSheetsType<FunctionType> = {
            data: nData,
            totalResults: FUNCTIONS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public updateProfileFunctions ( profileId: string, functions: FunctionType[] ) {
        const profilesFunctions: ProfileFunctionType[] = PROFILES_FUNCTIONS.filter( ( x ) => x.profileId !== profileId );

        for ( const fun of functions ) {
            profilesFunctions.push( {
                id: `${ fun.id }_${ profileId }`,
                functionId: fun.id,
                profileId: profileId
            } );
        }

        for ( let index = 0; index < profilesFunctions.length; index++ ) {
            const element = profilesFunctions[ index ];
            PROFILES_FUNCTIONS[ index ] = element;
        }

        return of( true );

    }

    public createFunction ( functionName: string, profiles: ProfileType[] ) {
        const functionID = functionName.trim().toLowerCase().replace( ' - ', '_' ).replace( ', ', '_' ).replace( ' ', '_' ).replace( '\ufeff', '' ).replace( '(', '' ).replace( ')', '' );
        FUNCTIONS[ FUNCTIONS.length ] = {
            id: functionID,
            functionName: functionName,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null
        };

        for ( const p of profiles ) {
            PROFILES_FUNCTIONS[ PROFILES_FUNCTIONS.length ] = {
                id: `${ functionID }_${ p.id }`,
                functionId: functionID,
                profileId: p.id
            };
        }

        return of( true );
    }

    public updateFunction ( functionId: string, functionName: string, profiles: ProfileType[] ) {
        const index = FUNCTIONS.findIndex( func => func.id === functionId );

        if ( index !== -1 ) {
            FUNCTIONS[ index ] = {
                ...FUNCTIONS[ index ],
                functionName: functionName,
                updatedAt: new Date()
            };
        }

        const newProfilesFunctions = PROFILES_FUNCTIONS.filter( pf => pf.functionId !== functionId );

        for ( const p of profiles ) {
            newProfilesFunctions[ newProfilesFunctions.length ] = {
                id: `${ functionId }_${ p.id }`,
                profileId: p.id,
                functionId: functionId
            };
        }

        const len = PROFILES_FUNCTIONS.length;
        for ( let index = 0; index < len; index++ ) {
            PROFILES_FUNCTIONS.pop();
        }

        for ( let index = 0; index < newProfilesFunctions.length; index++ ) {
            PROFILES_FUNCTIONS.push( newProfilesFunctions[ index ] );
        }

        return of( true );
    }
}