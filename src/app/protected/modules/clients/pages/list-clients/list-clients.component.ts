import { Component, OnInit } from '@angular/core';
import { ClientEagerLoadingType, ClientType, ColumnTableType } from '../../../../../shared/types';
import { ClientsService } from '../../services/clients.service';
import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';

@Component( {
    selector: 'app-list-clients',
    templateUrl: './list-clients.component.html',
    styleUrls: [ './list-clients.component.scss' ]
} )
export class ListClientsComponent extends InfoTableBaseComponent<ClientEagerLoadingType> implements OnInit {
    public override displayedColumns: string[] = [
        'product_id',
        'account_number',
        'updated_at',
        'deleted_at',
    ];

    public override columns: ColumnTableType<ClientEagerLoadingType>[] = [
        { columnDef: 'product_id', header: 'Product Id', cell: ( row ) => row.product.sub_product ?? row.product.product_name },
        { columnDef: 'account_number', header: 'Account Number', cell: ( row ) => row.account_number ? `${ row.account.account_number } - ${ row.account.account_name }` : '' },
        { columnDef: 'updated_at', header: 'Última Actualización', cell: ( row ) => row.updated_at },
        { columnDef: 'deleted_at', header: 'Fecha de Desactivación', cell: ( row ) => row.deleted_at },
    ];

    public deleteClient!: Function;
    public reactivateClient!: Function;

    constructor ( private _clientsService: ClientsService ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this._clientsService.getClientsEagerStrategy()
            .subscribe( ( response ) => {
                this.data = response.data;
                this.isEmptyTable = ( response.data.length <= 0 );
                this.isLoadingResults = false;
            } );
        this.deleteClient = this._clientsService.deleteClient;
        this.reactivateClient = this._clientsService.reactivateClient;
    };
}