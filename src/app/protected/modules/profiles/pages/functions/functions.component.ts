import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { FunctionType, ProfileFunctionType, ProfileType } from '../../../../../shared/types';
import { FunctionsService } from '../../services/functions.service';
import { ProfilesFunctionsService } from '../../services/profiles-functions.service';
import { ProfilesService } from '../../services/profiles.service';


@Component( {
    selector: 'app-functions',
    templateUrl: './functions.component.html',
    styleUrls: [ './functions.component.scss' ]
} )
export class FunctionsComponent extends BaseDetailClass<ProfileFunctionType[]> implements OnInit {
    public sourceSrcset = "../../../../assets/images/Curiosity people-amico.png";
    public imgSrc = "../../../../assets/images/Curiosity people-amico.svg";

    public profiles: ProfileType[] = [];
    public functions: FunctionType[] = [];

    public showForm: boolean = true;

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _router: Router,
        private readonly _appUtilsMessages: AppUtilsMessagesService,
        private readonly _profilesService: ProfilesService,
        private readonly _functionsService: FunctionsService,
        private readonly _profilesFunctionService: ProfilesFunctionsService
    ) {
        super();
    }

    /**
     * The ngOnInit function makes multiple API calls using forkJoin and assigns the response data to
     * different variables.
     */
    ngOnInit (): void {
        this._activateRoute.params.subscribe( params => {
            this.id = params[ 'id' ];
            this.isLoading = true;

            forkJoin(
                [
                    this._profilesService.getAll(),
                    this._functionsService.getAll(),
                    this._profilesFunctionService.getAll(),
                ]
            ).subscribe( {
                next: ( [ profilesResponse, functionsResponse, profilesFunctionsResponse ] ) => {
                    this.profiles = profilesResponse.data;
                    this.functions = functionsResponse.data;
                    this.data = profilesFunctionsResponse.data;
                    this.isLoading = false;
                },
                error: ( error ) => {
                    this.isLoading = false;
                    this._appUtilsMessages.showQueryErrorMessage( error );
                }
            } );
        } );
    }


    /**
     * The function checks if a profile with a specific profileId and functionId exists in the data and
     * returns a "✔" if it does, otherwise it returns null.
     * @param {string} profileId - The profileId parameter is a string that represents the ID of a
     * profile.
     * @param {string} functionId - The `functionId` parameter is a string that represents the ID of a
     * function.
     * @returns either "✔" if there is a match for the given profileId and functionId in the data, or
     * null if there is no match.
     */
    getProfileFunction ( profileId: string, functionId: string ) {
        return this.data!.some( e => e.profileId === profileId && e.functionId === functionId ) ? "✔" : null;
    }


    /**
     * The function toggles the value of the showForm variable.
     * @returns The value of `this.showForm` after it has been toggled.
     */
    toggleShowForm () {
        return this.showForm = !this.showForm;
    }


    onClick ( func: FunctionType ) {
        this.showForm = true;
        this._router.navigate( [ `profiles/functions/${ func.id }` ] );
    }
}
