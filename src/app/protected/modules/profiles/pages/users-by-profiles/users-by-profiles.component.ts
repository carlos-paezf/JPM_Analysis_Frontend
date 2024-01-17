import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';
import { ColumnTableType, CompanyUserType, ProfileType } from '../../../../../shared/types';
import { ProfilesService } from '../../services/profiles.service';
import { MatAccordion } from '@angular/material/expansion';

@Component( {
    selector: 'app-users-by-profiles',
    templateUrl: './users-by-profiles.component.html',
    styleUrls: [ './users-by-profiles.component.scss' ]
} )
export class UsersByProfilesComponent implements OnInit {
    public isLoadingResults: boolean = true;
    public isEmptyResults: boolean = true;
    public profilesData: ProfileType[] = [];


    @ViewChild( MatAccordion ) accordion!: MatAccordion;

    constructor ( private _profilesService: ProfilesService ) { }

    ngOnInit (): void {
        this._profilesService.getProfiles()
            .subscribe( ( response ) => {
                this.profilesData = response.data;
                this.isEmptyResults = ( response.data.length <= 0 );
                this.isLoadingResults = false;
            } );
    }

}
