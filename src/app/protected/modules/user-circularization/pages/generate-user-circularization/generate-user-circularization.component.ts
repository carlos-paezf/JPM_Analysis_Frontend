import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCircularizationService } from '../../services/user-circularization.service';
import { CircularizationData, DepartmentType } from '../../../../../shared/types';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { MatAccordion } from '@angular/material/expansion';
import { DepartmentsService } from '../../../departments/services/departments.service';

@Component( {
    selector: 'app-generate-user-circularization',
    templateUrl: './generate-user-circularization.component.html',
    styleUrls: [ './generate-user-circularization.component.scss' ]
} )
export class GenerateUserCircularizationComponent implements OnInit {
    @ViewChild( MatAccordion ) accordion!: MatAccordion;

    public circularizationData: CircularizationData[] = [];
    public isLoadingResults: boolean = false;
    public isEmptyResults: boolean = false;
    public departmentsData: DepartmentType[] = [];


    constructor (
        private readonly _userCircularizationService: UserCircularizationService,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
        private readonly _departmentsService: DepartmentsService
    ) { }

    ngOnInit (): void {
        this._departmentsService.getAll().subscribe( {
            next: ( { data } ) => {
                this.departmentsData = data;
            },
            error: error => this._appUtilsMessagesService.showQueryErrorMessage( error )
        } );
    }


    generateUserCircularization () {
        this.isLoadingResults = true;
        this._userCircularizationService.generateUserCircularization().subscribe(
            {
                next: response => {
                    this.circularizationData = response;
                    if ( response.length > 0 ) {
                        this.isEmptyResults = false;
                    }
                },
                error: error => this._appUtilsMessagesService.showQueryErrorMessage( error )
            }
        );
        this.isLoadingResults = false;
    }
}
