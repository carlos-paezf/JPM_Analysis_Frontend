import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { CompanyUserEagerType, DepartmentType, FormBaseType, ProfileType } from '../../../../../shared/types';
import { DepartmentsService } from '../../../departments/services/departments.service';
import { ProfilesService } from '../../../profiles/services/profiles.service';
import { CompanyUsersService } from '../../services/company-users.service';


/**
 * The `AdminCompanyUserComponent` class is a TypeScript component that handles the 
 * administration of company user profiles, including form creation, data retrieval, 
 * and updating user information. 
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-admin-company-user',
    templateUrl: './admin-company-user.component.html',
    styleUrls: [ './admin-company-user.component.scss' ]
} )
export class AdminCompanyUserComponent extends BaseDetailClass<CompanyUserEagerType> implements FormBaseType, OnInit {
    public form!: FormGroup;
    public submitted: boolean = false;
    public initialFormValues!: FormGroup<any>;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    public profilesInfo: ProfileType[] = [];
    public departmentsInfo: DepartmentType[] = [];

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _companyUsersService: CompanyUsersService,
        private readonly _authUserService: AuthUsersService,
        private readonly _profilesService: ProfilesService,
        private readonly _departmentsService: DepartmentsService,
        private readonly _appUtilMessagesService: AppUtilsMessagesService
    ) {
        super();
    }

    /**
     * The ngOnInit function initializes the component by checking if the user is an admin, setting
     * profile information, and retrieving company user data based on the access ID parameter.
     */
    ngOnInit (): void {
        this.isAdminUser = this._authUserService.getIsAdminAppUser();
        this._setProfilesInfo();
        this._setDepartmentsInfo();


        this._activateRoute.params.subscribe( params => {
            this.id = params[ 'accessId' ];
            this.isLoading = true;

            this._companyUsersService.getById( this.id )
                .subscribe( {
                    next: response => {
                        this.data = response;
                        this.isLoading = false;
                        this.formActions();
                    },
                    error: ( error ) => {
                        this.data = null;
                        this.isLoading = false;
                    }
                } );
        } );
    }

    /**
     * The function `_setProfilesInfo` retrieves profiles information from a service and assigns it to
     * the `profilesInfo` variable.
     */
    private _setProfilesInfo () {
        this._profilesService.getAll().subscribe( value => {
            this.profilesInfo = value.data;
        } );
    }



    private _setDepartmentsInfo () {
        this._departmentsService.getAll().subscribe( value => {
            this.departmentsInfo = value.data;
            console.log( this.departmentsInfo );
        } );
    }

    /**
     * The function `formActions` creates a form using the FormBuilder module in Angular, sets the
     * initial values of the form fields based on the data object, disables the form if the user is not
     * an admin, and listens for changes in the form values to set a flag indicating that the data has
     * been changed.
     * @returns nothing (undefined) if the `this.data` is falsy.
     */
    formActions () {
        if ( !this.data ) return;

        this.form = this._formBuilder.group( {
            // Required properties
            userName: [ this.data.userName, Validators.required ],
            windowsUserId: [ this.data.windowsUserId, Validators.required ],
            emailAddress: [ this.data.emailAddress, [ Validators.required, Validators.email ] ],
            userType: [ this.data.userType, Validators.required ],
            profileId: [ this.data.profileId, Validators.required ],
            userStatus: [ this.data.userStatus, Validators.required ],
            userCountry: [ this.data.userCountry, Validators.required ],
            // Optional properties
            userLocation: [ this.data.userLocation ],
            departmentInitials: [ this.data.departmentInitials ],
            // Disabled properties
            accessId: [ { value: this.data.accessId, disabled: true }, [ Validators.required ] ],
            userLogonType: [ { value: this.data.userLogonType, disabled: true } ],
            userLastLogonDt: [ { value: this.formatDate( this.data.userLastLogonDt ), disabled: true } ],
            userLogonStatus: [ { value: this.data.userLogonStatus, disabled: true }, Validators.required ],
            // Control Date properties
            createdAt: [ { value: this.data.createdAt, disabled: true } ],
            updatedAt: [ { value: this.data.updatedAt, disabled: true } ],
            deletedAt: [ { value: this.data.deletedAt, disabled: true } ],
            // Unused properties
            userRole: [ this.data.userRole ],
            employeeId: [ this.data.employeeId ],
            userGroupMembership: [ this.data.userGroupMembership ],
        } );

        this.isAdminUser || this.form.disable();

        this.form.valueChanges.subscribe( {
            next: () => { this.isDataChanged = true; }
        } );

        this.initialFormValues = this.form.getRawValue();
    }


    /**
     * This function retrieves the value of the "userStatus" field from a form.
     * @returns the value of the "userStatus" field from a form.
     */
    get userStatus () {
        return this.form.get( "userStatus" )!.value;
    }


    /**
     * The function `formatDate` takes a Date object or null as input and returns a string
     * representation of the date if it is not null.
     * @param {Date | null} date - The `date` parameter in the `formatDate` function is of type `Date`
     * or `null`, meaning it can either be a valid date object or `null`.
     * @returns The function `formatDate` is returning the string representation of the input date if
     * it is not null. If the input date is null, the function will return null.
     */
    public formatDate ( date: Date | null ) {
        return date && new Date( date ).toString();
    }


    /**
     * The onSubmit function checks if the user is an admin, validates the profile form, updates the
     * profile, and displays success or error messages.
     * @returns a toastr notification object.
     */
    onSubmit () {
        if ( !this.isAdminUser ) return this._appUtilMessagesService.showNoPermissionError();

        if ( !this.form.valid ) return this._appUtilMessagesService.showValidationError();

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información del company user ${ this.data!.userName }?` );

        if ( !isConfirmedUpdate ) return this._appUtilMessagesService.showUpdateCancelledMessage();

        this._companyUsersService.update(
            this.id,
            {
                accessId: this.data!.accessId, userLogonType: this.data!.userLogonType,
                userLogonStatus: this.data!.userLogonStatus, userLastLogonDt: this.data?.userLastLogonDt,
                ...this.form.value
            }
        ).subscribe(
            {
                next: () => {
                    this._appUtilMessagesService.showUpdateSuccessMessage();
                    this.submitted = true;
                    // return this._location.back();
                },
                error: ( error ) => this._appUtilMessagesService.showQueryErrorMessage( error )
            }
        );
    }

    /**
     * The `onRestartForm` function resets the form to its initial values in TypeScript.
     */
    onRestartForm (): void {
        this.form.reset( this.initialFormValues );
    }
}
