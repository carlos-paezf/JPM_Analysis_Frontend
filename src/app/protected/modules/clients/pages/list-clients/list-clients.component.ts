import { Component, OnInit } from '@angular/core';
import { ClientType, ColumnTableType } from '../../../../../shared/types';
import { ClientsService } from '../../services/clients.service';
import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';

@Component( {
    selector: 'app-list-clients',
    templateUrl: './list-clients.component.html',
    styleUrls: [ './list-clients.component.scss' ]
} )
export class ListClientsComponent extends InfoTableBaseComponent<ClientType> implements OnInit {
    public override displayedColumns: string[] = [
        'account_number',
        'product_id',
        'updated_at',
        'deleted_at',
    ];

    public override columns: ColumnTableType<ClientType>[] = [
        { columnDef: 'account_number', header: 'Account Number', cell: ( row ) => row.account_number },
        { columnDef: 'product_id', header: 'Product Id', cell: ( row ) => row.product_id },
        { columnDef: 'updated_at', header: 'Última Actualización', cell: ( row ) => row.updated_at },
        { columnDef: 'deleted_at', header: 'Fecha de Desactivación', cell: ( row ) => row.deleted_at },
    ];

    public deleteAccount!: Function;
    public reactivateAccount!: Function;

    constructor ( private _clientsService: ClientsService ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this._clientsService.getClients()
            .subscribe( ( response ) => {
                this.data = response.data;
                this.isEmptyTable = ( response.data.length <= 0 );
                this.isLoadingResults = false;
            } );
        // this.deleteAccount = this._clientsService.deleteAccount;
        // this.reactivateAccount = this._clientsService.reactivateAccount;
    };
}