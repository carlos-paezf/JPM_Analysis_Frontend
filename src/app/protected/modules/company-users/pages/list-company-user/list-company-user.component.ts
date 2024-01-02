import { Component, OnInit } from '@angular/core';

import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { CompanyUsersService } from '../../services/company-users.service';
import { ColumnTableType, CompanyUserType } from '../../../../../shared/types';
import { COMPANY_USERS } from '../../../../../shared/mocks';


@Component( {
    selector: 'app-company-users-list',
    templateUrl: './list-company-user.component.html',
    styleUrls: [ './list-company-user.component.scss' ]
} )
export class ListCompanyUserComponent extends InfoTableBaseComponent<CompanyUserType> implements OnInit {
    public override displayedColumns: string[] = [
        'user_name',
        'user_status',
        'user_type',
        'employee_id',
        'email_address',
        'user_location',
        'user_country',
        'user_logon_type',
        'user_last_logon_dt',
        'user_group_membership',
        'user_role',
        'profile_id',
        'updated_at',
    ];

    public override columns: ColumnTableType<CompanyUserType>[] = [
        { columnDef: 'user_name', header: 'User Name', cell: ( row ) => row.user_name },
        { columnDef: 'user_status', header: 'Status', cell: ( row ) => row.user_status },
        { columnDef: 'user_type', header: 'Type', cell: ( row ) => row.user_type },
        { columnDef: 'employee_id', header: 'Employee ID', cell: ( row ) => row.employee_id },
        { columnDef: 'email_address', header: 'Email Address', cell: ( row ) => row.email_address },
        { columnDef: 'user_location', header: 'Location', cell: ( row ) => row.user_location },
        { columnDef: 'user_country', header: 'Country', cell: ( row ) => row.user_country },
        { columnDef: 'user_logon_type', header: 'Logon Type', cell: ( row ) => row.user_logon_type },
        { columnDef: 'user_last_logon_dt', header: 'Last Logon Date', cell: ( row ) => row.user_last_logon_dt },
        { columnDef: 'user_group_membership', header: 'Group Membership', cell: ( row ) => row.user_group_membership },
        { columnDef: 'user_role', header: 'Role', cell: ( row ) => row.user_role },
        { columnDef: 'profile_id', header: 'Profile', cell: ( row ) => row.profile_id },
        { columnDef: 'updated_at', header: 'Última Actualización', cell: ( row ) => row.updated_at },
    ];

    public override data: CompanyUserType[] = [];

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
    }
}
