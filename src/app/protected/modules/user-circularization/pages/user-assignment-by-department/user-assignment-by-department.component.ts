import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { CompanyUserType, DepartmentType, UserDepartmentAssignmentType } from '../../../../../shared/types';
import { CompanyUsersService } from '../../../company-users/services/company-users.service';
import { DepartmentsService } from '../../services/departments.service';
import { UserCircularizationService } from '../../services/user-circularization.service';


@Component( {
    selector: 'app-user-assignment-by-department',
    templateUrl: './user-assignment-by-department.component.html',
    styleUrls: [ './user-assignment-by-department.component.scss' ]
} )
export class UserAssignmentByDepartmentComponent implements OnInit {
    public departments: DepartmentType[] = [];
    public companyUsers: CompanyUserType[] = [];
    public isLoading: boolean = true;
    public updatedUserDepartmentList: UserDepartmentAssignmentType[] = [];


    constructor (
        private readonly _departmentsService: DepartmentsService,
        private readonly _companyUsersService: CompanyUsersService,
        private readonly _userCircularizationService: UserCircularizationService,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
    ) { }


    /**
     * The `ngOnInit` function initializes data by fetching departments and company users concurrently
     * using `forkJoin` in TypeScript.
     */
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


    /**
     * The function `updateDepartment` updates the department initials for a company user based on
     * their access ID.
     * @param {string} accessId - The `accessId` parameter is a string that represents the unique
     * identifier for a company user.
     * @param {string} departmentInitials - The `departmentInitials` parameter in the
     * `updateDepartment` function represents the initials of the department to which you want to
     * update the user's association.
     * @returns The `updateDepartment` function returns `void`, which means it does not return any
     * value.
     */
    updateDepartment ( accessId: string, departmentInitials: string ): void {
        const companyUser = this.companyUsers.find( companyUser => companyUser.accessId === accessId );
        const department = this.departments.find( department => department.initials === departmentInitials );

        if ( !companyUser || !department ) {
            return;
        }

        if ( this.updatedUserDepartmentList.some( x => x.accessId === accessId && x.departmentInitials === departmentInitials ) ) {
            return;
        }

        if ( this.updatedUserDepartmentList.some( x => x.accessId === accessId ) ) {
            this.updatedUserDepartmentList.forEach( x => {
                if ( x.accessId === accessId ) {
                    x.departmentInitials = departmentInitials;
                }
            } );
            return;
        }

        this.updatedUserDepartmentList.push( { accessId, departmentInitials } );
        return;
    }


    /**
     * The onSubmit function assigns departments to company users and displays success or error
     * messages accordingly.
     */
    onSubmit (): void {
        this._userCircularizationService.assignDepartmentToCompanyUsers( this.updatedUserDepartmentList )
            .subscribe( {
                next: () => this._appUtilsMessagesService.showUpdateSuccessMessage(),
                error: ( error ) => this._appUtilsMessagesService.showQueryErrorMessage( error )
            } );
    }
}
