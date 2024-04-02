import { Component, OnInit } from '@angular/core';
import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { ColumnTableType, UserEntitlementType } from '../../../../../shared/types';
import { UserEntitlementsService } from '../../services/user-entitlements.service';

@Component( {
    selector: 'app-list-user-entitlements',
    templateUrl: './list-user-entitlements.component.html',
    styleUrls: [ './list-user-entitlements.component.scss' ]
} )
export class ListUserEntitlementsComponent extends InfoTableBaseComponent<UserEntitlementType> implements OnInit {
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

    public deleteUserEntitlement!: Function;
    public reactivateUserEntitlement!: Function;

    constructor ( private _userEntitlementsService: UserEntitlementsService ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this._userEntitlementsService.getUserEntitlements()
            .subscribe( ( response ) => {
                this.data = response.data;
                this.isEmptyTable = ( response.data.length <= 0 );
                this.isLoadingResults = false;
            } );
        this.deleteUserEntitlement = this._userEntitlementsService.deleteUserEntitlement;
        this.reactivateUserEntitlement = this._userEntitlementsService.reactivateUserEntitlement;
    }
}
