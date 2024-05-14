import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialDesignModule } from '../material-design/material-design.module';
import { ControlDatesFormComponent } from './components/control-dates-form/control-dates-form.component';
import { DialogSectionComponent } from './components/dialog-section/dialog-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InputFileComponent } from './components/input-file/input-file.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NumberCardComponent } from './components/number-card/number-card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SupportImageComponent } from './components/support-image/support-image.component';
import { TableBaseComponent } from './components/table-base/table-base.component';
import { TableLoadingComponent } from './components/table-loading/table-loading.component';
import { CustomIfDirective } from './directives/custom-if.directive';
import { InputErrorMessageDirective } from './directives/input-error-message.directive';
import { NoteFieldFormDirective } from './directives/note-field-form.directive';
import { OptionalFieldDirective } from './directives/optional-field.directive';
import { TransformCellValuePipe } from './pipes/transform-cell-value.pipe';



@NgModule( {
    declarations: [
        ControlDatesFormComponent,
        CustomIfDirective,
        DialogSectionComponent,
        FooterComponent,
        HeaderComponent,
        InputErrorMessageDirective,
        InputFileComponent,
        InternalServerErrorComponent,
        LoadingComponent,
        NoteFieldFormDirective,
        NotFoundComponent,
        OptionalFieldDirective,
        SidenavComponent,
        SupportImageComponent,
        TableBaseComponent,
        TableLoadingComponent,
        TransformCellValuePipe,
        NumberCardComponent,
    ],
    imports: [
        CommonModule,
        MaterialDesignModule,
        CdkDrag,
        CdkDropList,
        RouterModule
    ],
    exports: [
        ControlDatesFormComponent,
        CustomIfDirective,
        DialogSectionComponent,
        FooterComponent,
        HeaderComponent,
        InputErrorMessageDirective,
        InputFileComponent,
        InternalServerErrorComponent,
        LoadingComponent,
        NoteFieldFormDirective,
        NotFoundComponent,
        SidenavComponent,
        SupportImageComponent,
        TableBaseComponent,
        TableLoadingComponent,
        TransformCellValuePipe,
        NumberCardComponent,
    ]
} )
export class SharedModule { }
