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
            .filter( e => e.function_id === id )
            .map( e => e.profile_id );

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
            if ( e.profile_id === profileId ) {
                const func = FUNCTIONS.find( ( fx ) => fx.id === e.function_id );
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
            if ( e.profile_id === profileId ) {
                const func = FUNCTIONS.find( ( fx ) => fx.id === e.function_id );
                func && data.push( func );
            }
        }

        const nData: FunctionType[] = FUNCTIONS.filter( x => {
            return !data.some( ( y ) => y.id === x.id && y.function_name === x.function_name );
        } );

        const response: ResponseSheetsType<FunctionType> = {
            data: nData,
            totalResults: FUNCTIONS.length
        };

        return of( response ).pipe( delay( Math.random() * 1000 ) );
    }

    public updateProfileFunctions ( profileId: string, functions: FunctionType[] ) {
        const profilesFunctions: ProfileFunctionType[] = PROFILES_FUNCTIONS.filter( ( x ) => x.profile_id !== profileId );

        for ( const fun of functions ) {
            profilesFunctions.push( {
                id: profilesFunctions.length + 1,
                function_id: fun.id,
                profile_id: profileId
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
            function_name: functionName,
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: null
        };

        for ( const p of profiles ) {
            PROFILES_FUNCTIONS[ PROFILES_FUNCTIONS.length ] = {
                id: PROFILES_FUNCTIONS.length,
                function_id: functionID,
                profile_id: p.id
            };
        }

        return of( true );
    }

    public updateFunction ( functionId: string, functionName: string, profiles: ProfileType[] ) {
        const index = FUNCTIONS.findIndex( func => func.id === functionId );

        if ( index !== -1 ) {
            FUNCTIONS[ index ] = {
                ...FUNCTIONS[ index ],
                function_name: functionName,
                updated_at: new Date()
            };
        }

        for ( const p of profiles ) {
            PROFILES_FUNCTIONS[ PROFILES_FUNCTIONS.length ] = {
                id: PROFILES_FUNCTIONS.length,
                function_id: functionId,
                profile_id: p.id
            };
        }

        return of( true );
    }
}