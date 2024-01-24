import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';
import { AccountType, FormBaseType } from '../../../../../shared/types';
import { AccountsService } from '../../services/accounts.service';


@Component( {
    selector: 'app-admin-accounts',
    templateUrl: './admin-accounts.component.html',
    styleUrls: [ './admin-accounts.component.scss' ]
} )
export class AdminAccountsComponent extends BaseDetailClass<AccountType> implements FormBaseType, OnInit {
    public override sourceSrcset = "../../../../assets/images/Curiosity people-amico.png";
    public override imgSrc = "../../../../assets/images/Curiosity people-amico.svg";

    public form!: FormGroup;
    public submitted: boolean = false;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _location: Location,
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _accountsService: AccountsService,
        private readonly _authUserService: AuthUsersService,
    ) {
        super();
    }

    /**
     * The ngOnInit function initializes the component by checking if the user is an admin, setting
     * profile information, and retrieving company user data based on the access ID parameter.
     */
    ngOnInit (): void {
        this.isAdminUser = this._authUserService.getIsAdminAppUser();

        this._activateRoute.params.subscribe( params => {
            this.id = params[ 'id' ];
            this.isLoading = true;

            this._accountsService.getAccountById( this.id )
                .subscribe( response => {
                    this.data = response;
                    this.isLoading = false;
                    this.formActions();
                } );
        } );
    }

    /**
     * The function sets up a form with pre-filled values and disables it if the user is not an admin,
     * and also listens for changes in the form values.
     * @returns If the `this.data` property is falsy (e.g. null, undefined, false), then nothing is
     * being returned. The function will exit early and no further code will be executed.
     */
    formActions () {
        if ( !this.data ) return;

        this.form = this._formBuilder.group( {
            account_name: [ this.data.account_name ],
            account_number: [ this.data.account_number ],
            account_type: [ this.data.account_type ],
            bank_currency: [ this.data.bank_currency ],
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
     * This function handles the submission of a form to update an account, performing various checks
     * and displaying notifications based on the outcome.
     * @returns the result of the `_location.back()` method.
     */
    onSubmit () {
        if ( !this.isAdminUser ) return this._toastrNotificationService.error( {
            title: 'Error',
            message: 'No cuentas con permisos para actualizar la cuenta'
        } );

        if ( !this.form.valid ) return this._toastrNotificationService.warning( {
            title: 'Actualización fallida',
            message: 'Por favor, confirma que la información sea valida'
        } );

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información de la cuenta ${ this.data!.account_number }?` );

        if ( !isConfirmedUpdate ) return this._toastrNotificationService.info( {
            title: 'Actualización Cancelada',
            message: 'Se canceló la actualización de la cuenta'
        } );

        this._accountsService.updateAccount( this.id, this.form.value );

        this._toastrNotificationService.success( {
            title: 'Actualización exitosa',
            message: 'La información de la cuenta ha sido actualizada correctamente'
        } );

        this.submitted = true;

        return this._location.back();
    }
}
