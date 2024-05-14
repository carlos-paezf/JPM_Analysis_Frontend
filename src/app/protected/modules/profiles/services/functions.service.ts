import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, of, switchMap, throwError } from 'rxjs';

import { BaseServiceWithSoftDelete } from '../../../../shared/classes/base-service.class';
import { FUNCTIONS, PROFILES_FUNCTIONS } from '../../../../shared/mocks';
import { FunctionEagerType, FunctionType, ProfileFunctionType, ProfileType } from '../../../../shared/types';
import { ProfilesFunctionsService } from './profiles-functions.service';


@Injectable( {
    providedIn: 'root'
} )
export class FunctionsService extends BaseServiceWithSoftDelete<FunctionType, FunctionEagerType> {
    constructor ( _http: HttpClient, private readonly _profilesFunctionService: ProfilesFunctionsService ) {
        super( _http, "functions" );
    }


    /**
     * The function creates a new function with a given name and associates it with multiple profiles.
     * @param {string} functionName - The `functionName` parameter in the `createFunction` function is
     * a string that represents the name of the function that you want to create.
     * @param {ProfileType[]} profiles - Profiles is an array of objects of type ProfileType. Each
     * object in the array represents a profile with properties like id, name, etc.
     * @returns The `createFunction` function returns an Observable. This Observable is a result of a
     * series of operations including making a POST request to create a function, mapping the response
     * to extract the functionId, mapping the profiles to associate them with the functionId, and then
     * making a bulk POST request to create these associations. If any errors occur during this
     * process, the function will log an error message and return an
     */
    public createFunction ( functionName: string, profiles: ProfileType[] ) {
        return this.post( { functionName } as FunctionType ).pipe(
            switchMap( response => {
                const functionId = response.id;
                const profilesFunctions = profiles.map( ( e ) => ( { profileId: e.id, functionId } ) );
                return this._profilesFunctionService.bulkPost( profilesFunctions as ProfileFunctionType[] );
            } ),
            catchError( error => {
                return throwError( () => new Error( error ) );
            } )
        );
    }
}