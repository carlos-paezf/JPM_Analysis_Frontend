import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { FilesRoutingModule } from './files-routing.module';


@NgModule( {
    declarations: [
        FormComponent
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
