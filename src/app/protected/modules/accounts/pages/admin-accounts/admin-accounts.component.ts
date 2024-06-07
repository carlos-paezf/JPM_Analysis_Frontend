import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { AccountEagerType, FormBaseType } from '../../../../../shared/types';
import { AccountsService } from '../../services/accounts.service';


@Component( {
    selector: 'app-admin-accounts',
    templateUrl: './admin-accounts.component.html',
    styleUrls: [ './admin-accounts.component.scss' ]
} )
export class AdminAccountsComponent extends BaseDetailClass<AccountEagerType> implements FormBaseType, OnInit {
    public form!: FormGroup;
    public initialFormValues!: FormGroup<any>;
    public submitted: boolean = false;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
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

            this._accountsService.getById( this.id )
                .subscribe( {
                    next: response => {
                        this.data = response;
                        this.isLoading = false;
                        this.formActions();
                    },
                    error: ( error ) => {
                        this.data = null;
                        this.isLoading = false;
                    },
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
            accountNumber: [ { value: this.data.accountNumber, disabled: true }, Validators.required ],
            accountName: [ this.data.accountName, Validators.required ],
            accountType: [ this.data.accountType, Validators.required ],
            bankCurrency: [ this.data.bankCurrency ],
            createdAt: [ { value: this.data.createdAt, disabled: true } ],
            updatedAt: [ { value: this.data.updatedAt, disabled: true } ],
            deletedAt: [ { value: this.data.deletedAt, disabled: true } ],
        } );

        this.isAdminUser || this.form.disable();

        this.form.valueChanges.subscribe( {
            next: () => { this.isDataChanged = true; }
        } );

        this.initialFormValues = this.form.getRawValue();
    }


    /**
     * This function handles the submission of a form to update an account, performing various checks
     * and displaying notifications based on the outcome.
     * @returns the result of the `_location.back()` method.
     */
    onSubmit () {
        if ( !this.isAdminUser ) return this._appUtilsMessagesService.showNoPermissionError();

        if ( !this.form.valid ) return this._appUtilsMessagesService.showValidationError();

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información de la cuenta ${ this.data!.accountNumber }?` );

        if ( !isConfirmedUpdate ) return this._appUtilsMessagesService.showUpdateCancelledMessage();

        this._accountsService.update(
            this.id,
            { accountNumber: this.data!.accountNumber, ...this.form.value }
        ).subscribe(
            {
                next: () => {
                    this._appUtilsMessagesService.showUpdateSuccessMessage();
                    this.submitted = true;
                    // return this._location.back();
                },
                error: ( error ) => this._appUtilsMessagesService.showQueryErrorMessage( error )
            }
        );
    }

    /**
     * The `onRestartForm` function resets a form to its initial values in TypeScript.
     */
    onRestartForm (): void {
        this.form.reset( this.initialFormValues );
    }
}
