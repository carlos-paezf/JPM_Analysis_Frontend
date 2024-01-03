import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import( './modules/dashboard/dashboard.module' ).then( m => m.DashboardModule )
            },
            {
                path: 'file-upload',
                loadChildren: () => import( './modules/files/files.module' ).then( m => m.FilesModule )
            },
            {
                path: 'accounts',
                loadChildren: () => import( './modules/accounts/accounts.module' ).then( m => m.AccountsModule )
            },
            {
                path: 'actions',
                loadChildren: () => import( './modules/actions/actions.module' ).then( m => m.ActionsModule )
            },
            {
                path: 'clients',
                loadChildren: () => import( './modules/clients/clients.module' ).then( m => m.ClientsModule )
            },
            {
                path: 'company-users',
                loadChildren: () => import( './modules/company-users/company-users.module' ).then( m => m.CompanyUsersModule )
            },
            {
                path: 'functions',
                loadChildren: () => import( './modules/functions/functions.module' ).then( m => m.FunctionsModule )
            },
            {
                path: 'products',
                loadChildren: () => import( './modules/products/products.module' ).then( m => m.ProductsModule )
            },
            {
                path: 'profiles',
                loadChildren: () => import( './modules/profiles/profiles.module' ).then( m => m.ProfilesModule )
            },
            {
                path: 'user-entitlements',
                loadChildren: () => import( './modules/user-entitlements/user-entitlements.module' ).then( m => m.UserEntitlementsModule )
            },
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            },
            {
                path: '**', component: NotFoundComponent, data: { title: '404 - No encontrado' }
            }
        ]
    },
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class ProtectedRoutingModule { }
