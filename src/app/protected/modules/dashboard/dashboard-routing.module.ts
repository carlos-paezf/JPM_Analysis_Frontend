import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full',
        data: { title: 'Inicio' }
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class DashboardRoutingModule { }
