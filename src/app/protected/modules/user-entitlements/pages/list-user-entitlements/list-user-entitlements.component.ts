import { Component } from '@angular/core';

import { ListEntityBase } from '../../../../../shared/classes/list-entity-base.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ColumnTableType, UserEntitlementEagerType, UserEntitlementType } from '../../../../../shared/types';
import { UserEntitlementsService } from '../../services/user-entitlements.service';


@Component( {
    selector: 'app-list-user-entitlements',
    templateUrl: './list-user-entitlements.component.html',
    styleUrls: [ './list-user-entitlements.component.scss' ]
} )
export class ListUserEntitlementsComponent extends ListEntityBase<UserEntitlementType, UserEntitlementEagerType> {
    public override displayedColumns: string[] = [
        'accessId',
        'productId',
        'functionType',
        'functionId',
        'accountNumber',
        'updatedAt',
        'deletedAt',
    ];

    public override columns: ColumnTableType<UserEntitlementType>[] = [
        { columnDef: 'accessId', header: 'Access ID', cell: ( row ) => row.accessId },
        { columnDef: 'productId', header: 'Product ID', cell: ( row ) => row.productId },
        { columnDef: 'functionType', header: 'Function Type', cell: ( row ) => row.functionType },
        { columnDef: 'functionId', header: 'Function ID', cell: ( row ) => row.functionId },
        { columnDef: 'accountNumber', header: 'Account Number', cell: ( row ) => row.accountNumber },
        { columnDef: 'updatedAt', header: 'Última Actualización', cell: ( row ) => row.updatedAt },
        { columnDef: 'deletedAt', header: 'Fecha de Desactivación', cell: ( row ) => row.deletedAt },
    ];

    constructor (
        _appUtilsMessagesService: AppUtilsMessagesService,
        _userEntitlementsService: UserEntitlementsService
    ) {
        super( _appUtilsMessagesService, _userEntitlementsService );
    }
}
