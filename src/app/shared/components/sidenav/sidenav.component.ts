import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { SIDENAV_ITEMS, slideInOutAnimationTrigger } from '../../constants/sidenav';
import { AuthUsersService } from '../../services/auth-users.service';
import { SidenavLinkType } from '../../types';

/** 
 * The SidenavComponent class is a component in a TypeScript Angular application
 * that represents a side navigation menu with various links and icons.
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: [ './sidenav.component.scss' ],
    animations: [ slideInOutAnimationTrigger ]
} )
export class SidenavComponent implements OnInit {
    @Input() drawer!: MatDrawer;
    @Input() isOver: boolean = false;

    public logoSrc = "../../../../assets/images/banrep-logo2.png";

    public isAdminUser: boolean = false;

    public linksMenu: SidenavLinkType[] = SIDENAV_ITEMS;

    constructor ( private readonly _authUserService: AuthUsersService ) { }

    ngOnInit (): void {
        this.isAdminUser = this._authUserService.getIsAdminAppUser();
    }

    /**
     * The function toggles the state of a drawer.
     */
    toggleDrawer () {
        this.drawer.toggle();
    }
}
