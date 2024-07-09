import { ModulesPanelsType } from "../../../../shared/types";


export const APP_MODULES_PANELS: ModulesPanelsType[] = [
    {
        title: 'Archivos',
        panels: [
            {
                label: 'Cargar reporte de usuarios JPM',
                routeLink: 'file-upload',
                icon: 'upload_file',
            }
        ],
        requireData: false
    },
    {
        title: 'Usuarios de la compañía',
        panels: [
            {
                label: 'Usuarios de la compañía',
                routeLink: 'company-users',
                icon: 'group',
            }
        ],
        requireData: true,
    },
    {
        title: 'Perfiles',
        panels: [
            {
                label: 'Listado de perfiles',
                routeLink: 'profiles',
                icon: 'manage_accounts',
            },
            {
                label: 'Relación de Perfiles - Usuarios',
                routeLink: 'profiles/users-by-profiles',
                icon: 'account_tree',
            },
            {
                label: 'Funciones',
                routeLink: 'profiles/functions',
                icon: 'functions',
            }
        ],
        requireData: true,
    },
    {
        title: 'Productos',
        panels: [
            {
                label: 'Productos',
                routeLink: 'products',
                icon: 'category',
            },
            {
                label: 'Cuentas',
                routeLink: 'accounts',
                icon: 'group',
            },
            {
                label: 'Relación de Productos - Cuentas',
                routeLink: 'products-accounts',
                icon: 'account_tree',
            }
        ],
        requireData: true,
    },
    {
        title: 'Autorizaciones de Usuarios',
        panels: [
            {
                label: 'Autorizaciones de los usuarios',
                routeLink: 'users-entitlements',
                icon: 'shield_person',
            }
        ],
        requireData: true,
    },
    {
        title: 'Circularización de Usuarios',
        panels: [
            {
                label: 'Circularización de Usuarios',
                routeLink: 'user-circularization',
                icon: 'contacts'
            },
            {
                label: 'Relación de Usuarios - Departamentos',
                routeLink: 'user-circularization/list-company-users-departments',
                icon: 'account_tree'
            }
        ],
        requireData: true
    },
    {
        title: 'Administración de la aplicación',
        panels: [
            {
                label: 'Historial de reportes',
                routeLink: 'admin-app/reports-history',
                icon: 'content_paste_search',
            },
            {
                label: 'Listado de usuarios de la aplicación',
                routeLink: 'admin-app/list-app-user',
                icon: 'settings_account_box',
            },
            {
                label: 'Crear nuevo usuario de la aplicación',
                routeLink: 'admin-app/create-app-user',
                icon: 'desktop_windows',
            }
        ],
        requireData: false,
    }
];