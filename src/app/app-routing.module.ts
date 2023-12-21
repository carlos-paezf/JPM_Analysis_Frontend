import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { isLoggedGuard } from './shared/guards/is-logged.guard';
import { noActiveSessionGuard } from './shared/guards/no-active-session.guard';


const routes: Routes = [
    {
        path: 'auth',
        canActivateChild: [ noActiveSessionGuard ],
        canMatch: [ noActiveSessionGuard ],
        loadChildren: () => import( './auth/auth.module' ).then( m => m.AuthModule )
    },
    {
        path: 'app',
        canActivateChild: [ isLoggedGuard ],
        canMatch: [ isLoggedGuard ],
        loadChildren: () => import( './protected/protected.module' ).then( m => m.ProtectedModule )
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'app'
    },
    {
        path: '**', component: NotFoundComponent, data: { title: '404 - No encontrado' }
    }
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
} )
export class AppRoutingModule { }
