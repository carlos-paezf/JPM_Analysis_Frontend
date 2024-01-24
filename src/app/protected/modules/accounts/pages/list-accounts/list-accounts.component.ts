import { Component, OnInit } from '@angular/core';

import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { AccountType, ColumnTableType } from '../../../../../shared/types';
import { AccountsService } from '../../services/accounts.service';


@Component( {
    selector: 'app-list-accounts',
    templateUrl: './list-accounts.component.html',
    styleUrls: [ './list-accounts.component.scss' ]
} )
export class ListAccountsComponent extends InfoTableBaseComponent<AccountType> implements OnInit {
    public override displayedColumns: string[] = [
        'account_number',
        'account_name',
        'account_type',
        'bank_currency',
        'updated_at',
        'deleted_at',
    ];

    public override columns: ColumnTableType<AccountType>[] = [
        { columnDef: 'account_number', header: 'Número de cuenta', cell: ( row ) => row.account_number },
        { columnDef: 'account_name', header: 'Nombre de cuenta', cell: ( row ) => row.account_name },
        { columnDef: 'account_type', header: 'Tipo de cuenta', cell: ( row ) => row.account_type },
        { columnDef: 'bank_currency', header: 'Bank Currency', cell: ( row ) => row.bank_currency },
        { columnDef: 'updated_at', header: 'Última Actualización', cell: ( row ) => row.updated_at },
        { columnDef: 'deleted_at', header: 'Fecha de Desactivación', cell: ( row ) => row.deleted_at },
    ];

    public deleteAccount!: Function;
    public reactivateAccount!: Function;

    constructor ( private _accountsService: AccountsService ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this._accountsService.getAccounts()
            .subscribe( ( response ) => {
                this.data = response.data;
                this.isEmptyTable = ( response.data.length <= 0 );
                this.isLoadingResults = false;
            } );
        this.deleteAccount = this._accountsService.deleteAccount;
        this.reactivateAccount = this._accountsService.reactivateAccount;
    }
}
