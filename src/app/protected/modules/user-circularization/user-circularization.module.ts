import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { GenerateUserCircularizationComponent } from './pages/generate-user-circularization/generate-user-circularization.component';
import { ListCompanyUsersDepartmentsComponent } from './pages/list-company-users-departments/list-company-users-departments.component';
import { UserCircularizationRoutingModule } from './user-circularization-routing.module';


@NgModule( {
    declarations: [
        ListCompanyUsersDepartmentsComponent,
        GenerateUserCircularizationComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialDesignModule,
        UserCircularizationRoutingModule
    ]
} )
export class UserCircularizationModule { }
