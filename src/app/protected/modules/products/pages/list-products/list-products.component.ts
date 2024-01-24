import { Component, OnInit } from '@angular/core';
import { ColumnTableType, ProductType } from '../../../../../shared/types';
import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { ProductsService } from '../../services/products.service';

@Component( {
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: [ './list-products.component.scss' ]
} )
export class ListProductsComponent extends InfoTableBaseComponent<ProductType> implements OnInit {
    public override displayedColumns: string[] = [
        'product_name',
        'sub_product',
        'updated_at',
        'deleted_at',
    ];

    public override columns: ColumnTableType<ProductType>[] = [
        { columnDef: 'product_name', header: 'Nombre del producto', cell: ( row ) => row.product_name },
        { columnDef: 'sub_product', header: 'Sub-Producto', cell: ( row ) => row.sub_product },
        { columnDef: 'updated_at', header: 'Última Actualización', cell: ( row ) => row.updated_at },
        { columnDef: 'deleted_at', header: 'Fecha de Desactivación', cell: ( row ) => row.deleted_at },
    ];

    public deleteProduct!: Function;
    public reactivateProduct!: Function;

    constructor ( private _productsService: ProductsService ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this._productsService.getProducts()
            .subscribe( ( response ) => {
                this.data = response.data;
                this.isEmptyTable = ( response.data.length <= 0 );
                this.isLoadingResults = false;
            } );
        this.deleteProduct = this._productsService.deleteProduct;
        this.reactivateProduct = this._productsService.reactivateProduct;
    }
}
