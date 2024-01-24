import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';
import { FormBaseType, FunctionType, ProfileType } from '../../../../../shared/types';
import { FunctionsService } from '../../services/functions.service';
import { ProfilesService } from '../../services/profiles.service';


@Component( {
    selector: 'app-admin-profiles',
    templateUrl: './admin-profiles.component.html',
    styleUrls: [ './admin-profiles.component.scss' ]
} )
export class AdminProfilesComponent extends BaseDetailClass<ProfileType> implements FormBaseType, OnInit {
    public override sourceSrcset = "../../../../assets/images/Curiosity people-amico.png";
    public override imgSrc = "../../../../assets/images/Curiosity people-amico.svg";

    public form!: FormGroup<any>;
    public submitted: boolean = false;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    public associatedFunctions: FunctionType[] = [];
    public availableFunctions: FunctionType[] = [];
    public functionsToRemove: FunctionType[] = [];
    public functionsToAdd: FunctionType[] = [];

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _location: Location,
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _authUserService: AuthUsersService,
        private readonly _profilesService: ProfilesService,
        private readonly _functionsService: FunctionsService
    ) {
        super();
    }

    ngOnInit (): void {
        this.isAdminUser = this._authUserService.getIsAdminAppUser();

        this._activateRoute.params.subscribe( params => {
            this.id = params[ 'id' ];
            this.isLoading = true;

            this._functionsService.getFunctionsNotAssociatedWithProfile( this.id )
                .subscribe( response => {
                    this.availableFunctions = response.data;
                } );

            this._functionsService.getFunctionsByProfileId( this.id )
                .subscribe( response => {
                    this.associatedFunctions = response.data;
                } );

            this._profilesService.getProfileById( this.id )
                .subscribe( response => {
                    this.data = response;
                    this.isLoading = false;
                    this.formActions();
                } );
        } );
    }

    formActions () {
        if ( !this.data ) return;

        this.form = this._formBuilder.group( {
            id: [ this.data.id ],
            profile_name: [ this.data.profile_name ],
            createdAt: [ { value: this.data.created_at, disabled: true } ],
            updatedAt: [ { value: this.data.updated_at, disabled: true } ],
            deletedAt: [ { value: this.data.deleted_at, disabled: true } ],
        } );

        this.isAdminUser || this.form.disable();

        this.form.valueChanges.subscribe( _ => {
            this.isDataChanged = true;
        } );
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


    onSubmit (): void {
        if ( !this.isAdminUser ) return this._toastrNotificationService.error( {
            title: 'Error',
            message: 'No cuentas con permisos para actualizar el perfil'
        } );

        if ( !this.form.valid ) return this._toastrNotificationService.warning( {
            title: 'Actualización fallida',
            message: 'Por favor, confirma que la información sea valida'
        } );

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información del perfil ${ this.data!.profile_name }?` );

        if ( !isConfirmedUpdate ) return this._toastrNotificationService.info( {
            title: 'Actualización Cancelada',
            message: 'Se canceló la actualización del perfil'
        } );

        this._profilesService.updateProfile( this.id, this.form.value, this.associatedFunctions );

        this._toastrNotificationService.success( {
            title: 'Actualización exitosa',
            message: 'La información del perfil ha sido actualizada correctamente'
        } );

        this.submitted = true;

        return this._location.back();
    }
}
