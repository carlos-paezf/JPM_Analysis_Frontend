import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * The DialogSectionComponent class is a TypeScript component that represents 
 * a dialog section and includes a function to navigate back to the previous page
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-dialog-section',
    templateUrl: './dialog-section.component.html',
    styleUrls: [ './dialog-section.component.scss' ]
} )
export class DialogSectionComponent {
    @Input() header!: string;

    constructor ( private readonly _location: Location ) { }

    /**
     * The "goBack" function uses the "_location" object to navigate back to the previous page.
     * @returns the result of calling the `back()` method on the `_location` object.
     */
    goBack () {
        return this._location.back();
    }
}
