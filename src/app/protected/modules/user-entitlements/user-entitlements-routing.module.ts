import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserEntitlementsComponent } from './pages/list-user-entitlements/list-user-entitlements.component';
import { AdminUserEntitlementsComponent } from './pages/admin-user-entitlements/admin-user-entitlements.component';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';


const routes: Routes = [
    {
        path: 'list-users-entitlements',
        component: ListUserEntitlementsComponent,
        data: { title: 'JPM Lista de Títulos' },
        pathMatch: 'full'
    },
    {
        path: 'admin/:id',
        component: AdminUserEntitlementsComponent,
        pathMatch: 'full',
        data: { title: 'JPM Detalle de Título' }
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
