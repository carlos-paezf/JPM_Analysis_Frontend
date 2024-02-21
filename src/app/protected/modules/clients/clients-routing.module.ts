import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { ListClientsComponent } from './pages/list-clients/list-clients.component';
import { AdminClientsComponent } from './pages/admin-clients/admin-clients.component';

const routes: Routes = [
    {
        path: 'list-clients',
        component: ListClientsComponent,
        data: { title: 'JPM Lista de Cuentas' },
        pathMatch: 'full'
    },
    {
        path: 'admin/:id',
        component: AdminClientsComponent,
        pathMatch: 'full',
        data: { title: 'JPM Detalle de Cuenta' }
    },
    {
        path: '', redirectTo: 'list-clients', pathMatch: 'full'
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
export class ClientsRoutingModule { }
