import { Component, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';

import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ProfileType } from '../../../../../shared/types';
import { FunctionEagerType, FunctionType, ProfileFunctionType } from '../../../../../shared/types/jpm-types.type';
import { FunctionsService } from '../../services/functions.service';
import { ProfilesFunctionsService } from '../../services/profiles-functions.service';
import { ProfilesService } from '../../services/profiles.service';


@Component( {
    selector: 'app-function-form',
    templateUrl: './function-form.component.html',
    styleUrls: [ './function-form.component.scss' ]
} )
export class FunctionFormComponent implements OnChanges {
    @Input() public functionId: string | null = null;
    @Output() public showForm: boolean = true;

    public isLoading: boolean = true;
    public form!: FormGroup<any>;
    public profiles: ProfileType[] = [];
    public functionData: FunctionEagerType | null = null;
    private _originalProfilesFunctions: ProfileFunctionType[] = [];

    constructor (
        private readonly _router: Router,
        private readonly _profilesService: ProfilesService,
        private readonly _functionsService: FunctionsService,
        private readonly _profilesFunctionService: ProfilesFunctionsService,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService
    ) { }

    ngOnChanges (): void {
        this.isLoading = true;
        forkJoin(
            [
                this._profilesService.getAll(),
                this.functionId
                    ? this._functionsService.getById( this.functionId )
                    : of( null )
            ]
        ).subscribe( {
            next: ( [ profilesResponse, functionsResponse ] ) => {
                this.profiles = profilesResponse.data;
                this.functionData = functionsResponse;
                this._originalProfilesFunctions = [ ...( this.functionData?.profilesFunctions ?? [] ) ];
                this.formActions();
                this.isLoading = false;
            },
            error: ( error ) => {
                this._appUtilsMessagesService.showQueryErrorMessage( error );
                this.isLoading = false;
            }
        } );
    }


    /**
     * The function creates a form group with two form controls and loads associated profiles.
     */
    formActions () {
        this.form = new FormGroup( {
            functionName: new FormControl<string>( this.functionData?.functionName ?? '', [ Validators.required ] ),
            profiles: new FormControl<ProfileType[]>( [], [ Validators.required, Validators.minLength( 1 ) ] )
        } );

        this.loadAssociatedProfiles();
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


    /**
     * The function loads associated profiles and toggles them based on the function data.
     */
    loadAssociatedProfiles () {
        this.functionData?.profilesFunctions.forEach( profileFunction => {
            this.toggleProfile( this.profiles.find( profile => profile.id === profileFunction.profileId )! );
        } );
    }


    /**
     * The function checks if a given profile exists in an array of profiles.
     * @param {ProfileType} profile - The `profile` parameter is of type `ProfileType`.
     * @returns a boolean value.
     */
    checked ( profile: ProfileType ) {
        return ( this.form.get( 'profiles' )!.value as ProfileType[] )
            .some( p => p.id === profile.id );
    }


    deleteFunction (): void {
        this._functionsService.deactivate( this.functionId! )
            .subscribe( {
                next: () => {
                    this._appUtilsMessagesService.showUpdateSuccessMessage();
                }
            } );
    }


    restoreFunction (): void {
        this._functionsService.reactivate( this.functionId! )
            .subscribe( {
                next: () => {
                    this._appUtilsMessagesService.showUpdateSuccessMessage();
                }
            } );
    }


    /**
     * The onSubmit function handles the submission of a form, either creating a new function or
     * updating an existing one, and displays appropriate notifications.
     */
    onSubmit (): void {
        this.form.markAllAsTouched();

        this.functionId
            ? this._updateFunction()
            : this._createFunction();

        this.form.reset();
        this.form.get( 'profiles' )?.setValue( [] );

        this._router.navigate( [ 'profiles/functions' ] );

        this.showForm = false;
    }


    /**
     * The _updateFunction method updates a function and associated profiles after confirming with the
     * user.
     */
    private _updateFunction () {
        if ( window.confirm( '¿Está seguro de actualizar la función?' ) ) {
            forkJoin(
                [
                    this._functionsService.update(
                        this.functionId!,
                        { id: this.functionId!, functionName: this.form.get( 'functionName' )!.value } as FunctionType
                    ),
                    this._profilesFunctionService.updateProfilesByFunctionId(
                        this.functionId!,
                        this._originalProfilesFunctions,
                        this.form.get( 'profiles' )!.value
                    )
                ]
            ).subscribe( {
                next: () => {
                    this._appUtilsMessagesService.showUpdateSuccessMessage();
                },
                error: ( error ) => {
                    this._appUtilsMessagesService.showQueryErrorMessage( error );
                }
            } );
        } else {
            this._appUtilsMessagesService.showUpdateCancelledMessage();
        }
    }


    /**
     * The _createFunction method creates a new function using data from a form and profiles, and
     * displays success or error messages accordingly.
     */
    private _createFunction () {
        this._functionsService.createFunction(
            this.form.get( 'functionName' )!.value,
            this.form.get( 'profiles' )!.value
        ).subscribe( {
            next: () => {
                this._appUtilsMessagesService.showUpdateSuccessMessage();
            },
            error: ( error ) => {
                this._appUtilsMessagesService.showQueryErrorMessage( error );
            }
        } );
    }
}
