import { ModulesPanelsType } from "../../../../shared/types";


export const APP_MODULES_PANELS: ModulesPanelsType[] = [
    {
        title: 'Archivos',
        panels: [
            {
                label: 'Carga de archivos',
                routeLink: 'file-upload'
            }
        ],
        requireData: false
    },
    {
        title: 'Perfiles',
        panels: [
            {
                label: 'Listado de perfiles',
                routeLink: 'profiles'
            },
            {
                label: 'Usuarios por perfil',
                routeLink: 'profiles/users-by-profiles'
            },
            {
                label: 'Funciones',
                routeLink: 'profiles/functions'
            }
        ],
        requireData: true
    },
    {
        title: 'Company Users',
        panels: [
            {
                label: 'Usuarios de la compañía',
                routeLink: 'company-users'
            }
        ],
        requireData: true
    },
    {
        title: 'JPM Products',
        panels: [
            {
                label: 'Cuentas',
                routeLink: 'accounts'
            },
            {
                label: 'Productos JPM',
                routeLink: 'products'
            },
            {
                label: 'Productos - Cuentas',
                routeLink: 'products-accounts'
            }
        ],
        requireData: true
    },
    {
        title: 'Users Entitlements',
        panels: [
            {
                label: 'Títulos de los usuarios',
                routeLink: 'users-entitlements'
            }
        ],
        requireData: true
    },
    {
        title: 'Administración de la aplicación',
        panels: [
            {
                label: 'Historial de reportes',
                routeLink: 'admin-app/reports-history'
            },
            {
                label: 'Crear nuevo usuario de la aplicación',
                routeLink: 'admin-app/create-app-user'
            },
            {
                label: 'Listado de usuarios de la aplicación',
                routeLink: 'admin-app/list-app-user'
            }
        ],
        requireData: false
    }
];