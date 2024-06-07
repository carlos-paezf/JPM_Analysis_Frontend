import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { FormBaseType, FunctionType, ProfileType } from '../../../../../shared/types';
import { ProfilesFunctionsService } from '../../services/profiles-functions.service';
import { ProfilesService } from '../../services/profiles.service';


@Component( {
    selector: 'app-admin-profiles',
    templateUrl: './admin-profiles.component.html',
    styleUrls: [ './admin-profiles.component.scss' ]
} )
export class AdminProfilesComponent extends BaseDetailClass<ProfileType> implements FormBaseType, OnInit {
    public form!: FormGroup<any>;
    public initialFormValues!: FormGroup<any>;
    public submitted: boolean = false;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    private _originalAssociatedFunctions: FunctionType[] = [];
    public associatedFunctions: FunctionType[] = [];
    public availableFunctions: FunctionType[] = [];
    public functionsToRemove: FunctionType[] = [];
    public functionsToAdd: FunctionType[] = [];

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
        private readonly _authUserService: AuthUsersService,
        private readonly _profilesService: ProfilesService,
        private readonly _profilesFunctionsService: ProfilesFunctionsService
    ) {
        super();
    }


    /**
     * This function initializes data and retrieves profiles and functions information based on the
     * provided ID.
     */
    ngOnInit (): void {
        this.isAdminUser = this._authUserService.getIsAdminAppUser();

        this._activateRoute.params.subscribe( params => {
            this.id = params[ 'id' ];
            this.isLoading = true;

            forkJoin(
                [
                    this._profilesFunctionsService.getFunctionsNotAssociatedWithProfile( this.id ),
                    this._profilesFunctionsService.getFunctionsByProfileId( this.id ),
                    this._profilesService.getById( this.id )
                ]
            ).subscribe( {
                next: ( [ functionResponse, profilesFunctionResponse, profilesResponse ] ) => {
                    this.availableFunctions = functionResponse.data;
                    this.associatedFunctions = profilesFunctionResponse.data;
                    this._originalAssociatedFunctions = [ ...profilesFunctionResponse.data ];
                    this.data = profilesResponse;
                    this.isLoading = false;
                    this.formActions();
                },
                error: ( error ) => {
                    this._appUtilsMessagesService.showQueryErrorMessage( error );
                }
            } );
        } );
    }


    /**
     * The function `formActions` creates a form with specific fields and handles changes to the form
     * values.
     * @returns If the `data` property is falsy (null, undefined, etc.), the function `formActions`
     * will return early and not execute the rest of the code inside the function.
     */
    formActions () {
        if ( !this.data ) return;

        this.form = this._formBuilder.group( {
            id: [ { value: this.data.id, disabled: true }, Validators.required ],
            profileName: [ this.data.profileName, Validators.required ],
            createdAt: [ { value: this.data.createdAt, disabled: true } ],
            updatedAt: [ { value: this.data.updatedAt, disabled: true } ],
        } );

        this.isAdminUser || this.form.disable();

        this.form.valueChanges.subscribe( {
            next: () => {
                this.isDataChanged = true;
            }
        } );

        this.initialFormValues = this.form.getRawValue();
    }


    /**
     * The function `toggleFunctionsRemove` adds or removes a function from an array based on whether
     * it already exists in the array.
     * @param {FunctionType} func - The `func` parameter is of type `FunctionType`.
     */
    toggleFunctionsRemove ( func: FunctionType ) {
        if ( this.functionsToRemove.find( e => e === func ) ) {
            this.functionsToRemove = this.functionsToRemove.filter( e => e !== func );
        } else {
            this.functionsToRemove.push( func );
        }

        this.form.markAllAsTouched();
    }


    /**
     * The function `toggleFunctionsAdd` adds or removes a function from an array based on whether it
     * already exists in the array.
     * @param {FunctionType} func - The `func` parameter is of type `FunctionType`.
     */
    toggleFunctionsAdd ( func: FunctionType ) {
        if ( this.functionsToAdd.find( e => e === func ) ) {
            this.functionsToAdd = this.functionsToAdd.filter( e => e !== func );
        } else {
            this.functionsToAdd.push( func );
        }

        this.form.markAllAsTouched();
    }


    /**
     * The `removeFunctions` function removes specified functions from the `associatedFunctions` array
     * and adds them to the `availableFunctions` array.
     */
    removeFunctions () {
        this.associatedFunctions = this.associatedFunctions.filter(
            x => !this.functionsToRemove.some( y => y.id === x.id )
        );
        this.availableFunctions.unshift( ...this.functionsToRemove );
        this.functionsToRemove = [];
        this.isDataChanged = true;
    }


    /**
     * The addFunctions function filters out functions that are already added and adds new functions to
     * the associatedFunctions array.
     */
    addFunctions () {
        this.availableFunctions = this.availableFunctions.filter(
            x => !this.functionsToAdd.some( y => y.id === x.id )
        );
        this.associatedFunctions.unshift( ...this.functionsToAdd );
        this.functionsToAdd = [];
        this.isDataChanged = true;
    }


    /**
     * The onSubmit function in TypeScript checks for admin user permissions, validates a form,
     * confirms an update, and then updates profile information and associated functions.
     * @returns If the `isAdminUser` check fails, the method will return a call to
     * `this._appUtilsMessagesService.showNoPermissionError()`. If the form is not valid, it will
     * return a call to `this._appUtilsMessagesService.showValidationError()`. If the user cancels the
     * update confirmation, it will return a call to
     * `this._appUtilsMessagesService.showUpdateCancelledMessage()
     */
    onSubmit (): void {
        if ( !this.isAdminUser ) return this._appUtilsMessagesService.showNoPermissionError();

        if ( !this.form.valid ) return this._appUtilsMessagesService.showValidationError();

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información del perfil ${ this.data!.profileName }?` );

        if ( !isConfirmedUpdate ) return this._appUtilsMessagesService.showUpdateCancelledMessage();

        forkJoin(
            [
                this._profilesService.update(
                    this.id,
                    { id: this.id, ...this.form.value },
                ),
                this._profilesFunctionsService.updateFunctionsByProfileId(
                    this.id,
                    this._originalAssociatedFunctions,
                    this.associatedFunctions
                )
            ]
        ).subscribe( {
            next: () => {
                this._appUtilsMessagesService.showUpdateSuccessMessage();
                this.submitted = true;
            },
            error: ( error ) => {
                this._appUtilsMessagesService.showQueryErrorMessage( error );
            }
        } );
    }


    /**
     * The `onRestartForm` function resets the form to its initial values in TypeScript.
     */
    onRestartForm (): void {
        this.form.reset( this.initialFormValues );
    }
}
