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
        'profileName',
        'createdAt',
        'updatedAt',
    ];

    public override columns: ColumnTableType<ProfileType>[] = [
        { columnDef: 'id', header: 'ID', cell: ( row ) => row.id },
        { columnDef: 'profileName', header: 'Nombre de Perfil', cell: ( row ) => row.profileName },
        { columnDef: 'createdAt', header: 'Fecha de creación', cell: ( row ) => row.createdAt },
        { columnDef: 'updatedAt', header: 'Fecha de última actualización', cell: ( row ) => row.updatedAt },
    ];

    public deleteProfile!: Function;

    constructor ( private _profilesService: ProfilesService ) {
        super();
    }

    ngOnInit (): void {
        this._profilesService.getAll()
            .subscribe( ( response ) => {
                this.data = response.data;
                this.isEmptyTable = ( response.data.length <= 0 );
                this.isLoadingResults = false;
            } );
    }
}
