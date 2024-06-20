import { ModulesPanelsType } from "../../../../shared/types";


export const APP_MODULES_PANELS: ModulesPanelsType[] = [
    {
        title: 'Archivos',
        panels: [
            {
                label: 'Cargar reporte de usuarios JPM',
                routeLink: 'file-upload'
            }
        ],
        requireData: false
    },
    {
        title: 'Usuarios de la compañía',
        panels: [
            {
                label: 'Usuarios de la compañía',
                routeLink: 'company-users'
            }
        ],
        requireData: true
    },
    {
        title: 'Perfiles',
        panels: [
            {
                label: 'Listado de perfiles',
                routeLink: 'profiles'
            },
            {
                label: 'Relación de Perfiles - Usuarios',
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
        title: 'Productos JPM',
        panels: [
            {
                label: 'Productos',
                routeLink: 'products'
            },
            {
                label: 'Cuentas',
                routeLink: 'accounts'
            },
            {
                label: 'Relación de Productos - Cuentas',
                routeLink: 'products-accounts'
            }
        ],
        requireData: true
    },
    {
        title: 'Títulos de usuarios',
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
                label: 'Listado de usuarios de la aplicación',
                routeLink: 'admin-app/list-app-user'
            },
            {
                label: 'Crear nuevo usuario de la aplicación',
                routeLink: 'admin-app/create-app-user'
            }
        ],
        requireData: false
    }
];