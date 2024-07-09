import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { AdminAppRoutingModule } from './admin-app-routing.module';
import { ConsultReportMetadataComponent } from './pages/consult-report-metadata/consult-report-metadata.component';
import { ReportsHistoryComponent } from './pages/reports-history/reports-history.component';


@NgModule( {
    declarations: [
        ReportsHistoryComponent,
        ConsultReportMetadataComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialDesignModule,
        AdminAppRoutingModule
    ]
} )
export class AdminAppModule { }
