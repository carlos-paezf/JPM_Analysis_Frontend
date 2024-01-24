import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { AdminUserEntitlementsComponent } from './pages/admin-user-entitlements/admin-user-entitlements.component';
import { ListUserEntitlementsComponent } from './pages/list-user-entitlements/list-user-entitlements.component';
import { UserEntitlementsRoutingModule } from './user-entitlements-routing.module';


@NgModule( {
    declarations: [
        AdminUserEntitlementsComponent,
        ListUserEntitlementsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialDesignModule,
        UserEntitlementsRoutingModule
    ]
} )
export class UserEntitlementsModule { }
