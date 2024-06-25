import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { EntityComparisonTableComponent } from './components/entity-comparison-table/entity-comparison-table.component';
import { EntityTableComponent } from './components/entity-table/entity-table.component';
import { ResultsAccordionComponent } from './components/results-accordion/results-accordion.component';
import { StatisticsTableComponent } from './components/statistics-table/statistics-table.component';
import { FilesRoutingModule } from './files-routing.module';
import { CompareResultsComponent } from './pages/compare-results/compare-results.component';
import { PostResultsComponent } from './pages/post-results/post-results.component';
import { ReportFormComponent } from './pages/report-form/report-form.component';


@NgModule( {
    declarations: [
        ReportFormComponent,
        CompareResultsComponent,
        PostResultsComponent,
        ResultsAccordionComponent,
        EntityComparisonTableComponent,
        EntityTableComponent,
        StatisticsTableComponent
    ],
    imports: [
        CommonModule,
        FilesRoutingModule,
        MaterialDesignModule,
        ReactiveFormsModule,
        SharedModule,
    ]
} )
export class FilesModule { }
