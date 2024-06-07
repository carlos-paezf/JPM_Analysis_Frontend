import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { leaveActiveFormGuard } from '../../../shared/guards/leave-active-form.guard';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';


const routes: Routes = [
    {
        path: 'list-products',
        component: ListProductsComponent,
        data: { title: 'JPM Lista de Productos' },
        pathMatch: 'full'
    },
    {
        path: 'admin/:id',
        component: AdminProductsComponent,
        canDeactivate: [ leaveActiveFormGuard ],
        pathMatch: 'full',
        data: { title: 'JPM Detalle de Producto' }
    },
    {
        path: '', redirectTo: 'list-products', pathMatch: 'full'
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
export class ProductsRoutingModule { }
