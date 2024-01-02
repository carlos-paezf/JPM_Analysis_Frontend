import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { leaveActiveFormGuard } from '../../../shared/guards/leave-active-form.guard';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
    {
        path: '',
        component: FormComponent,
        canDeactivate: [ leaveActiveFormGuard ],
        pathMatch: 'full',
        data: { title: 'Carga de reportes' }
    }
];


@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class FilesRoutingModule { }
