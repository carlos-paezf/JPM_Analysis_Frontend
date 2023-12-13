import { Directive, ElementRef, OnInit } from '@angular/core';

/**
 * @author cpaezfer
 */
@Directive( {
    selector: '[optionalField]'
} )
export class OptionalFieldDirective implements OnInit {
    private _htmlElement: ElementRef<HTMLElement>;

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
     * This function adds an optional field indicator to an HTML element.
     */
    private _setOptionalField () {
        this._htmlElement.nativeElement.innerHTML += `
            <small style="color: var(--text-color-secondary); font-size: 12px;">(Opcional)</small>
        `;
    }
}
