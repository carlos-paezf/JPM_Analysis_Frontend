import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { GenerateUserCircularizationComponent } from './pages/generate-user-circularization/generate-user-circularization.component';
import { ListCompanyUsersDepartmentsComponent } from './pages/list-company-users-departments/list-company-users-departments.component';
import { UserAssignmentByDepartmentComponent } from './pages/user-assignment-by-department/user-assignment-by-department.component';


const routes: Routes = [
    {
        path: 'generate-user-circularization',
        component: GenerateUserCircularizationComponent,
        data: { title: 'Circularización de Usuarios', breadcrumb: 'Circularización de Usuarios' },
        pathMatch: 'full'
    },
    {
        path: 'list-company-users-departments',
        component: ListCompanyUsersDepartmentsComponent,
        data: { title: 'Relación de Usuarios - Departamentos', breadcrumb: 'Relación de Usuarios - Departamentos' },
        pathMatch: 'full'
    },
    {
        path: 'user-assignment-by-department',
        component: UserAssignmentByDepartmentComponent,
        data: { title: 'Asignación de Usuarios por Departamento', breadcrumb: 'Asignación de Usuarios por Departamento' },
        pathMatch: 'full'
    },
    {
        path: '', redirectTo: 'generate-user-circularization', pathMatch: 'full'
    },
    {
        path: '**', component: NotFoundComponent,
        data: { title: '404 - No encontrado' }
    }
];


@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class UserCircularizationRoutingModule { }
