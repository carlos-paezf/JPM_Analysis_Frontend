import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { AdminDepartmentComponent } from './pages/admin-department/admin-department.component';
import { GenerateUserCircularizationComponent } from './pages/generate-user-circularization/generate-user-circularization.component';
import { ListDepartmentsComponent } from './pages/list-departments/list-departments.component';
import { UserAssignmentByDepartmentComponent } from './pages/user-assignment-by-department/user-assignment-by-department.component';
import { UserCircularizationRoutingModule } from './user-circularization-routing.module';


@NgModule( {
    declarations: [
        ListDepartmentsComponent,
        GenerateUserCircularizationComponent,
        UserAssignmentByDepartmentComponent,
        AdminDepartmentComponent
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
