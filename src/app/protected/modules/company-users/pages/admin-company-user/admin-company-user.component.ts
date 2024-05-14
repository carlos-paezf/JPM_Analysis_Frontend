import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { CompanyUserEagerType, FormBaseType, ProfileType } from '../../../../../shared/types';
import { CompanyUsersService } from '../../services/company-users.service';
import { ProfilesService } from '../../../profiles/services/profiles.service';


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

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    public profilesInfo: ProfileType[] = [];

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _companyUsersService: CompanyUsersService,
        private readonly _authUserService: AuthUsersService,
        private readonly _profilesService: ProfilesService,
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
            accessId: [ { value: this.data.accessId, disabled: true }, Validators.required ],
            userName: [ this.data.userName, Validators.required ],
            userStatus: [ this.data.userStatus, Validators.required ],
            userType: [ this.data.userType, Validators.required ],
            employeeId: [ this.data.employeeId ],
            emailAddress: [ this.data.emailAddress, Validators.required ],
            userLocation: [ this.data.userLocation ],
            userCountry: [ this.data.userCountry, Validators.required ],
            userLogonType: [ this.data.userLogonType, Validators.required ],
            userLastLogonDt: [ this.data.userLastLogonDt ],
            userLogonStatus: [ this.data.userLogonStatus, Validators.required ],
            userGroupMembership: [ this.data.userGroupMembership ],
            userRole: [ this.data.userRole ],
            profileId: [ this.data.profileId, Validators.required ],
            createdAt: [ { value: this.data.createdAt, disabled: true } ],
            updatedAt: [ { value: this.data.updatedAt, disabled: true } ],
            deletedAt: [ { value: this.data.deletedAt, disabled: true } ],
        } );

        this.isAdminUser || this.form.disable();

        this.form.valueChanges.subscribe( {
            next: () => { this.isDataChanged = true; }
        } );
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
            { accessId: this.data!.accessId, ...this.form.value }
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
}
