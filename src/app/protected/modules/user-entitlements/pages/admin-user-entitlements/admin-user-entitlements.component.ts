import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';
import { AccountType, CompanyUserType, FormBaseType, FunctionType, ProductType, UserEntitlementType } from '../../../../../shared/types';
import { AccountsService } from '../../../accounts/services/accounts.service';
import { CompanyUsersService } from '../../../company-users/services/company-users.service';
import { ProductsService } from '../../../products/services/products.service';
import { FunctionsService } from '../../../profiles/services/functions.service';
import { UserEntitlementsService } from '../../services/user-entitlements.service';
import { AppUtilsMessagesService } from 'src/app/shared/services/app-utils-messages.service';


@Component( {
    selector: 'app-admin-user-entitlements',
    templateUrl: './admin-user-entitlements.component.html',
    styleUrls: [ './admin-user-entitlements.component.scss' ]
} )
export class AdminUserEntitlementsComponent extends BaseDetailClass<UserEntitlementType> implements FormBaseType, OnInit {
    public form!: FormGroup;
    public submitted: boolean = false;
    public initialFormValues!: FormGroup<any>;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    public companyUsers: CompanyUserType[] = [];
    public accounts: AccountType[] = [];
    public products: ProductType[] = [];
    public functions: FunctionType[] = [];

    public searchCompanyUsers: CompanyUserType[] = [];
    public searchAccounts: AccountType[] = [];
    public searchProducts: ProductType[] = [];
    public searchFunctions: FunctionType[] = [];


    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _location: Location,
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
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
        this._initializeData();
    }


    private _initializeData (): void {
        this._activateRoute.params.subscribe( params => {
            this.id = params[ 'id' ];
            this.isLoading = true;
            this._loadData();
        } );
    }


    private _loadData (): void {
        forkJoin(
            [
                this._userEntitlementsService.getById( this.id ),
                this._companyUsersService.getAll(),
                this._productsService.getAll(),
                this._functionsService.getAll(),
                this._accountsService.getAll()
            ]
        ).subscribe( {
            next: ( [ userEntitlementsResponse, companyUsersResponse, productsResponse, functionsResponse, accountsResponse ] ) => {
                this.data = userEntitlementsResponse;
                this.companyUsers = companyUsersResponse.data;
                this.accounts = accountsResponse.data;
                this.products = productsResponse.data;
                this.functions = functionsResponse.data;

                this.searchCompanyUsers = [ {} as CompanyUserType, ...this.companyUsers ];
                this.searchAccounts = [ {} as AccountType, ...this.accounts ];
                this.searchProducts = [ {} as ProductType, ...this.products ];
                this.searchFunctions = [ {} as FunctionType, ...this.functions ];

                this.isLoading = false;
                this.formActions();
            },
            error: ( error ) => {
                this.isLoading = false;
                this._appUtilsMessagesService.showQueryErrorMessage( error );
            }
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
            companyUser: [ this._getCompanyUser( this.data.accessId ) ],
            account: [ this._getAccount( this.data.accountNumber ) ],
            product: [ this._getProduct( this.data.productId ) ],
            function: [ this._getFunction( this.data.functionId ) ],
            functionType: [ this.data.functionType ],
            createdAt: [ { value: this.data.createdAt, disabled: true } ],
            updatedAt: [ { value: this.data.updatedAt, disabled: true } ],
            deletedAt: [ { value: this.data.deletedAt, disabled: true } ],
            companyUserSearch: [ '' ],
            accountSearch: [ '' ],
            productSearch: [ '' ],
            functionSearch: [ '' ],
        } );

        this.isAdminUser || this.form.disable();

        this.form.valueChanges.subscribe( _ => {
            this.isDataChanged = true;
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

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información del user entitlement ${ this.data!.accountNumber }?` );

        if ( !isConfirmedUpdate ) return this._appUtilsMessagesService.showUpdateCancelledMessage();

        this._userEntitlementsService.update(
            this.id,
            {
                id: this.id,
                accessId: ( this.form.get( 'companyUser' )!.value as CompanyUserType ).accessId,
                accountNumber: this.form.get( "account" )!.value
                    ? ( this.form.get( "account" )!.value as AccountType ).accountNumber
                    : null,
                productId: ( this.form.get( 'product' )!.value as ProductType ).id,
                functionId: this.form.get( "function" )!.value
                    ? ( this.form.get( "function" )!.value as FunctionType ).id
                    : null,
                functionType: ( this.form.get( 'functionType' )?.value )
            } as UserEntitlementType
        ).subscribe(
            {
                next: () => {
                    this._appUtilsMessagesService.showUpdateSuccessMessage();
                    this.submitted = true;
                    return this._location.back();
                },
                error: ( error ) => { this._appUtilsMessagesService.showQueryErrorMessage( error ); }
            }
        );

        this._appUtilsMessagesService.showUpdateSuccessMessage();

        this.submitted = true;

        return this._location.back();
    }


    /**
     * The `onRestartForm` function resets the form to its initial values in TypeScript.
     */
    onRestartForm (): void {
        this.form.reset( this.initialFormValues );
    }


    private _getCompanyUser ( accessId: string ): CompanyUserType {
        return this.companyUsers.find( companyUser => companyUser.accessId === accessId ) ?? this.searchCompanyUsers[ 0 ];
    }


    filterCompanyUsers ( $textInput: string ) {
        this.searchCompanyUsers = this.companyUsers.filter(
            companyUser => [ companyUser.accessId, companyUser.userName ].some(
                attribute => attribute?.toLowerCase().includes( $textInput.toLowerCase() )
            )
        );
    }


    private _getAccount ( accountNumber: string ): AccountType {
        return this.accounts.find( account => account.accountNumber === accountNumber ) ?? this.searchAccounts[ 0 ];
    }


    filterAccounts ( $textInput: string ) {
        this.searchAccounts = this.accounts.filter(
            account => [ account.accountNumber, account.accountName ].some(
                attribute => attribute?.toLowerCase().includes( $textInput.toLowerCase() )
            )
        );
    }


    private _getProduct ( productId: string ): ProductType {
        return this.products.find( product => product.id === productId ) ?? this.searchProducts[ 0 ];
    }


    filterProducts ( $textInput: string ) {
        this.searchProducts = this.products.filter(
            product => [ product.id, product.productName ].some(
                attribute => attribute?.toLowerCase().includes( $textInput.toLowerCase() )
            )
        );
    }

    private _getFunction ( functionId: string ): FunctionType {
        return this.functions.find( func => func.id === functionId ) ?? this.searchFunctions[ 0 ];
    }


    filterFunctions ( $textInput: string ) {
        this.searchFunctions = this.functions.filter(
            func => [ func.id, func.functionName ].some(
                attribute => attribute?.toLowerCase().includes( $textInput.toLowerCase() )
            )
        );
    }
}
