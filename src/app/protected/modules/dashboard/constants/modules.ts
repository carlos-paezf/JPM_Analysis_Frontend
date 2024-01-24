import { ModulesPanelsType } from "../../../../shared/types";


export const APP_MODULES_PANELS: ModulesPanelsType[] = [
    {
        title: 'Archivos',
        panels: [
            {
                label: 'Carga de archivos',
                routeLink: 'file-upload'
            }
        ]
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
        ]
    },
    {
        title: 'Company Users',
        panels: [
            {
                label: 'Usuarios de la compañía',
                routeLink: 'company-users'
            }
        ]
    },
    {
        title: 'Users Entitlements',
        panels: [
            {
                label: 'Títulos de los usuarios',
                routeLink: 'user-entitlements'
            }
        ]
    },
    {
        title: 'JPM Products',
        panels: [
            {
                label: 'Productos JPM',
                routeLink: 'products'
            },
            {
                label: 'Cuentas',
                routeLink: 'accounts'
            },
            {
                label: 'Clientes',
                routeLink: 'clients'
            }
        ]
    },
    {
        title: 'APP Users',
        panels: [
            {
                label: 'Listado de usuarios de la aplicación',
                routeLink: 'app-users/list-app-user'
            },
            {
                label: 'Crear nuevo usuario de la aplicación',
                routeLink: 'app-users/create-app-user'
            }
        ]
    }
];