import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { leaveActiveFormGuard } from '../shared/guards/leave-active-form.guard';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
        canDeactivate: [ leaveActiveFormGuard ],
        data: { title: 'Inicio de sesión' }
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: '**', component: NotFoundComponent, data: { title: '404 - No encontrado' }
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class AuthRoutingModule { }
