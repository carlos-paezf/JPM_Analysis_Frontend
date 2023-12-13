import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/**
 * @author cpaezfer
 */
@Directive( {
    selector: '[error-msg]'
} )
export class InputErrorMessageDirective implements OnInit {
    private _color = 'red';
    private _message = "Campo Invalido";
    private _invalid = true;

    private _htmlElement: ElementRef<HTMLElement>;

    constructor ( private _elementRef: ElementRef<HTMLElement> ) {
        this._htmlElement = this._elementRef;
    }

    /**
     * The ngOnInit function is used to initialize the component by setting the color, message, and
     * validity.
     */
    ngOnInit (): void {
        this._setColor();
        this._setMessage();
        this._setInvalid();
    }

    /* The `@Input() set color ( color: string )` is a setter method for the `color` property of the
    `MsgInputErrorDirective` class. It allows the `color` property to be set from the parent
    component using property binding. */
    @Input() set color ( color: string ) {
        this._color = color;
        this._setColor();
    }

    /* The `@Input() set message ( message: string )` is a setter method for the `message` property of
    the `MsgInputErrorDirective` class. It allows the `message` property to be set from the parent
    component using property binding. */
    @Input() set message ( message: string ) {
        this._message = message;
        this._setMessage();
    }

    /* The `@Input() set valid ( valid: boolean )` is a setter method for the `valid` property of the
    `MsgInputErrorDirective` class. It allows the `valid` property to be set from the parent
    component using property binding. */
    @Input() set invalid ( valid: boolean ) {
        this._invalid = valid;
        this._setInvalid();
    }

    /**
     * The private _setColor function sets the color of the HTML element to the specified color.
     */
    private _setColor () {
        this._htmlElement.nativeElement.style.color = this._color;
    }

    /**
     * The private _setMessage function sets the text content of a native HTML element to the value of
     * the _message property.
     */
    private _setMessage () {
        this._htmlElement.nativeElement.textContent = `* ${ this._message }`;
    }

    /**
     * The private function `_setValid` sets the `hidden` property of the `_htmlElement` to the value
     * of `_valid`.
     */
    private _setInvalid () {
        this._htmlElement.nativeElement.hidden = !this._invalid;
    }
}
