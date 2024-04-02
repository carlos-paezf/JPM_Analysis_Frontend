import { Component, OnInit } from '@angular/core';
import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AccountType, CompanyUserType, FormBaseType, FunctionType, ProductType, UserEntitlementType } from '../../../../../shared/types';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';
import { UserEntitlementsService } from '../../services/user-entitlements.service';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { CompanyUsersService } from '../../../company-users/services/company-users.service';
import { forkJoin } from 'rxjs';
import { ProductsService } from '../../../products/services/products.service';
import { FunctionsService } from '../../../profiles/services/functions.service';
import { AccountsService } from '../../../accounts/services/accounts.service';

@Component( {
    selector: 'app-admin-user-entitlements',
    templateUrl: './admin-user-entitlements.component.html',
    styleUrls: [ './admin-user-entitlements.component.scss' ]
} )
export class AdminUserEntitlementsComponent extends BaseDetailClass<UserEntitlementType> implements FormBaseType, OnInit {
    public form!: FormGroup;
    public submitted: boolean = false;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    public companyUsers: CompanyUserType[] = [];
    public products: ProductType[] = [];
    public functions: FunctionType[] = [];
    public accounts: AccountType[] = [];

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _location: Location,
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _authUserService: AuthUsersService,
        private readonly _userEntitlementsService: UserEntitlementsService,
        private readonly _companyUsersService: CompanyUsersService,
        private readonly _productsService: ProductsService,
        private readonly _functionsService: FunctionsService,
        private readonly _accountsService: AccountsService,
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

            forkJoin(
                [
                    this._userEntitlementsService.getUserEntitlementById( this.id ),
                    this._companyUsersService.getCompanyUsers(),
                    this._productsService.getProducts(),
                    this._functionsService.getFunctions(),
                    this._accountsService.getAll()
                ]
            ).subscribe( {
                next: ( [ userEntitlementsResponse, companyUsersResponse, productsResponse, functionsResponse, accountsResponse ] ) => {
                    this.data = userEntitlementsResponse;
                    this.companyUsers = companyUsersResponse.data;
                    this.products = productsResponse.data;
                    this.functions = functionsResponse.data;
                    this.accounts = accountsResponse.data;
                },
                complete: () => {
                    this.isLoading = false;
                    this.formActions();
                },
                error: () => {
                    // TODO: Reportar al servicio de manejo de errores del servidor
                    throw new Error( 'Method not implemented.' );
                }
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
            accessId: [ this.data.accessId ],
            productId: [ this.data.productId ],
            functionId: [ this.data.functionId ],
            functionType: [ this.data.functionType ],
            accountNumber: [ this.data.accountNumber ],
            createdAt: [ { value: this.data.createdAt, disabled: true } ],
            updatedAt: [ { value: this.data.updatedAt, disabled: true } ],
            deletedAt: [ { value: this.data.deletedAt, disabled: true } ],
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
            message: 'No cuentas con permisos para actualizar el user entitlement'
        } );

        if ( !this.form.valid ) return this._toastrNotificationService.warning( {
            title: 'Actualización fallida',
            message: 'Por favor, confirma que la información sea valida'
        } );

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información del user entitlement ${ this.data!.accountNumber }?` );

        if ( !isConfirmedUpdate ) return this._toastrNotificationService.info( {
            title: 'Actualización Cancelada',
            message: 'Se canceló la actualización del user entitlement'
        } );

        this._userEntitlementsService.updateUserEntitlement( this.id, this.form.value );

        this._toastrNotificationService.success( {
            title: 'Actualización exitosa',
            message: 'La información del user entitlement ha sido actualizada correctamente'
        } );

        this.submitted = true;

        return this._location.back();
    }
}
