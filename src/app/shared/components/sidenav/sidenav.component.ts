import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

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
    animations: [
        trigger( 'slideInOut', [
            state( 'false', style( { height: '0px', opacity: 0, display: 'none' } ) ),
            state( 'true', style( { height: '*', opacity: 1 } ) ),
            transition( 'false <=> true', animate( '300ms ease-in-out' ) )
        ] ),
    ]
} )
export class SidenavComponent implements OnInit {
    @Input() drawer!: MatDrawer;

    public logoSrc = "../../../../assets/images/banrep-logo2.png";

    public isAdminUser: boolean = false;

    public linksMenu: SidenavLinkType[] = [
        {
            label: 'Inicio',
            icon: 'home',
            routeLink: 'dashboard',
            requiresAdmin: false
        },
        {
            label: 'Cargar archivo con reporte',
            icon: 'upload_file',
            routeLink: 'file-upload',
            requiresAdmin: false
        },
        {
            label: 'JPM Transaction Instruction Manager (TIM)',
            icon: 'list',
            openTab: false,
            children: [
                {
                    label: 'TIM Cash',
                    routeLink: 'sheets/tim-cash',
                    requiresAdmin: false
                },
                {
                    label: 'TIM FX',
                    routeLink: 'sheets/tim-fx',
                    requiresAdmin: false
                },
                {
                    label: 'TIM Listed Sec',
                    routeLink: 'sheets/tim-listed-sec',
                    requiresAdmin: false
                },
            ],
            requiresAdmin: false
        },
        {
            label: 'Perfiles de usuarios JPM',
            icon: 'people',
            routeLink: 'profiles',
            requiresAdmin: false
        },
        {
            label: 'Usuarios de la compañía',
            icon: 'contacts',
            routeLink: 'company-users',
            requiresAdmin: false
        },
        {
            label: 'Usuarios de la aplicación',
            icon: 'desktop_windows',
            openTab: false,
            children: [
                {
                    label: 'Usuarios de la APP',
                    routeLink: 'app-users/app-users-list',
                    requiresAdmin: false
                },
                {
                    label: 'Crear Usuario APP',
                    routeLink: 'app-users/create-app-user',
                    requiresAdmin: true
                }
            ],
            requiresAdmin: false
        }
    ];

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
