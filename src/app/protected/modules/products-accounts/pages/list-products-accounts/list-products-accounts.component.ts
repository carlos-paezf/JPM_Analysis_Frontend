import { Component, OnInit } from '@angular/core';
import { ProductAccountEagerType, ProductAccountType, ColumnTableType } from '../../../../../shared/types';
import { ProductsAccountsService } from '../../services/products-accounts.service';
import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';

@Component( {
    selector: 'app-list-products-accounts',
    templateUrl: './list-products-accounts.component.html',
    styleUrls: [ './list-products-accounts.component.scss' ]
} )
export class ListProductsAccountsComponent extends InfoTableBaseComponent<ProductAccountEagerType> implements OnInit {
    public override displayedColumns: string[] = [
        'productId',
        'accountNumber',
        'updatedAt',
        'deletedAt',
    ];

    public override columns: ColumnTableType<ProductAccountEagerType>[] = [
        { columnDef: 'productId', header: 'Product Id', cell: ( row ) => row.product.subProduct ?? row.product.productName },
        { columnDef: 'accountNumber', header: 'Account Number', cell: ( row ) => row.accountNumber ? `${ row.account.accountNumber } - ${ row.account.accountName }` : '' },
        { columnDef: 'updatedAt', header: 'Última Actualización', cell: ( row ) => row.updatedAt },
        { columnDef: 'deletedAt', header: 'Fecha de Desactivación', cell: ( row ) => row.deletedAt },
    ];

    public deleteClient!: Function;
    public reactivateClient!: Function;

    constructor ( private _clientsService: ProductsAccountsService ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this._clientsService.getProductsAccountsStrategy()
            .subscribe( ( response ) => {
                this.data = response.data;
                this.isEmptyTable = ( response.data.length <= 0 );
                this.isLoadingResults = false;
            } );
        this.deleteClient = this._clientsService.deactivateProductAccount;
        this.reactivateClient = this._clientsService.reactivateProductAccount;
    };
}