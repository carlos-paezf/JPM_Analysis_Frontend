import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { AdminCompanyUserComponent } from './pages/admin-company-user/admin-company-user.component';
import { ListCompanyUserComponent } from './pages/list-company-user/list-company-user.component';


const routes: Routes = [
    {
        path: '',
        component: ListCompanyUserComponent,
        data: { title: 'JPM Lista de Usuarios' },
        pathMatch: 'full'
    },
    {
        path: ':access_id',
        component: AdminCompanyUserComponent,
        pathMatch: 'full',
        data: { title: 'JPM Detalle de Usuario' }
    },
    {
        path: '', redirectTo: '', pathMatch: 'full'
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
export class CompanyUsersRoutingModule { }
