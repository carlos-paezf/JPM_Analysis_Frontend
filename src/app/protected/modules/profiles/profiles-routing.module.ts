import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { AdminProfilesComponent } from './pages/admin-profiles/admin-profiles.component';
import { ListProfilesComponent } from './pages/list-profiles/list-profiles.component';
import { UsersByProfilesComponent } from './pages/users-by-profiles/users-by-profiles.component';


const routes: Routes = [
    {
        path: 'list-profiles',
        component: ListProfilesComponent,
        data: { title: 'JPM Lista de Perfiles' },
        pathMatch: 'full'
    },
    {
        path: 'admin/:id',
        component: AdminProfilesComponent,
        pathMatch: 'full',
        data: { title: 'JPM Detalle de Usuario' }
    },
    {
        path: 'users-by-profiles',
        component: UsersByProfilesComponent,
        pathMatch: 'full',
        data: { title: 'Usuarios por Perfiles' }
    },
    {
        path: '', redirectTo: 'list-profiles', pathMatch: 'full'
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
export class ProfilesRoutingModule { }
