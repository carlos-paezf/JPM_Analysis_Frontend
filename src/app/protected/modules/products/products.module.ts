import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule( {
    declarations: [
        ListProductsComponent,
        AdminProductsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialDesignModule,
        ProductsRoutingModule
    ]
} )
export class ProductsModule { }
