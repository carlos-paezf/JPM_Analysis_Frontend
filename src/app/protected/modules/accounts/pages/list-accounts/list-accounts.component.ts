import { Component, OnInit } from '@angular/core';

import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { AccountType, ColumnTableType } from '../../../../../shared/types';
import { AccountsService } from '../../services/accounts.service';
import { AppUtilsMessagesService } from 'src/app/shared/services/app-utils-messages.service';


@Component( {
    selector: 'app-list-accounts',
    templateUrl: './list-accounts.component.html',
    styleUrls: [ './list-accounts.component.scss' ]
} )
export class ListAccountsComponent extends InfoTableBaseComponent<AccountType> implements OnInit {
    public override displayedColumns: string[] = [
        'accountNumber',
        'accountName',
        'accountType',
        'bankCurrency',
        'updatedAt',
        'deletedAt',
    ];

    public override columns: ColumnTableType<AccountType>[] = [
        { columnDef: 'accountNumber', header: 'Número de cuenta', cell: ( row ) => row.accountNumber },
        { columnDef: 'accountName', header: 'Nombre de cuenta', cell: ( row ) => row.accountName },
        { columnDef: 'accountType', header: 'Tipo de cuenta', cell: ( row ) => row.accountType },
        { columnDef: 'bankCurrency', header: 'Bank Currency', cell: ( row ) => row.bankCurrency },
        { columnDef: 'updatedAt', header: 'Última Actualización', cell: ( row ) => row.updatedAt },
        { columnDef: 'deletedAt', header: 'Fecha de Desactivación', cell: ( row ) => row.deletedAt },
    ];

    public deleteAccount!: Function;
    public reactivateAccount!: Function;

    constructor (
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
        private _accountsService: AccountsService
    ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this.loadData();
        this.defineSoftDeleteFunctions();
    }


    /**
     * The function `loadData` retrieves data from an API using an accounts service in TypeScript and
     * updates the component's data and loading state accordingly.
     */
    loadData (): void {
        this._accountsService.getAll()
            .subscribe(
                {
                    next: ( response ) => {
                        this.data = response.data;
                        this.isEmptyTable = response.totalResults <= 0;
                        this.isLoadingResults = false;
                    },
                    error: ( error ) => {
                        this.isLoadingResults = false;
                        this._appUtilsMessagesService.showUpdateErrorMessage( error );
                    },
                }
            );
    }


    /**
     * The `defineSoftDeleteFunctions` function defines methods to delete and reactivate accounts with
     * error handling and data reloading.
     */
    defineSoftDeleteFunctions (): void {
        this.deleteAccount = ( id: string ) => this._accountsService.deactivate( id ).subscribe(
            {
                next: ( e ) => {
                    this.loadData();
                    this._accountsService.notifyUpdate();
                },
                error: ( error ) => {
                    console.error( 'Error deleting account:', error );
                }
            }
        );
        this.reactivateAccount = ( id: string ) => this._accountsService.reactivate( id ).subscribe(
            {
                next: ( e ) => {
                    this.loadData();
                    this._accountsService.notifyUpdate();
                },
                error: ( error ) => {
                    console.error( 'Error deleting account:', error );
                }
            }
        );
    }

}
