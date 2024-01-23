import { animate, state, style, transition, trigger } from "@angular/animations";
import { SidenavLinkType } from "../types";


export const slideInOutAnimationTrigger = trigger(
    'slideInOut',
    [
        state( 'false', style( { height: '0px', opacity: 0, display: 'none' } ) ),
        state( 'true', style( { height: '*', opacity: 1 } ) ),
        transition( 'false <=> true', animate( '300ms ease-in-out' ) )
    ]
);


export const SIDENAV_ITEMS: SidenavLinkType[] = [
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
    // {
    //     label: 'Perfiles de usuarios JPM',
    //     icon: 'people',
    //     routeLink: 'profiles',
    //     requiresAdmin: false
    // },
    {
        label: 'Perfiles JPM',
        icon: 'people',
        openTab: false,
        children: [
            {
                label: 'Lista de perfiles',
                routeLink: 'profiles/list-profiles',
                requiresAdmin: false
            },
            {
                label: 'Usuarios por perfil',
                routeLink: 'profiles/users-by-profiles',
                requiresAdmin: false
            },
            {
                label: 'Funciones',
                routeLink: 'profiles/functions',
                requiresAdmin: true
            }
        ],
        requiresAdmin: false
    },
    {
        label: 'Usuarios de la compañía',
        icon: 'contacts',
        routeLink: 'company-users',
        requiresAdmin: false
    },
    {
        label: 'Títulos de Usuarios',
        icon: 'list',
        routeLink: 'user-entitlements',
        requiresAdmin: false
    },
    {
        label: 'Productos JPM',
        icon: 'category',
        routeLink: 'products',
        /* openTab: false,
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
        ], */
        requiresAdmin: false
    },
    {
        label: 'Cuentas',
        icon: 'account_balance_wallet',
        routeLink: 'accounts',
        requiresAdmin: false
    },
    {
        label: 'Clientes',
        icon: 'account_balance_wallet',
        routeLink: 'clients',
        requiresAdmin: false
    },
    {
        label: 'Circularización de Usuarios',
        icon: 'group',
        routeLink: 'circularization',
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
