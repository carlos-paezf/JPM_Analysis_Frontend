import { Component, OnInit } from '@angular/core';

import { DepartmentsService } from '../../../departments/services/departments.service';
import { CompanyUsersService } from '../../../company-users/services/company-users.service';
import { CompanyUserType, DepartmentType } from '../../../../../shared/types';
import { forkJoin } from 'rxjs';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';


@Component( {
    selector: 'app-user-assignment-by-department',
    templateUrl: './user-assignment-by-department.component.html',
    styleUrls: [ './user-assignment-by-department.component.scss' ]
} )
export class UserAssignmentByDepartmentComponent implements OnInit {
    public departments: DepartmentType[] = [];
    public companyUsers: CompanyUserType[] = [];
    public isLoading: boolean = true;


    constructor (
        private readonly _departmentsService: DepartmentsService,
        private readonly _companyUsersService: CompanyUsersService,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService
    ) { }


    ngOnInit (): void {
        this.isLoading = true;

        forkJoin(
            [
                this._departmentsService.getAll(),
                this._companyUsersService.getAll()
            ]
        ).subscribe( {
            next: ( [ departmentResponse, companyUserResponse ] ) => {
                this.departments = departmentResponse.data;
                this.companyUsers = companyUserResponse.data;
                this.isLoading = false;
            },
            error: ( error ) => {
                this.isLoading = false;
                this._appUtilsMessagesService.showQueryErrorMessage( error );
            }
        } );

    }
}
