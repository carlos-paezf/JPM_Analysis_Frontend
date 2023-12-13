import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { APP_USER } from '../mocks';
import { AppUserType } from '../types';
import { SessionStorageService } from './session-storage.service';
import { ToastrNotificationService } from './toastr-notification.service';


/** 
 * The `AuthUsersService` class is responsible for managing user authentication 
 * and storing user information.
 * 
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class AuthUsersService {
    private _appUserInfo = new BehaviorSubject<AppUserType | null>( null );
    private _isAdminAppUser: boolean = false;

    constructor (
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _sessionStorageService: SessionStorageService<AppUserType>,
    ) {
        this._setAppUserInfo();
    }

    /**
     * The function sets the app user information and determines 
     * if the user is an admin.
     */
    private _setAppUserInfo () {
        // this.login(); // TODO: Eliminar luego de conectarme al back

        const userData = this._sessionStorageService.getItem( 'appUser' );

        this._appUserInfo.next( userData );
        this._isAdminAppUser = !userData ? false : userData.appRole === 'admin';
    }

    /**
     * The function `getAppUserInfo` returns an observable of the `_appUserInfo` property.
     * @returns The method `getAppUserInfo()` is returning an observable of type `AppUserInfo`.
     */
    getAppUserInfo () {
        return this._appUserInfo.asObservable();
    }

    /**
     * The function returns the value of the _isAdminAppUser property.
     * @returns The method is returning the value of the variable `_isAdminAppUser`.
     */
    getIsAdminAppUser () {
        return this._isAdminAppUser;
    }

    /**
     * The login function sets the appUser item in the session storage and calls 
     * the _setAppUserInfo function.
     */
    login () {
        this._sessionStorageService.setItem( 'appUser', APP_USER );

        this._setAppUserInfo();
    }

    /**
     * The `logout` function clears local storage, sets the app user info to null, 
     * and displays a success notification for logging out.
     */
    logout () {
        this._toastrNotificationService.cleanAllToast();

        this._sessionStorageService.clearSessionStorage();

        this._appUserInfo.next( null );

        this._toastrNotificationService.success( {
            title: 'Cierre de sesión',
            message: 'Has cerrado exitosamente la sesión'
        } );
    }
}
