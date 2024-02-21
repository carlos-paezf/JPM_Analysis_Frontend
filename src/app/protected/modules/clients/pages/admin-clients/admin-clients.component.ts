import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';
import { AccountType, ClientType, FormBaseType, ProductType } from '../../../../../shared/types';
import { ClientsService } from '../../services/clients.service';
import { ProductsService } from '../../../products/services/products.service';
import { AccountsService } from '../../../accounts/services/accounts.service';
import { forkJoin } from 'rxjs';


@Component( {
    selector: 'app-admin-clients',
    templateUrl: './admin-clients.component.html',
    styleUrls: [ './admin-clients.component.scss' ]
} )
export class AdminClientsComponent extends BaseDetailClass<ClientType> implements FormBaseType, OnInit {
    public override sourceSrcset = "../../../../assets/images/Curiosity people-amico.png";
    public override imgSrc = "../../../../assets/images/Curiosity people-amico.svg";

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
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _clientsService: ClientsService,
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
                    this._clientsService.getClientById( Number( this.id ) ),
                    this._productsService.getProducts(),
                    this._accountsService.getAccounts(),
                ]
            ).subscribe( {
                next: ( [ clientResponse, productsResponse, accountsResponse ] ) => {
                    this.data = clientResponse;
                    this.products = productsResponse.data;
                    this.searchProducts = [ ...this.products ];
                    this.accounts = accountsResponse.data;
                    this.searchAccounts = [ ...this.accounts ];
                },
                complete: () => {
                    this.formActions();
                    this.isLoading = false;
                },
                error: ( error ) => {
                    // TODO: Reportar al servicio de manejo de errores del servidor
                    throw new Error( 'Method not implemented.' );
                }
            } );
        } );
    }

    formActions () {
        if ( !this.data ) return;

        this.form = this._formBuilder.group( {
            product: [ this.getProduct( this.data.product_id ) ],
            account: [ this.getAccount( this.data.account_number ) ],
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
    getProduct ( productId: string ) {
        return this.products.find( product => product.id === productId );
    }


    /**
     * The `filterProducts` function filters products based on the input text matching product names or
     * sub-products.
     * @param {string}  - The `filterProducts` function takes a string input `` and
     * filters the `products` array based on whether the `product_name` or `sub_product` of each
     * product includes the `` string (case-insensitive).
     */
    filterProducts ( $textInput: string ) {
        this.searchProducts = this.products.filter(
            product => [ product.product_name, product.sub_product ].some(
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
    getAccount ( accountNumber: string ) {
        return this.accounts.find( account => account.account_number === accountNumber );
    }


    /**
     * The `filterAccounts` function filters accounts based on a search input by checking if the
     * account name or number includes the input text in a case-insensitive manner.
     * @param {string}  - The `filterAccounts` function takes a string input `` and
     * filters the `accounts` array based on whether the `account_name` or `account_number` includes
     * the `` value (case-insensitive). The filtered accounts are stored in the
     * `searchAccounts` array.
     */
    filterAccounts ( $textInput: string ) {
        this.searchAccounts = this.accounts.filter(
            account => [ account.account_name, account.account_number ].some(
                attribute => attribute?.toLowerCase().includes( $textInput.toLowerCase() )
            )
        );
    }


    onSubmit (): void {
        if ( !this.isAdminUser ) return this._toastrNotificationService.error( {
            title: 'Error',
            message: 'No cuentas con permisos para actualizar el cliente'
        } );

        if ( !this.form.valid ) return this._toastrNotificationService.warning( {
            title: 'Actualización fallida',
            message: 'Por favor, confirma que la información sea valida'
        } );

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información del cliente?` );

        if ( !isConfirmedUpdate ) return this._toastrNotificationService.info( {
            title: 'Actualización Cancelada',
            message: 'Se canceló la actualización del cliente'
        } );

        this._clientsService.updateClient(
            Number( this.id ),
            {
                product_id: ( this.form.get( 'product' )!.value as ProductType ).id,
                account_number: ( this.form.get( 'account' )!.value as AccountType ).account_number
            }
        );

        this._toastrNotificationService.success( {
            title: 'Actualización exitosa',
            message: 'La información del cliente ha sido actualizada correctamente'
        } );

        this.submitted = true;

        return this._location.back();
    }
}
