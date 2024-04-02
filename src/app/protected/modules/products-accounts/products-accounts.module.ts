import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { ProductsAccountsRoutingModule } from './products-accounts-routing.module';
import { ListProductsAccountsComponent } from './pages/list-products-accounts/list-products-accounts.component';
import { AdminProductsAccountsComponent } from './pages/admin-products-accounts/admin-products-accounts.component';


@NgModule( {
    declarations: [
        ListProductsAccountsComponent,
        AdminProductsAccountsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialDesignModule,
        ProductsAccountsRoutingModule
    ]
} )
export class ProductsAccountsModule { }
