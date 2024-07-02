import { Component } from '@angular/core';

import { ListEntityBase } from '../../../../../shared/classes/list-entity-base.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ColumnTableType, ProductEagerType, ProductType } from '../../../../../shared/types';
import { ProductsService } from '../../services/products.service';


/**
 * @author cpaezfer
 */
@Component( {
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: [ './list-products.component.scss' ]
} )
export class ListProductsComponent extends ListEntityBase<ProductType, ProductEagerType> {
    public override displayedColumns: string[] = [
        'productName',
        'subProduct',
        'updatedAt',
        'deletedAt',
    ];

    public override columns: ColumnTableType<ProductType>[] = [
        { columnDef: 'productName', header: 'Nombre del producto', cell: ( row ) => row.productName },
        { columnDef: 'subProduct', header: 'Sub-Producto', cell: ( row ) => row.subProduct },
        { columnDef: 'updatedAt', header: 'Última Actualización', cell: ( row ) => new Date( row.updatedAt ).toLocaleString() },
        { columnDef: 'deletedAt', header: 'Fecha de Desactivación', cell: ( row ) => row.deletedAt && new Date( row.deletedAt ).toLocaleString() },
    ];

    constructor (
        _appUtilsMessagesService: AppUtilsMessagesService,
        _productsService: ProductsService
    ) {
        super( _appUtilsMessagesService, _productsService );
    }
}
