import { AbstractControl } from "@angular/forms";

/**
 * @author cpaezfer 
 */
export class CustomValidators {
    /**
     * The function checks if a specific field in a form control is invalid and has been touched.
     * @param {AbstractControl} control - The `control` parameter is an instance of the
     * `AbstractControl` class, which represents a form control in Angular. It can be a form control,
     * form group, or form array.
     * @param {string} field - The `field` parameter is a string that represents the name of the field
     * in the form control that you want to check for validity.
     * @returns a boolean value.
     */
    protected isInvalidField ( control: AbstractControl, field: string ): boolean {
        return Boolean(
            control.get( field )?.errors
            && control.get( field )?.touched
            && control.get( field )?.invalid
        );
    }
}