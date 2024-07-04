import { FormGroup } from "@angular/forms";
import { CustomValidators } from "./custom-validators.class";

/** 
 * An abstract class is defined with a generic type, 
 * which allows structuring some basic properties within 
 * the components that extend from this class.
 * 
 * @author cpaezfer
 */
export abstract class BaseDetailClass<T> extends CustomValidators {
    public id!: string;
    public data: T | null = null;
    public isLoading: boolean = true;


    /**
     * The function `controlError` checks for specific errors in a form control and returns
     * corresponding error messages.
     * @param {FormGroup} form - The `form` parameter is a FormGroup object, which is a part of
     * Angular's Reactive Forms module. It represents a group of FormControls that are used to manage
     * form validation and data submission in Angular applications.
     * @param {string} controlName - The `controlName` parameter in the `controlError` function is a
     * string that represents the name of the form control for which you want to check for errors. This
     * function is designed to be used with Angular's `FormGroup` class to handle form validation
     * errors.
     * @returns The `controlError` function returns a string message based on the error type of the
     * specified form control. 
     */
    public controlError ( form: FormGroup, controlName: string ): string {
        const control = form.get( controlName );

        if ( control?.getError( 'required' ) )
            return 'Este campo es obligatorio';

        else if ( control?.getError( 'minlength' ) )
            return 'La cantidad de caracteres de este campo debe ser mayor';

        else if ( control?.getError( 'email' ) )
            return 'El valor del campo debe ser un correo valido';

        else return '';
    }


    /**
     * The function `getControl` takes a `FormGroup` and a control name as input, and returns the
     * corresponding control from the form.
     * @param {FormGroup} form - The `form` parameter is of type `FormGroup`, which is a part of
     * Angular's Reactive Forms module. It represents a group of FormControls that are organized into a
     * single object.
     * @param {string} controlName - The `controlName` parameter is a string that represents the name
     * of the form control within the `FormGroup` that you want to retrieve.
     * @returns The `getControl` function is returning the form control with the specified
     * `controlName` from the `FormGroup` provided as input.
     */
    public getControl ( form: FormGroup, controlName: string ) {
        return form.get( controlName );
    }
}