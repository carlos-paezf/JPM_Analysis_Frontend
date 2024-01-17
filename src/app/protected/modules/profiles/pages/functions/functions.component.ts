import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { FormBaseType, FunctionType, ProfileFunctionType, ProfileType } from '../../../../../shared/types';
import { FunctionsService } from '../../services/functions.service';
import { ProfilesService } from '../../services/profiles.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component( {
    selector: 'app-functions',
    templateUrl: './functions.component.html',
    styleUrls: [ './functions.component.scss' ]
} )
export class FunctionsComponent extends BaseDetailClass<ProfileFunctionType[]> implements FormBaseType, OnInit {
    public override sourceSrcset = "../../../../assets/images/Curiosity people-amico.png";
    public override imgSrc = "../../../../assets/images/Curiosity people-amico.svg";

    public profiles: ProfileType[] = [];
    public functions: FunctionType[] = [];

    public showForm: boolean = false;

    public form!: FormGroup<any>;
    public submitted: boolean = true;

    constructor (
        private readonly _formBuilder: FormBuilder,
        private readonly _profilesService: ProfilesService,
        private readonly _functionsService: FunctionsService,
    ) {
        super();
    }

    /**
     * The ngOnInit function makes multiple API calls using forkJoin and assigns the response data to
     * different variables.
     */
    ngOnInit (): void {
        forkJoin(
            [
                this._profilesService.getProfiles(),
                this._functionsService.getFunctions(),
                this._functionsService.getProfilesFunctions(),
            ]
        ).subscribe( {
            next: ( [ profilesResponse, functionsResponse, profilesFunctionsResponse ] ) => {
                this.profiles = profilesResponse.data;
                this.functions = functionsResponse.data;
                this.data = profilesFunctionsResponse.data;
            },
            complete: () => {
                this.isLoading = false;
            },
            error: ( error ) => {
                // TODO: Reportar al servicio de manejo de errores del servidor
                throw new Error( 'Method not implemented.' );
            }
        } );
        this.formActions();
    }


    /**
     * The function creates a form with two form controls, one for a function name and one for an array
     * of profiles.
     */
    formActions () {
        this.form = new FormGroup( {
            function_name: new FormControl<string>( '', [ Validators.required ] ),
            profiles: new FormControl<ProfileType[]>( [], [ Validators.required, Validators.minLength( 1 ) ] )
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
        return this.data!.some( e => e.profile_id === profileId && e.function_id === functionId ) ? "✔" : null;
    }

    /**
     * The function toggles the value of the showForm variable.
     * @returns The value of `this.showForm` after it has been toggled.
     */
    toggleShowForm () {
        return this.showForm = !this.showForm;
    }

    /**
     * The function toggles a profile in an array of profiles in a form.
     * @param {ProfileType} profile - The `profile` parameter is of type `ProfileType` and represents
     * the profile object that needs to be toggled.
     */
    toggleProfile ( profile: ProfileType ) {
        const oldProfiles: ProfileType[] = this.form.get( 'profiles' )?.value;

        const newProfiles: ProfileType[] =
            oldProfiles.find( p => p.id === profile.id )
                ? oldProfiles.filter( p => p.id !== profile.id )
                : [ profile, ...oldProfiles ];

        this.form.get( 'profiles' )?.setValue( newProfiles );
    }


    onSubmit (): void {
        this.form.markAllAsTouched();

        this._functionsService.createFunction( this.form.get( 'function_name' )!.value, this.form.get( 'profiles' )!.value );

        this.form.reset();
        this.form.get( 'profiles' )?.setValue( [] );

        this.showForm = false;
    }
}
