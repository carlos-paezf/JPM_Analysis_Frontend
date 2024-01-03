import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { AuthUsersService } from '../../services/auth-users.service';
import { HttpStatusService } from '../../services/http-status.service';


/**
 * The HeaderComponent is a TypeScript class that represents the header component 
 * of an Angular application, which includes functionality for toggling a drawer, 
 * retrieving and displaying the app user information, and logging out the user. 
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
} )
export class HeaderComponent implements OnInit {
    @Input() drawer!: MatDrawer;

    public logoSrc = "../../../../assets/images/banrep-logo.png";
    public appUserName!: string;
    public appLogon!: string;

    constructor (
        private readonly _router: Router,
        private readonly _authUserService: AuthUsersService,
        private readonly _httpStatusService: HttpStatusService
    ) { }

    ngOnInit (): void {
        this.setAppUser();
    }

    /**
     * The function `setAppUser` retrieves the app user information from the `_authUserService` and assigns
     * the user's name to the `appUserName` variable.
     */
    setAppUser () {
        this._authUserService.getAppUserInfo().subscribe( data => {
            if ( !data || data === null ) return this._httpStatusService.reportInternalServerError();

            this._httpStatusService.removeInternalServerError();

            this.appUserName = data.name;
            this.appLogon = data.username;
        } );
    }

    /**
     * The function toggles the state of a drawer.
     */
    toggleDrawer () {
        this.drawer.toggle();
    }

    /**
     * The logout function logs out the user and redirects them to the login page.
     */
    logout () {
        this._authUserService.logout();

        this._router.navigateByUrl( '' );
    }
}
