import { Component } from '@angular/core';

import { ListEntityBase } from '../../../../../shared/classes/list-entity-base.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ColumnTableType, CompanyUserEagerType, CompanyUserType } from '../../../../../shared/types';
import { CompanyUsersService } from '../../services/company-users.service';


/**
 * @author cpaezfer
 */
@Component( {
    selector: 'app-company-users-list',
    templateUrl: './list-company-user.component.html',
    styleUrls: [ './list-company-user.component.scss' ]
} )
export class ListCompanyUserComponent extends ListEntityBase<CompanyUserType, CompanyUserEagerType> {
    public override displayedColumns: string[] = [
        'userName',
        'accessId',
        'profileId',
        'userType',
        // 'emailAddress',
        'userStatus',
        // 'userLocation',
        // 'userCountry',
        'userLogonType',
        'userLastLogonDt',
        // 'userGroupMembership',
        // 'userRole',
        // 'employeeId',
        'updatedAt',
        'deletedAt',
    ];

    public override columns: ColumnTableType<CompanyUserType>[] = [
        { columnDef: 'userName', header: 'Nombre', cell: ( row ) => row.userName },
        { columnDef: 'accessId', header: 'Id de Acceso', cell: ( row ) => row.accessId },
        { columnDef: 'userStatus', header: 'Estado', cell: ( row ) => row.userStatus },
        { columnDef: 'userType', header: 'Tipo de Usuario', cell: ( row ) => row.userType },
        { columnDef: 'employeeId', header: 'Id de Empleado', cell: ( row ) => row.employeeId },
        { columnDef: 'emailAddress', header: 'Dirección de Correo', cell: ( row ) => row.emailAddress },
        { columnDef: 'userLocation', header: 'Ubicación', cell: ( row ) => row.userLocation },
        { columnDef: 'userCountry', header: 'País', cell: ( row ) => row.userCountry },
        { columnDef: 'userLogonType', header: 'Tipo de Ingreso', cell: ( row ) => row.userLogonType },
        { columnDef: 'userLastLogonDt', header: 'Última fecha de ingreso', cell: ( row ) => row.userLastLogonDt && new Date( row.userLastLogonDt ).toLocaleString() },
        { columnDef: 'userGroupMembership', header: 'Membresía de grupo', cell: ( row ) => row.userGroupMembership },
        { columnDef: 'userRole', header: 'Rol', cell: ( row ) => row.userRole },
        { columnDef: 'profileId', header: 'Perfil', cell: ( row ) => row.profileId },
        { columnDef: 'updatedAt', header: 'Última Actualización', cell: ( row ) => new Date( row.updatedAt ).toLocaleString() },
        { columnDef: 'deletedAt', header: 'Fecha de Desactivación', cell: ( row ) => row.deletedAt && new Date( row.deletedAt ).toLocaleString() },
    ];

    constructor (
        _appUtilsMessagesService: AppUtilsMessagesService,
        _companyUsersService: CompanyUsersService
    ) {
        super( _appUtilsMessagesService, _companyUsersService );
    }
}
