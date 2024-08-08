import { Component, Input, OnInit } from '@angular/core';

import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ColumnTableType, UserCompanyCircularizationType } from '../../../../../shared/types';
import { ProfilesService } from '../../../profiles/services/profiles.service';


@Component( {
    selector: 'app-users-by-department-table',
    templateUrl: './users-by-department-table.component.html',
    styleUrls: [ './users-by-department-table.component.scss' ]
} )
export class UsersByDepartmentTableComponent extends InfoTableBaseComponent<UserCompanyCircularizationType> implements OnInit {
    public override displayedColumns: string[] = [
        'userName',
        'accessId',
        'profileName',
        'status',
        'email',
    ];

    public override columns: ColumnTableType<UserCompanyCircularizationType>[] = [
        { columnDef: 'userName', header: 'Nombre de Usuario', cell: ( row ) => row.name },
        { columnDef: 'accessId', header: 'Access Id', cell: ( row ) => row.accessId },
        { columnDef: 'profileName', header: 'Nombre de Perfil', cell: ( row ) => row.profileName },
        { columnDef: 'status', header: 'Estado', cell: ( row ) => row.status },
        { columnDef: 'email', header: 'Email', cell: ( row ) => row.email },
    ];

    @Input() usersCompanyCircularization!: UserCompanyCircularizationType[];

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
        this.data = this.usersCompanyCircularization;
        this.isEmptyTable = this.data.length <= 0;
        this.isLoadingResults = false;
    }
}
