import { Component, OnInit } from '@angular/core';
import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { ColumnTableType, ProfileType } from '../../../../../shared/types';
import { ProfilesService } from '../../services/profiles.service';


@Component( {
    selector: 'app-list-profiles',
    templateUrl: './list-profiles.component.html',
    styleUrls: [ './list-profiles.component.scss' ]
} )
export class ListProfilesComponent extends InfoTableBaseComponent<ProfileType> implements OnInit {
    public override displayedColumns: string[] = [
        'id',
        'profile_name',
        // 'created_at',
        'updated_at',
        'deleted_at',
    ];

    public override columns: ColumnTableType<ProfileType>[] = [
        { columnDef: 'id', header: 'ID', cell: ( row ) => row.id },
        { columnDef: 'profile_name', header: 'Nombre de Perfil', cell: ( row ) => row.profile_name },
        { columnDef: 'created_at', header: 'Fecha de creación', cell: ( row ) => row.created_at },
        { columnDef: 'updated_at', header: 'Fecha de última actualización', cell: ( row ) => row.updated_at },
        { columnDef: 'deleted_at', header: 'Fecha de desactivación', cell: ( row ) => row.deleted_at },
    ];

    public deleteProfile!: Function;

    constructor ( private _profilesService: ProfilesService ) {
        super();
    }

    ngOnInit (): void {
        this._profilesService.getProfiles()
            .subscribe( ( response ) => {
                this.data = response.data;
                this.isEmptyTable = ( response.data.length <= 0 );
                this.isLoadingResults = false;
            } );
        this.deleteProfile = this._profilesService.deleteProfile;
    }
}
