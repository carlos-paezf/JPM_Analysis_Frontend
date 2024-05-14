import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import { ReportsHistoryComponent } from './pages/reports-history/reports-history.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule( {
    declarations: [
        ReportsHistoryComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AdminAppRoutingModule
    ]
} )
export class AdminAppModule { }
