import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { leaveActiveFormGuard } from '../../../shared/guards/leave-active-form.guard';
import { AdminCompanyUserComponent } from './pages/admin-company-user/admin-company-user.component';
import { ListCompanyUserComponent } from './pages/list-company-user/list-company-user.component';


const routes: Routes = [
    {
        path: 'list-company-users',
        component: ListCompanyUserComponent,
        data: { title: 'JPM Lista de Usuarios' },
        pathMatch: 'full'
    },
    {
        path: 'admin/:accessId',
        component: AdminCompanyUserComponent,
        canDeactivate: [ leaveActiveFormGuard ],
        pathMatch: 'full',
        data: { title: 'JPM Detalle de Usuario' }
    },
    {
        path: '', redirectTo: 'list-company-users', pathMatch: 'full'
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
