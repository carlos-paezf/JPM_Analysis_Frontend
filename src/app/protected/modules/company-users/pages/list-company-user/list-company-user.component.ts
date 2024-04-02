import { Component, OnInit } from '@angular/core';

import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { ColumnTableType, CompanyUserType } from '../../../../../shared/types';
import { CompanyUsersService } from '../../services/company-users.service';


@Component( {
    selector: 'app-company-users-list',
    templateUrl: './list-company-user.component.html',
    styleUrls: [ './list-company-user.component.scss' ]
} )
export class ListCompanyUserComponent extends InfoTableBaseComponent<CompanyUserType> implements OnInit {
    public override displayedColumns: string[] = [
        'userName',
        'profileId',
        'userType',
        'emailAddress',
        'userStatus',
        'userLocation',
        'userCountry',
        'userLogonType',
        'userLastLogonDt',
        'userGroupMembership',
        'userRole',
        'employeeId',
        'updatedAt',
        'deletedAt',
    ];

    public override columns: ColumnTableType<CompanyUserType>[] = [
        { columnDef: 'userName', header: 'User Name', cell: ( row ) => row.userName },
        { columnDef: 'userStatus', header: 'Status', cell: ( row ) => row.userStatus },
        { columnDef: 'userType', header: 'Type', cell: ( row ) => row.userType },
        { columnDef: 'employeeId', header: 'Employee ID', cell: ( row ) => row.employeeId },
        { columnDef: 'emailAddress', header: 'Email Address', cell: ( row ) => row.emailAddress },
        { columnDef: 'userLocation', header: 'Location', cell: ( row ) => row.userLocation },
        { columnDef: 'userCountry', header: 'Country', cell: ( row ) => row.userCountry },
        { columnDef: 'userLogonType', header: 'Logon Type', cell: ( row ) => row.userLogonType },
        { columnDef: 'userLastLogonDt', header: 'Last Logon Date', cell: ( row ) => row.userLastLogonDt },
        { columnDef: 'userGroupMembership', header: 'Group Membership', cell: ( row ) => row.userGroupMembership },
        { columnDef: 'userRole', header: 'Role', cell: ( row ) => row.userRole },
        { columnDef: 'profileId', header: 'Profile', cell: ( row ) => row.profileId },
        { columnDef: 'updatedAt', header: 'Última Actualización', cell: ( row ) => row.updatedAt },
        { columnDef: 'deletedAt', header: 'Fecha de Desactivación', cell: ( row ) => row.deletedAt },
    ];

    public deleteCompanyUser!: Function;
    public reactivateCompanyUser!: Function;

    constructor ( private _companyUsersService: CompanyUsersService ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this._companyUsersService.getCompanyUsers()
            .subscribe( ( response ) => {
                this.data = response.data;
                this.isEmptyTable = ( response.data.length <= 0 );
                this.isLoadingResults = false;
            } );
        this.deleteCompanyUser = this._companyUsersService.deleteCompanyUser;
        this.reactivateCompanyUser = this._companyUsersService.reactivateCompanyUser;
    }
}
