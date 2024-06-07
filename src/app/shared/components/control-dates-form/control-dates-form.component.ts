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

    /**
     * The function `formatDate` takes a Date object or null as input and returns a string
     * representation of the date if it is not null.
     * @param {Date | null} date - The `date` parameter in the `formatDate` function is of type `Date`
     * or `null`, meaning it can either be a valid date object or `null`.
     * @returns The function `formatDate` is returning the string representation of the input date if
     * it is not null. If the input date is null, the function will return null.
     */
    public formatDate ( date: Date | null ) {
        return date && new Date( date ).toString();
    }
}
