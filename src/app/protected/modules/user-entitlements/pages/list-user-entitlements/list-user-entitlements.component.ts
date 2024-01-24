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
        'access_id',
        'product_id',
        'function_type',
        'function_id',
        'account_number',
        'updated_at',
        'deleted_at',
    ];

    public override columns: ColumnTableType<UserEntitlementType>[] = [
        { columnDef: 'access_id', header: 'Access ID', cell: ( row ) => row.access_id },
        { columnDef: 'product_id', header: 'Product ID', cell: ( row ) => row.product_id },
        { columnDef: 'function_type', header: 'Function Type', cell: ( row ) => row.function_type },
        { columnDef: 'function_id', header: 'Function ID', cell: ( row ) => row.function_id },
        { columnDef: 'account_number', header: 'Account Number', cell: ( row ) => row.account_number },
        { columnDef: 'updated_at', header: 'Última Actualización', cell: ( row ) => row.updated_at },
        { columnDef: 'deleted_at', header: 'Fecha de Desactivación', cell: ( row ) => row.deleted_at },
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
