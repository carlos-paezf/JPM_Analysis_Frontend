import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthUsersService } from '../services/auth-users.service';

/**
 * The above function is an isAdminGuard that checks if the current user is an admin.
 * @param route - The route parameter represents the current route being activated. It contains
 * information about the route such as its path, parameters, and data.
 * @param state - The `state` parameter represents the current state of the application. It contains
 * information about the current route, such as the URL and any parameters or query strings associated
 * with it.
 * 
 * @author cpaezfer
 */
export const isAdminGuard: CanActivateFn = ( route, state ) => inject( AuthUsersService ).getIsAdminAppUser();
