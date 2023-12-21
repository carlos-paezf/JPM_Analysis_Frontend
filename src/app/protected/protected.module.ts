import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialDesignModule } from '../material-design/material-design.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './pages/main/main.component';
import { ProtectedRoutingModule } from './protected-routing.module';


@NgModule( {
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        ProtectedRoutingModule,
        SharedModule,
        MaterialDesignModule
    ]
} )
export class ProtectedModule { }
