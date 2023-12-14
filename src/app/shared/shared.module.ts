import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomIfDirective } from './directives/custom-if.directive';
import { InputErrorMessageDirective } from './directives/input-error-message.directive';
import { NoteFieldFormDirective } from './directives/note-field-form.directive';
import { OptionalFieldDirective } from './directives/optional-field.directive';
import { TransformCellValuePipe } from './pipes/transform-cell-value.pipe';



@NgModule({
  declarations: [
    CustomIfDirective,
    InputErrorMessageDirective,
    NoteFieldFormDirective,
    OptionalFieldDirective,
    TransformCellValuePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
