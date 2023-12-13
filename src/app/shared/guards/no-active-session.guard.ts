import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { AuthUsersService } from '../services/auth-users.service';


/**
 * The function checks if there is an active session by calling the `getAppUserInfo` method from the
 * `AuthUsersService` and returns `true` if there is no active session.
 * @param route - The `route` parameter is an object that represents the current route being navigated
 * to. It contains information about the route's path, parameters, and other related data.
 * @param state - The `state` parameter represents the current state of the application's router. It
 * contains information about the current route, including the URL, query parameters, and route
 * parameters.
 * @returns the value of the variable "withoutActiveSession".
 * 
 * @author cpaezfer
 */
export const noActiveSessionGuard: CanActivateFn = ( route, state ) => {
    let withoutActiveSession = false;

    inject( AuthUsersService ).getAppUserInfo().subscribe( data => {
        withoutActiveSession = ( !data || data === null );
    } );

    return withoutActiveSession;
};
