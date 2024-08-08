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
        'accessId',
        'userStatus',
        'userLogonType',
        'profileId',
        'updatedAt',
    ];

    public override columns: ColumnTableType<CompanyUserType>[] = [
        { columnDef: 'userName', header: 'Nombre de usuario', cell: ( row ) => row.userName },
        { columnDef: 'accessId', header: 'Id de acceso', cell: ( row ) => row.accessId },
        { columnDef: 'userStatus', header: 'Estado', cell: ( row ) => row.userStatus },
        { columnDef: 'userType', header: 'Tipo', cell: ( row ) => row.userType },
        { columnDef: 'employeeId', header: 'Id de empleado', cell: ( row ) => row.employeeId },
        { columnDef: 'emailAddress', header: 'Correo Electrónico', cell: ( row ) => row.emailAddress },
        { columnDef: 'userLocation', header: 'Ubicación', cell: ( row ) => row.userLocation },
        { columnDef: 'userCountry', header: 'País', cell: ( row ) => row.userCountry },
        { columnDef: 'userLogonType', header: 'Tipo de Ingreso', cell: ( row ) => row.userLogonType },
        { columnDef: 'userLastLogonDt', header: 'Última fecha de Ingreso', cell: ( row ) => row.userLastLogonDt },
        { columnDef: 'userGroupMembership', header: 'Membresía de Grupo', cell: ( row ) => row.userGroupMembership },
        { columnDef: 'userRole', header: 'Rol', cell: ( row ) => row.userRole },
        { columnDef: 'profileId', header: 'Perfil', cell: ( row ) => row.profileId },
        { columnDef: 'updatedAt', header: 'Última Actualización', cell: ( row ) => new Date( row.updatedAt ).toLocaleString() },
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
