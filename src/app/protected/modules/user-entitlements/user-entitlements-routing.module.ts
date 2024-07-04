import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { leaveActiveFormGuard } from '../../../shared/guards/leave-active-form.guard';
import { AdminUserEntitlementsComponent } from './pages/admin-user-entitlements/admin-user-entitlements.component';
import { ListUserEntitlementsComponent } from './pages/list-user-entitlements/list-user-entitlements.component';


const routes: Routes = [
    {
        path: 'list-users-entitlements',
        component: ListUserEntitlementsComponent,
        data: { title: 'Lista de Autorizaciones', breadcrumb: 'Lista de autorizaciones' },
        pathMatch: 'full'
    },
    {
        path: 'admin/:id',
        component: AdminUserEntitlementsComponent,
        canDeactivate: [ leaveActiveFormGuard ],
        pathMatch: 'full',
        data: { title: 'Detalle de Autorización', breadcrumb: 'Detalle de autorización' }
    },
    {
        path: '', redirectTo: 'list-users-entitlements', pathMatch: 'full'
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
export class UserEntitlementsRoutingModule { }
