import { Component } from '@angular/core';

import { ListEntityBase } from '../../../../../shared/classes/list-entity-base.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { AccountEagerType, AccountType, ColumnTableType } from '../../../../../shared/types';
import { AccountsService } from '../../services/accounts.service';


/**
 * @author cpaezfer
 */
@Component( {
    selector: 'app-list-accounts',
    templateUrl: './list-accounts.component.html',
    styleUrls: [ './list-accounts.component.scss' ]
} )
export class ListAccountsComponent extends ListEntityBase<AccountType, AccountEagerType> {
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

    constructor (
        _appUtilsMessagesService: AppUtilsMessagesService,
        _accountsService: AccountsService
    ) {
        super( _appUtilsMessagesService, _accountsService );
    }
}