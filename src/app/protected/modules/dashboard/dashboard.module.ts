import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MaterialDesignModule } from '../../../material-design/material-design.module';


@NgModule( {
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterialDesignModule,
    ]
} )
export class DashboardModule { }
