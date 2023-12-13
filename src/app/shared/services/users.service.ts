import { Injectable } from '@angular/core';

import { APP_USER } from '../mocks';

/**
 * The `UsersService` class is an injectable service that provides 
 * a method to retrieve application user information.
 * 
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class UsersService {
    constructor () { }

    getAppUserInfo () {
        return APP_USER;
    }
}
