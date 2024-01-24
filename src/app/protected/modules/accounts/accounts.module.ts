import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AdminAccountsComponent } from './pages/admin-accounts/admin-accounts.component';
import { ListAccountsComponent } from './pages/list-accounts/list-accounts.component';


@NgModule( {
    declarations: [
        AdminAccountsComponent,
        ListAccountsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialDesignModule,
        AccountsRoutingModule
    ]
} )
export class AccountsModule { }
