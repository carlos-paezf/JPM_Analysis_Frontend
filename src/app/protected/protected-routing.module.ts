import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: '**', component: NotFoundComponent, data: { title: '404 - No encontrado' }
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class ProtectedRoutingModule { }
