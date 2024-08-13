import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { DepartmentEagerType, FormBaseType } from '../../../../../shared/types';
import { DepartmentsService } from '../../services/departments.service';


@Component( {
    selector: 'app-admin-department',
    templateUrl: './admin-department.component.html',
    styleUrls: [ './admin-department.component.scss' ]
} )
export class AdminDepartmentComponent extends BaseDetailClass<DepartmentEagerType> implements FormBaseType, OnInit {
    public form!: FormGroup<any>;
    public initialFormValues!: FormGroup<any>;
    public submitted: boolean = false;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;


    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
        private readonly _departmentsService: DepartmentsService,
        private readonly _authUserService: AuthUsersService,
        private readonly _location: Location
    ) {
        super();
    }


    ngOnInit (): void {
        this.isAdminUser = this._authUserService.getIsAdminAppUser();

        this._activateRoute.params.subscribe( params => {
            this.id = params[ 'initials' ];
            if ( !this.id ) {
                this.data = null;
                this.isLoading = false;
                this.formActions();
                return;
            };
            this.isLoading = true;

            if ( this.id ) {
                this._departmentsService.getById( this.id )
                    .subscribe( {
                        next: response => {
                            this.data = response;
                            this.isLoading = false;
                            this.formActions();
                        },
                        error: error => {
                            this.data = null;
                            this.isLoading = false;
                            this._appUtilsMessagesService.showQueryErrorMessage( error );
                        }
                    } );
            }
        } );
    }


    /**
     * The `formActions` function in TypeScript creates a form with initial values, disables it for
     * non-admin users, tracks changes, and stores initial form values.
     */
    formActions () {
        this.form = this._formBuilder.group( {
            initials: [ this.data?.initials || '', Validators.required ],
            departmentName: [ this.data?.departmentName || '', Validators.required ],
            createdAt: [ { value: this.data?.createdAt || new Date(), disabled: true } ],
            updatedAt: [ { value: this.data?.updatedAt || new Date(), disabled: true } ],
            deletedAt: [ { value: this.data?.deletedAt || new Date(), disabled: true } ]
        } );

        this.isAdminUser || this.form.disable();

        this.form.valueChanges.subscribe( {
            next: () => { this.isDataChanged = true; }
        } );

        this.initialFormValues = this.form.getRawValue();
    }


    /**
     * The `onSubmit` function handles form submission for creating or updating departments, displaying
     * appropriate messages based on user permissions and form validity.
     * @returns In the `onSubmit` method, the following actions are being returned based on certain
     * conditions:
     */
    onSubmit (): void {
        if ( !this.isAdminUser ) return this._appUtilsMessagesService.showNoPermissionError();

        if ( !this.form.valid ) return this._appUtilsMessagesService.showValidationError();


        if ( !this.id ) {
            this._departmentsService.post( this.form.value )
                .subscribe( {
                    next: () => this._appUtilsMessagesService.showCreatedSuccessMessage(),
                    error: error => this._appUtilsMessagesService.showQueryErrorMessage( error )
                } );

            // this._location.back();

            this.onRestartForm();

            return;
        }

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización del departamento '${ this.id }'?` );

        if ( !isConfirmedUpdate ) return this._appUtilsMessagesService.showUpdateCancelledMessage();

        this._departmentsService.update( this.id, this.form.value )
            .subscribe( {
                next: () => { },
                error: ( error ) => this._appUtilsMessagesService.showQueryErrorMessage( error )
            } );
    }


    /**
     * The `onRestartForm` function resets a form to its initial values in TypeScript.
     */
    onRestartForm (): void {
        this.form.reset( this.initialFormValues );
    }
}
