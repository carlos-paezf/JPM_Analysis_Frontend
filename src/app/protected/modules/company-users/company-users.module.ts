import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { CompanyUsersRoutingModule } from './company-users-routing.module';
import { AdminCompanyUserComponent } from './pages/admin-company-user/admin-company-user.component';
import { ListCompanyUserComponent } from './pages/list-company-user/list-company-user.component';


@NgModule( {
    declarations: [
        AdminCompanyUserComponent,
        ListCompanyUserComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialDesignModule,
        CompanyUsersRoutingModule
    ]
} )
export class CompanyUsersModule { }
