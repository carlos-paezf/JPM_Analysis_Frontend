import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { BaseServiceWithBulkMethods } from '../../../../shared/classes/base-service.class';
import { ProfileFunctionType, ResponseSheetsType } from '../../../../shared/types';
import { FunctionType, ProfileFunctionEagerType, ProfileType } from '../../../../shared/types/jpm-types.type';


/**
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class ProfilesFunctionsService extends BaseServiceWithBulkMethods<ProfileFunctionType, ProfileFunctionEagerType> {
    constructor ( _http: HttpClient ) {
        super( _http, "profilesFunctions" );
    }

    /**
     * This function retrieves functions based on a given profile ID using an HTTP GET request.
     * @param {string} profileId - The `profileId` parameter is a string that represents the unique
     * identifier of a user profile. It is used to retrieve a list of functions associated with that
     * specific profile.
     * @returns An Observable of type ResponseSheetsType<FunctionType> is being returned.
     */
    public getFunctionsByProfileId ( profileId: string ): Observable<ResponseSheetsType<FunctionType>> {
        return this._http.get<ResponseSheetsType<FunctionType>>( `${ this._baseUrl }/functions-by-profile-id/${ profileId }` );
    }


    /**
     * This function retrieves functions that are not associated with a specific profile ID.
     * @param {string} profileId - The `profileId` parameter is a string that represents the unique
     * identifier of a profile. It is used to retrieve functions that are not associated with the
     * specified profile.
     * @returns An Observable of type ResponseSheetsType<FunctionType> is being returned.
     */
    public getFunctionsNotAssociatedWithProfile ( profileId: string ): Observable<ResponseSheetsType<FunctionType>> {
        return this._http.get<ResponseSheetsType<FunctionType>>( `${ this._baseUrl }/functions-no-associated-by-profile-id/${ profileId }` );
    }


    /**
     * The function `updateFunctionsByProfileId` updates functions associated with a profile by
     * deleting removed functions and adding new functions.
     * @param {string} profileId - The `profileId` parameter is a string that represents the unique
     * identifier of a profile.
     * @param {FunctionType[]} originalFunctions - The `originalFunctions` parameter in the
     * `updateFunctionsByProfileId` function represents an array of `FunctionType` objects that are
     * currently associated with a specific profile. These functions are the original set of functions
     * that need to be updated based on the changes provided in the `updatedFunctions` parameter.
     * @param {FunctionType[]} updatedFunctions - The `updatedFunctions` parameter in the
     * `updateFunctionsByProfileId` function represents an array of `FunctionType` objects that contain
     * the updated functions for a specific profile. These functions will be compared with the original
     * functions to determine which functions have been removed and which functions are new or updated.
     * @returns The `updateFunctionsByProfileId` function returns an Observable that emits an array
     * containing two elements. The first element is the number of functions that were removed
     * (deleted), and the second element is an array of `ProfileFunctionType` objects representing the
     * new functions that were added.
     */
    public updateFunctionsByProfileId ( profileId: string, originalFunctions: FunctionType[], updatedFunctions: FunctionType[] ): Observable<[ number, ProfileFunctionType[] ]> {
        const removedFunctions = originalFunctions
            .filter( original => !updatedFunctions.find( updated => updated.id === original.id ) )
            .map( func => `${ profileId }_${ func.id }` );

        const newProfilesFunctions = updatedFunctions
            .filter( updated => !originalFunctions.find( original => original.id === updated.id ) )
            .map( func => ( { profileId, functionId: func.id } ) ) as ProfileFunctionType[];

        return forkJoin( [
            this.bulkDelete( removedFunctions ),
            this.bulkPost( newProfilesFunctions )
        ] );
    }


    /**
     * The function `updateProfilesByFunctionId` updates profiles based on function ID by removing
     * profiles that are no longer present and adding new profiles.
     * @param {string} functionId - The `functionId` parameter is a string that represents the ID of a
     * specific function.
     * @param {ProfileFunctionType[]} originalProfiles - The `originalProfiles` parameter in the
     * `updateProfilesByFunctionId` function represents an array of profiles associated with a specific
     * function. These profiles are of type `ProfileFunctionType`.
     * @param {ProfileType[]} updatedProfiles - The `updatedProfiles` parameter in the
     * `updateProfilesByFunctionId` function represents an array of profiles that have been updated.
     * Each profile in this array contains information such as `id`, which is used to identify the
     * profile, and other relevant data. This array is compared with the `originalProfiles
     * @returns The `updateProfilesByFunctionId` function returns a `forkJoin` observable that combines
     * the results of two asynchronous operations: bulk deletion of removed profiles and bulk posting
     * of new profiles with the specified function ID.
     */
    public updateProfilesByFunctionId ( functionId: string, originalProfiles: ProfileFunctionType[], updatedProfiles: ProfileType[], ) {
        const removedProfiles = originalProfiles
            .filter( original => !updatedProfiles.find( updated => updated.id === original.profileId ) )
            .map( profile => `${ profile.profileId }_${ functionId }` );

        const newProfilesFunctions = updatedProfiles
            .filter( updated => !originalProfiles.find( original => original.profileId === updated.id ) )
            .map( profile => ( { profileId: profile.id, functionId } ) ) as ProfileFunctionType[];

        return forkJoin( [
            this.bulkDelete( removedProfiles ),
            this.bulkPost( newProfilesFunctions )
        ] );
    }
}
