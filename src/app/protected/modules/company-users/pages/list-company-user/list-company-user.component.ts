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
        { columnDef: 'userName', header: 'User Name', cell: ( row ) => row.userName },
        { columnDef: 'accessId', header: 'Access Id', cell: ( row ) => row.accessId },
        { columnDef: 'userStatus', header: 'Status', cell: ( row ) => row.userStatus },
        { columnDef: 'userType', header: 'Type', cell: ( row ) => row.userType },
        { columnDef: 'employeeId', header: 'Employee ID', cell: ( row ) => row.employeeId },
        { columnDef: 'emailAddress', header: 'Email Address', cell: ( row ) => row.emailAddress },
        { columnDef: 'userLocation', header: 'Location', cell: ( row ) => row.userLocation },
        { columnDef: 'userCountry', header: 'Country', cell: ( row ) => row.userCountry },
        { columnDef: 'userLogonType', header: 'Logon Type', cell: ( row ) => row.userLogonType },
        { columnDef: 'userLastLogonDt', header: 'Last Logon Date', cell: ( row ) => row.userLastLogonDt && new Date( row.userLastLogonDt ).toLocaleString() },
        { columnDef: 'userGroupMembership', header: 'Group Membership', cell: ( row ) => row.userGroupMembership },
        { columnDef: 'userRole', header: 'Role', cell: ( row ) => row.userRole },
        { columnDef: 'profileId', header: 'Profile', cell: ( row ) => row.profileId },
        { columnDef: 'updatedAt', header: 'Última Actualización', cell: ( row ) => new Date( row.updatedAt ).toLocaleString() },
        { columnDef: 'deletedAt', header: 'Fecha de Desactivación', cell: ( row ) => row.deletedAt },
    ];

    constructor (
        _appUtilsMessagesService: AppUtilsMessagesService,
        _companyUsersService: CompanyUsersService
    ) {
        super( _appUtilsMessagesService, _companyUsersService );
    }
}
