import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { leaveActiveFormGuard } from '../../../shared/guards/leave-active-form.guard';
import { AdminAccountsComponent } from './pages/admin-accounts/admin-accounts.component';
import { ListAccountsComponent } from './pages/list-accounts/list-accounts.component';


const routes: Routes = [
    {
        path: 'list-accounts',
        component: ListAccountsComponent,
        data: { title: 'JPM Lista de Cuentas' },
        pathMatch: 'full'
    },
    {
        path: 'admin/:id',
        component: AdminAccountsComponent,
        canDeactivate: [ leaveActiveFormGuard ],
        pathMatch: 'full',
        data: { title: 'JPM Detalle de Cuenta' }
    },
    {
        path: '', redirectTo: 'list-accounts', pathMatch: 'full'
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
export class AccountsRoutingModule { }
