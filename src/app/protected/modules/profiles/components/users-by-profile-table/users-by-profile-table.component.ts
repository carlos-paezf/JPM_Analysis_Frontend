import { Component, Input, OnInit } from '@angular/core';

import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ColumnTableType, CompanyUserType } from '../../../../../shared/types';
import { ProfilesService } from '../../services/profiles.service';


@Component( {
    selector: 'app-users-by-profile-table',
    templateUrl: './users-by-profile-table.component.html',
    styleUrls: [ './users-by-profile-table.component.scss' ]
} )
export class UsersByProfileTableComponent extends InfoTableBaseComponent<CompanyUserType> implements OnInit {
    public override displayedColumns: string[] = [
        'userName',
        'userStatus',
        'emailAddress',
        'userLogonType',
        'profileId',
        'updatedAt',
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
    ];

    @Input() profileId!: string;

    constructor (
        private _appUtilsMessages: AppUtilsMessagesService,
        private _profilesService: ProfilesService
    ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this._profilesService.getById( this.profileId )
            .subscribe( {
                next: ( response ) => {
                    this.data = response === null ? [] : response.companyUsers;
                    this.isEmptyTable = ( this.data.length <= 0 );
                    this.isLoadingResults = false;
                },
                error: ( error ) => { this._appUtilsMessages.showQueryErrorMessage( error ); }
            } );
    }
}
