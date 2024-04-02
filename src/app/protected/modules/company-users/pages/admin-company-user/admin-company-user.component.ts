import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';
import { CompanyUserType, FormBaseType, ProfileType } from '../../../../../shared/types';
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
export class AdminCompanyUserComponent extends BaseDetailClass<CompanyUserType> implements FormBaseType, OnInit {
    public form!: FormGroup;
    public submitted: boolean = false;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    public profilesInfo: ProfileType[] = [];

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _location: Location,
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _companyUsersService: CompanyUsersService,
        private readonly _authUserService: AuthUsersService,
        private readonly _profileService: ProfilesService
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

            this._companyUsersService.getCompanyUserByAccessId( this.id )
                .subscribe( response => {
                    this.data = response;
                    this.isLoading = false;
                    this.formActions();
                } );
        } );
    }

    /**
     * The function `_setProfilesInfo` retrieves profiles information from a service and assigns it to
     * the `profilesInfo` variable.
     */
    private _setProfilesInfo () {
        this._profileService.getProfiles().subscribe( value => {
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
            accessId: [ this.data.accessId ],
            userName: [ this.data.userName ],
            userStatus: [ this.data.userStatus ],
            userType: [ this.data.userType ],
            employeeId: [ this.data.employeeId ],
            emailAddress: [ this.data.emailAddress ],
            userLocation: [ this.data.userLocation ],
            userCountry: [ this.data.userCountry ],
            userLogonType: [ this.data.userLogonType ],
            userLastLogonDt: [ this.data.userLastLogonDt ],
            userLogonStatus: [ this.data.userLogonStatus ],
            userGroupMembership: [ this.data.userGroupMembership ],
            userRole: [ this.data.userRole ],
            profileId: [ this.data.profileId ],
            createdAt: [ { value: this.data.createdAt, disabled: true } ],
            updatedAt: [ { value: this.data.updatedAt, disabled: true } ],
            deletedAt: [ { value: this.data.deletedAt, disabled: true } ],
        } );

        this.isAdminUser || this.form.disable();

        this.form.valueChanges.subscribe( _ => {
            this.isDataChanged = true;
        } );
    }

    /**
     * The onSubmit function checks if the user is an admin, validates the profile form, updates the
     * profile, and displays success or error messages.
     * @returns a toastr notification object.
     */
    onSubmit () {
        if ( !this.isAdminUser ) return this._toastrNotificationService.error( {
            title: 'Error',
            message: 'No cuentas con permisos para actualizar el company user'
        } );

        if ( !this.form.valid ) return this._toastrNotificationService.warning( {
            title: 'Actualización fallida',
            message: 'Por favor, confirma que la información sea valida'
        } );

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información del company user ${ this.data!.userName }?` );

        if ( !isConfirmedUpdate ) return this._toastrNotificationService.info( {
            title: 'Actualización Cancelada',
            message: 'Se canceló la actualización del company user'
        } );

        this._companyUsersService.updateCompanyUser( this.id, this.form.value );

        this._toastrNotificationService.success( {
            title: 'Actualización exitosa',
            message: 'La información del company user ha sido actualizada correctamente'
        } );

        this.submitted = true;

        return this._location.back();
    }
}
