import { Component, OnInit } from '@angular/core';

import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ColumnTableType, ProductAccountEagerType } from '../../../../../shared/types';
import { ProductsAccountsService } from '../../services/products-accounts.service';
import { ProductAccountEagerV2Type } from '../../../../../shared/types/jpm-types.type';


@Component( {
    selector: 'app-list-products-accounts',
    templateUrl: './list-products-accounts.component.html',
    styleUrls: [ './list-products-accounts.component.scss' ]
} )
export class ListProductsAccountsComponent extends InfoTableBaseComponent<ProductAccountEagerV2Type> implements OnInit {
    public override displayedColumns: string[] = [
        'productName',
        'subProduct',
        'accountNumber',
        'accountName',
        'updatedAt',
        'deletedAt',
    ];

    public override columns: ColumnTableType<ProductAccountEagerV2Type>[] = [
        { columnDef: 'productName', header: 'Product Name', cell: ( row ) => row.productName ?? '' },
        { columnDef: 'subProduct', header: 'Sub Product', cell: ( row ) => row.subProduct ?? '' },
        { columnDef: 'accountNumber', header: 'Account Number', cell: ( row ) => row.accountNumber ?? '' },
        { columnDef: 'accountName', header: 'Account Name', cell: ( row ) => row.accountName ?? '' },
        { columnDef: 'updatedAt', header: 'Última Actualización', cell: ( row ) => new Date( row.updatedAt ).toLocaleString() },
        { columnDef: 'deletedAt', header: 'Fecha de Desactivación', cell: ( row ) => row.deletedAt && new Date( row.deletedAt ).toLocaleString() },
    ];

    public deactivateItem!: Function;
    public reactivateItem!: Function;

    constructor (
        private _appUtilsMessagesService: AppUtilsMessagesService,
        private _productsAccountsService: ProductsAccountsService
    ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this._loadData();

        this._defineSoftDeleteFunctions();
    };


    /**
     * The _loadData function fetches data from a service and updates the component's properties
     * accordingly.
     */
    private _loadData (): void {
        this._productsAccountsService.getAll().subscribe(
            {
                next: ( response ) => {
                    this.data = response.data;
                    this.isEmptyTable = response.totalResults <= 0;
                    this.isLoadingResults = false;
                },
                error: ( error ) => {
                    this.isLoadingResults = false;
                    this._appUtilsMessagesService.showQueryErrorMessage( error );
                }
            }
        );
    }


    /**
     * The `defineSoftDeleteFunctions` function defines methods to deactivate and reactivate items
     * using a service.
     */
    private _defineSoftDeleteFunctions (): void {
        this.deactivateItem = ( id: string ) => this._productsAccountsService.deactivate( id )
            .subscribe( this._subscriptionObject() );

        this.reactivateItem = ( id: string ) => this._productsAccountsService.reactivate( id )
            .subscribe( this._subscriptionObject() );
    }


    /**
     * The `_subscriptionObject` function returns an object with `next` and `error` methods that
     * perform certain actions when called.
     * @returns An object with two properties: `next` and `error`. The `next` property is a function
     * that calls the `_loadData()` method and then notifies the service of an update. The `error`
     * property is a function that calls the `_appUtilsMessagesService.showUpdateErrorMessage()` method
     * with an error parameter.
     */
    private _subscriptionObject () {
        return {
            next: () => {
                this._loadData();
                this._productsAccountsService.notifyUpdate();
            },
            error: ( error: any ) => {
                this._appUtilsMessagesService.showQueryErrorMessage( error );
            }
        };
    }
}