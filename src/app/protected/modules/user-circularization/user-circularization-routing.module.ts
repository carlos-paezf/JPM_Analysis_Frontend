import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { GenerateUserCircularizationComponent } from './pages/generate-user-circularization/generate-user-circularization.component';
import { ListDepartmentsComponent } from './pages/list-departments/list-departments.component';
import { UserAssignmentByDepartmentComponent } from './pages/user-assignment-by-department/user-assignment-by-department.component';
import { AdminDepartmentComponent } from './pages/admin-department/admin-department.component';
import { CircularizationEmailComponent } from './pages/circularization-email/circularization-email.component';


const routes: Routes = [
    {
        path: 'generate-user-circularization',
        component: GenerateUserCircularizationComponent,
        data: { title: 'Circularización de Usuarios', breadcrumb: 'Circularización de Usuarios' },
        pathMatch: 'full'
    },
    {
        path: 'user-assignment-by-department',
        component: UserAssignmentByDepartmentComponent,
        data: { title: 'Asignación de Usuarios por Departamento', breadcrumb: 'Asignación de Usuarios por Departamento' },
        pathMatch: 'full'
    },
    {
        path: 'departments',
        component: ListDepartmentsComponent,
        data: { title: 'Listado de Departamentos', breadcrumb: 'Listado de Departamentos' },
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: AdminDepartmentComponent,
        pathMatch: 'full',
        data: { title: 'Administración de Departamentos', breadcrumb: 'Administración de Departamentos' }
    },
    {
        path: 'admin/:initials',
        component: AdminDepartmentComponent,
        pathMatch: 'full',
        data: { title: 'Administración de Departamentos', breadcrumb: 'Administración de Departamentos' }
    },
    {
        path: 'circularization-email',
        component: CircularizationEmailComponent,
        data: { title: 'Email de Circularización', breadcrumb: 'Email de Circularización' },
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
