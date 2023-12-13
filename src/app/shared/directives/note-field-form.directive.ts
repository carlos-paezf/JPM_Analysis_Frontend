import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/**
 * @author cpaezfer
 */
@Directive( {
    selector: '[noteFieldForm]'
} )
export class NoteFieldFormDirective implements OnInit {
    private _htmlElement: ElementRef<HTMLElement>;
    private _message: string = '(Optional)';

    /**
     * This is a constructor function that takes an ElementRef of type HTMLElement and assigns it to a
     * private variable.
     * @param _elementRef - The _elementRef parameter is an instance of the ElementRef class, which is
     * a wrapper around a native element in the DOM. It provides access to the underlying native
     * element and allows you to manipulate its properties and attributes. In this case, it is being
     * used to get a reference to an HTML element so
     */
    constructor ( private readonly _elementRef: ElementRef<HTMLElement> ) {
        this._htmlElement = this._elementRef;
    }

    /**
     * The ngOnInit function sets an optional field.
     */
    ngOnInit (): void {
        this._setOptionalField();
    }

    /**
     * This is a setter function in TypeScript that sets the value of a private variable
     * called "_message".
     * @param {string} message - The "message" parameter is a string that represents the
     * message that needs to be set. This code is part of a class and the "set" keyword
     * indicates that this is a setter method for the private property "_message".
     */
    @Input() set message ( message: string ) {
        this._message = message;
    }

    /**
     * This function adds an optional field indicator to an HTML element.
     */
    private _setOptionalField () {
        this._htmlElement.nativeElement.innerHTML += `
            <small style="color: var(--text-color-secondary); font-size: 12px;">${ this._message }</small>
        `;
    }
}
