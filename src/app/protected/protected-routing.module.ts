import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import( './modules/dashboard/dashboard.module' ).then( m => m.DashboardModule ),
                data: { breadcrumb: 'Inicio' }
            },
            {
                path: 'file-upload',
                loadChildren: () => import( './modules/files/files.module' ).then( m => m.FilesModule ),
                data: { breadcrumb: 'Cargar reporte de usuarios' }
            },
            {
                path: 'accounts',
                loadChildren: () => import( './modules/accounts/accounts.module' ).then( m => m.AccountsModule ),
                data: { breadcrumb: 'Cuentas' }
            },
            {
                path: 'products-accounts',
                loadChildren: () => import( './modules/products-accounts/products-accounts.module' ).then( m => m.ProductsAccountsModule ),
                data: { breadcrumb: 'Productos - Cuentas' }
            },
            {
                path: 'company-users',
                loadChildren: () => import( './modules/company-users/company-users.module' ).then( m => m.CompanyUsersModule ),
                data: { breadcrumb: 'Usuarios de la compañía' }
            },
            {
                path: 'products',
                loadChildren: () => import( './modules/products/products.module' ).then( m => m.ProductsModule ),
                data: { breadcrumb: 'Productos' }
            },
            {
                path: 'profiles',
                loadChildren: () => import( './modules/profiles/profiles.module' ).then( m => m.ProfilesModule ),
                data: { breadcrumb: 'Perfiles' }
            },
            {
                path: 'users-entitlements',
                loadChildren: () => import( './modules/user-entitlements/user-entitlements.module' ).then( m => m.UserEntitlementsModule ),
                data: { breadcrumb: 'Títulos de usuarios' }
            },
            {
                path: 'admin-app',
                loadChildren: () => import( './modules/admin-app/admin-app.module' ).then( m => m.AdminAppModule ),
                data: { breadcrumb: 'Administración de la aplicación' }
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
