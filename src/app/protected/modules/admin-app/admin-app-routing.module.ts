import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsHistoryComponent } from './pages/reports-history/reports-history.component';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';


const routes: Routes = [
    {
        path: 'reports-history',
        component: ReportsHistoryComponent,
        data: { title: 'Historial de Reportes' },
        pathMatch: 'full'
    },
    {
        path: '', redirectTo: 'reports-history', pathMatch: 'full'
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
export class AdminAppRoutingModule { }
