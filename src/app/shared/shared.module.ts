import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomIfDirective } from './directives/custom-if.directive';
import { InputErrorMessageDirective } from './directives/input-error-message.directive';
import { NoteFieldFormDirective } from './directives/note-field-form.directive';
import { OptionalFieldDirective } from './directives/optional-field.directive';



@NgModule({
  declarations: [
    CustomIfDirective,
    InputErrorMessageDirective,
    NoteFieldFormDirective,
    OptionalFieldDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
