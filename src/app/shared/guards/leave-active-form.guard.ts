import { FormGroup } from '@angular/forms';
import { CanDeactivateFn } from '@angular/router';


/**
 * The function `leaveActiveFormGuard` is a TypeScript function that acts as a guard for leaving an
 * active form, checking if the form is valid and submitted, or if it has unsaved changes.
 * @param {any} component - The component parameter represents the component instance that is being
 * navigated away from.
 * @param currentRoute - The current route is the route that the user is currently on. It contains
 * information about the route's path, parameters, and query parameters.
 * @param currentState - The `currentState` parameter represents the current state of the application
 * or component. It can be used to check the current state of the form or any other relevant data
 * before deciding whether to allow the user to leave the active form or not.
 * @param nextState - The `nextState` parameter represents the state that the user is navigating to. It
 * contains information about the next route, such as the URL and any parameters or query parameters.
 * @returns The function `leaveActiveFormGuard` returns a boolean value.
 * 
 * @author cpaezfer
 */
export const leaveActiveFormGuard: CanDeactivateFn<unknown> = ( component: any, currentRoute, currentState, nextState ) => {
    const form = component?.form as FormGroup;
    const submitted = component.submitted;

    if ( form && form.status === 'VALID' && submitted ) {
        component.form.markAsPristine();
        return true;
    }

    if ( form && ( form.dirty || form.touched ) ) {
        return confirm( 'Tienes datos sin guardar ¿Estás seguro de abandonar la página?' );
    }

    return true;
};
