import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { FUNCTIONS, PROFILES_FUNCTIONS } from '../../../../shared/mocks';
import { FunctionType, ProfileFunctionType, ResponseSheetsType } from '../../../../shared/types';


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
    }
}
