import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';

import { AuthUsersService } from '../services/auth-users.service';


/**
 * The function isLoggedGuard checks if a user is logged in by calling a service and subscribing to the
 * response.
 * @param route - The `route` parameter is an object that represents the current route being activated.
 * It contains information about the route's path, parameters, and other related data.
 * @param state - The `state` parameter represents the current state of the application's router. It
 * contains information about the current route, including the URL, query parameters, and route
 * parameters.
 * @returns the value of the variable `userIsLogged`.
 * 
 * @author cpaezfer
 */
export const isLoggedGuard: CanActivateChildFn = ( route, state ) => {
    let userIsLogged = false;

    inject( AuthUsersService ).getAppUserInfo().subscribe( data => {
        userIsLogged = ( !data || data === null ) ? false : true;
    } );

    return userIsLogged;
};
