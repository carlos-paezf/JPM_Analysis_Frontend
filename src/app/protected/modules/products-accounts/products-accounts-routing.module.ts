import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { leaveActiveFormGuard } from '../../../shared/guards/leave-active-form.guard';
import { AdminProductsAccountsComponent } from './pages/admin-products-accounts/admin-products-accounts.component';
import { ListProductsAccountsComponent } from './pages/list-products-accounts/list-products-accounts.component';


const routes: Routes = [
    {
        path: 'list-products-accounts',
        component: ListProductsAccountsComponent,
        data: { title: 'JPM Lista de Cuentas' },
        pathMatch: 'full'
    },
    {
        path: 'admin/:id',
        component: AdminProductsAccountsComponent,
        canDeactivate: [ leaveActiveFormGuard ],
        pathMatch: 'full',
        data: { title: 'JPM Detalle de Cuenta' }
    },
    {
        path: '', redirectTo: 'list-products-accounts', pathMatch: 'full'
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
export class ProductsAccountsRoutingModule { }
