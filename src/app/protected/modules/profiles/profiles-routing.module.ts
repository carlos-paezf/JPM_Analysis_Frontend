import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { leaveActiveFormGuard } from '../../../shared/guards/leave-active-form.guard';
import { AdminProfilesComponent } from './pages/admin-profiles/admin-profiles.component';
import { FunctionsComponent } from './pages/functions/functions.component';
import { ListProfilesComponent } from './pages/list-profiles/list-profiles.component';
import { UsersByProfilesComponent } from './pages/users-by-profiles/users-by-profiles.component';


const routes: Routes = [
    {
        path: 'list-profiles',
        component: ListProfilesComponent,
        data: { title: 'Lista de Perfiles', breadcrumb: 'Lista de perfiles' },
        pathMatch: 'full'
    },
    {
        path: 'admin/:id',
        component: AdminProfilesComponent,
        canDeactivate: [ leaveActiveFormGuard ],
        pathMatch: 'full',
        data: { title: 'Detalle de Usuario', breadcrumb: 'Detalle de usuario' }
    },
    {
        path: 'users-by-profiles',
        component: UsersByProfilesComponent,
        pathMatch: 'full',
        data: { title: 'Usuarios por Perfiles', breadcrumb: 'Usuarios por perfil' }
    },
    {
        path: 'functions',
        component: FunctionsComponent,
        pathMatch: 'full',
        data: { title: 'Funciones', breadcrumb: 'Funciones' }
    },
    {
        path: 'functions/:id',
        canDeactivate: [ leaveActiveFormGuard ],
        component: FunctionsComponent,
        pathMatch: 'full',
        data: { title: 'Funciones', breadcrumb: 'Detalles de función' }
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
