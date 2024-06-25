import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { leaveActiveFormGuard } from '../../../shared/guards/leave-active-form.guard';
import { CompareResultsComponent } from './pages/compare-results/compare-results.component';
import { FormComponent } from './pages/form/form.component';
import { PostResultsComponent } from './pages/post-results/post-results.component';


const routes: Routes = [
    {
        path: '',
        component: FormComponent,
        canDeactivate: [ leaveActiveFormGuard ],
        pathMatch: 'full',
        data: { title: 'Carga de reportes', breadcrumb: 'Carga de reportes' }
    },
    {
        path: 'post-result',
        component: PostResultsComponent,
        pathMatch: 'full',
        data: { title: 'Resultado última carga', breadcrumb: 'Resultado última carga' }
    },
    {
        path: 'compare-result',
        component: CompareResultsComponent,
        pathMatch: 'full',
        data: { title: 'Resultado de comparación', breadcrumb: 'Resultado de comparación' }
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
export class FilesRoutingModule { }
