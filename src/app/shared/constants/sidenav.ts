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
        label: 'Cargar reporte de usuarios JPM',
        icon: 'upload_file',
        routeLink: 'file-upload',
        requiresAdmin: false
    },
    {
        label: 'Usuarios de la compañía',
        icon: 'group',
        routeLink: 'company-users',
        requiresAdmin: false
    },
    {
        label: 'Perfiles',
        icon: 'manage_accounts',
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
        label: 'Productos',
        icon: 'category',
        routeLink: 'products',
        requiresAdmin: false
    },
    {
        label: 'Cuentas',
        icon: 'account_balance_wallet',
        routeLink: 'accounts',
        requiresAdmin: false
    },
    {
        label: 'Productos - Cuentas',
        icon: 'account_tree',
        routeLink: 'products-accounts',
        requiresAdmin: false
    },
    {
        label: 'Autorizaciones de Usuarios',
        icon: 'shield_person',
        routeLink: 'users-entitlements',
        requiresAdmin: false
    },
    {
        label: 'Circularización de Usuarios',
        icon: 'contacts',
        routeLink: 'circularization',
        openTab: false,
        children: [
            {
                label: 'Circularización de Usuarios',
                routeLink: 'user-circularization/generate-user-circularization',
                requiresAdmin: false
            },
            {
                label: 'Listado de Departamentos',
                routeLink: 'user-circularization/departments',
                requiresAdmin: false
            },
            {
                label: 'Asignación de Usuarios por Departamento',
                routeLink: 'user-circularization/user-assignment-by-department',
                requiresAdmin: false
            }
        ],
        requiresAdmin: false
    },
    {
        label: 'Administración de la aplicación',
        icon: 'desktop_windows',
        openTab: false,
        children: [
            {
                label: 'Historial de reportes',
                routeLink: 'admin-app/reports-history',
                requiresAdmin: false,
            },
            {
                label: 'Usuarios de la APP',
                routeLink: 'admin-app/app-users-list',
                requiresAdmin: false
            },
            {
                label: 'Crear Usuario APP',
                routeLink: 'admin-app/create-app-user',
                requiresAdmin: true
            }
        ],
        requiresAdmin: false
    }
];
