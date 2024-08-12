import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { SessionStorageService } from '../../../../../shared/services/session-storage.service';
import { CircularizationData, ColumnTableType, UserCompanyCircularizationType } from '../../../../../shared/types';


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

    @Input() circularizationData!: CircularizationData;

    constructor (
        private readonly _router: Router,
        private readonly _sessionStorageService: SessionStorageService<CircularizationData>
    ) {
        super();
    }

    /**
     * The ngOnInit function retrieves users data from a service and assigns it to the component's data
     * property, while also updating the component's isLoadingResults and isEmptyTable properties
     * accordingly.
     */
    ngOnInit (): void {
        this.data = this.circularizationData.users;
        this.isEmptyTable = this.data.length <= 0;
        this.isLoadingResults = false;
    }


    /**
     * The function `redirectToCircularizationEmail` saves circularization data to session storage and
     * navigates to the circularization email page.
     */
    redirectToCircularizationEmail (): void {
        this._sessionStorageService.setItem( 'circularizationData', this.circularizationData );
        this._router.navigateByUrl( "/user-circularization/circularization-email" );
    }
}
