import { Component, Input } from '@angular/core';


@Component( {
    selector: 'app-control-dates-form',
    templateUrl: './control-dates-form.component.html',
    styleUrls: [ './control-dates-form.component.scss' ]
} )
export class ControlDatesFormComponent {
    @Input() createdAt!: Date;
    @Input() updatedAt!: Date;
    @Input() deletedAt: Date | undefined | null;
}
