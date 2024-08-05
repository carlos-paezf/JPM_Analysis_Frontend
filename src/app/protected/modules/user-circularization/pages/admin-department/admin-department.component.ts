import { Component, OnInit } from '@angular/core';
import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { DepartmentEagerType, DepartmentType, FormBaseType } from '../../../../../shared/types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { DepartmentsService } from '../../../departments/services/departments.service';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { Location } from '@angular/common';

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
                        }
                    } );
            }
        } );
    }


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


    onSubmit (): void {
        if ( !this.isAdminUser ) return this._appUtilsMessagesService.showNoPermissionError();

        if ( !this.form.valid ) return this._appUtilsMessagesService.showValidationError();


        if ( !this.id ) {
            this._departmentsService.post( this.form.value )
                .subscribe( {
                    next: () => this._appUtilsMessagesService.showCreatedSuccessMessage(),
                    error: error => this._appUtilsMessagesService.showQueryErrorMessage( error )
                } );

            this._location.back();

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


    onRestartForm (): void {
        throw new Error( 'Method not implemented.' );
    }
}
