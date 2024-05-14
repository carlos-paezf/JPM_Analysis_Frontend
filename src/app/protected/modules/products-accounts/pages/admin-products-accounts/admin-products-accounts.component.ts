import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { AccountType, FormBaseType, ProductAccountType, ProductType } from '../../../../../shared/types';
import { AccountsService } from '../../../accounts/services/accounts.service';
import { ProductsService } from '../../../products/services/products.service';
import { ProductsAccountsService } from '../../services/products-accounts.service';


@Component( {
    selector: 'app-admin-products-accounts',
    templateUrl: './admin-products-accounts.component.html',
    styleUrls: [ './admin-products-accounts.component.scss' ]
} )
export class AdminProductsAccountsComponent extends BaseDetailClass<ProductAccountType> implements FormBaseType, OnInit {
    public form!: FormGroup<any>;
    public submitted!: boolean;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    public accounts: AccountType[] = [];
    public searchAccounts: AccountType[] = [];
    public products: ProductType[] = [];
    public searchProducts: ProductType[] = [];

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _location: Location,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
        private readonly _productsAccountsService: ProductsAccountsService,
        private readonly _authUserService: AuthUsersService,
        private readonly _accountsService: AccountsService,
        private readonly _productsService: ProductsService,
    ) {
        super();
    }

    ngOnInit (): void {
        this.isAdminUser = this._authUserService.getIsAdminAppUser();

        this._activateRoute.params.subscribe( params => {
            this.id = params[ 'id' ];
            this.isLoading = true;

            forkJoin(
                [
                    this._productsAccountsService.getById( this.id ),
                    this._productsService.getAll(),
                    this._accountsService.getAll(),
                ]
            ).subscribe( {
                next: ( [ clientResponse, productsResponse, accountsResponse ] ) => {
                    this.data = clientResponse;
                    this.products = productsResponse.data;
                    this.searchProducts = [ {} as ProductType, ...this.products ];
                    this.accounts = accountsResponse.data;
                    this.searchAccounts = [ {} as AccountType, ...this.accounts ];
                    this.formActions();
                    this.isLoading = false;
                },
                error: ( error ) => {
                    this.isLoading = false;
                    this._appUtilsMessagesService.showQueryErrorMessage( error );
                }
            } );
        } );
    }

    formActions () {
        if ( !this.data ) return;

        this.form = this._formBuilder.group( {
            product: [ this._getProduct( this.data.productId ) ],
            account: [ this._getAccount( this.data.accountNumber ) ],
            productSearch: [ '' ],
            accountSearch: [ '' ]
        } );

        this.isAdminUser || this.form.disable();

        this.form.valueChanges.subscribe( _ => {
            this.isDataChanged = true;
        } );
    }


    /**
     * The getProduct function retrieves a product from a list of products based on the provided
     * productId.
     * @param {string} productId - The `productId` parameter is a string that represents the unique
     * identifier of a product.
     * @returns The getProduct function is returning the product object from the products array that
     * matches the given productId.
     */
    private _getProduct ( productId: string ): ProductType {
        return this.products.find( product => product.id === productId ) ?? this.searchProducts[ 0 ];
    }


    /**
     * The `filterProducts` function filters products based on the input text matching product names or
     * sub-products.
     * @param {string}  - The `filterProducts` function takes a string input `` and
     * filters the `products` array based on whether the `productName` or `subProduct` of each
     * product includes the `` string (case-insensitive).
     */
    filterProducts ( $textInput: string ) {
        this.searchProducts = this.products.filter(
            product => [ product.productName, product.subProduct ].some(
                attribute => attribute?.toLowerCase().includes( $textInput.toLowerCase() )
            )
        );
    }


    /**
     * This TypeScript function retrieves an account object from an array based on the provided account
     * number.
     * @param {string} accountNumber - The `getAccount` function takes a parameter `accountNumber`
     * which is a string representing the account number of the account you want to retrieve. The
     * function searches for and returns the account object from the `accounts` array that matches the
     * provided `accountNumber`.
     * @returns The `getAccount` function is returning an account object from the `accounts` array that
     * matches the `accountNumber` provided as a parameter.
     */
    private _getAccount ( accountNumber: string ): AccountType {
        return this.accounts.find( account => account.accountNumber === accountNumber ) ?? this.searchAccounts[ 0 ];
    }


    /**
     * The `filterAccounts` function filters accounts based on a search input by checking if the
     * account name or number includes the input text in a case-insensitive manner.
     * @param {string} $textInput - The `filterAccounts` function takes a string input `` and
     * filters the `accounts` array based on whether the `accountName` or `accountNumber` includes
     * the `` value (case-insensitive). The filtered accounts are stored in the
     * `searchAccounts` array.
     */
    filterAccounts ( $textInput: string ) {
        this.searchAccounts = this.accounts.filter(
            account => [ account.accountName, account.accountNumber ].some(
                attribute => attribute?.toLowerCase().includes( $textInput.toLowerCase() )
            )
        );
    }


    /**
     * The onSubmit function checks for permissions, validates form data, confirms update with user,
     * and then updates product or account information accordingly.
     * @returns In the onSubmit() method, various messages are being shown based on different
     * conditions. If the user is not an admin, a "No Permission" error message is shown. If the form
     * is not valid, a "Validation Error" message is shown. If the user cancels the update
     * confirmation, an "Update Cancelled" message is shown. If there are validation errors related to
     * product and account fields
     */
    onSubmit (): void {
        if ( !this.isAdminUser ) return this._appUtilsMessagesService.showNoPermissionError();

        if ( !this.form.valid ) return this._appUtilsMessagesService.showValidationError();

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información del cliente?` );

        if ( !isConfirmedUpdate ) return this._appUtilsMessagesService.showUpdateCancelledMessage();

        if ( ( !this.form.get( 'product' )!.value && !this.form.get( 'account' )!.value )
            || ( !this.form.get( 'product' )!.value && !( this.form.get( 'account' )!.value as AccountType ).accountNumber )
            || ( !this.form.get( 'account' )!.value && !( this.form.get( 'product' )!.value as ProductType ).id )
            || ( !( this.form.get( 'product' )!.value as ProductType ).id
                && !( this.form.get( 'account' )!.value as AccountType ).accountNumber )
        )
            return this._appUtilsMessagesService.showValidationError();


        this._productsAccountsService.update(
            this.id,
            {
                id: this.id,
                productId: this.form.get( 'product' )?.value
                    ? ( this.form.get( 'product' )!.value as ProductType ).id
                    : null,
                accountNumber: this.form.get( 'account' )?.value
                    ? ( this.form.get( 'account' )!.value as AccountType ).accountNumber
                    : null
            } as ProductAccountType
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
    }
}
