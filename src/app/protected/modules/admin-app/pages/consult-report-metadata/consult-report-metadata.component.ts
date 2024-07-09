import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { FormBaseType, ReportHistoryType } from '../../../../../shared/types';
import { AdminAppService } from '../../services/admin-app.service';


@Component( {
    selector: 'app-consult-report-metadata',
    templateUrl: './consult-report-metadata.component.html',
    styleUrls: [ './consult-report-metadata.component.scss' ]
} )
export class ConsultReportMetadataComponent extends BaseDetailClass<ReportHistoryType> implements FormBaseType, OnInit {
    public form!: FormGroup;
    public submitted: boolean = false;
    public initialFormValues!: FormGroup<any>;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _adminAppService: AdminAppService,
        private readonly _authUserService: AuthUsersService,
    ) {
        super();
    }

    /**
     * The ngOnInit function initializes the component by checking if the user is an admin, setting
     * profile information, and retrieving company user data based on the access ID parameter.
     */
    ngOnInit (): void {
        this.isAdminUser = this._authUserService.getIsAdminAppUser();

        this._activateRoute.params.subscribe( params => {
            this.id = params[ 'reportId' ];
            this.isLoading = true;

            this._adminAppService.getReportById( this.id )
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
            // runReportDate: [ { value: this.formatDate( this.data.runReportDate ) }, Validators.required ],
            // reportUploadDate: [ { value: this.formatDate( this.data.reportUploadDate ) }, Validators.required ],
            runReportDate: [ this.data.runReportDate, Validators.required ],
            reportUploadDate: [ this.data.reportUploadDate, Validators.required ],
            appUserId: [ this.data.appUserId, Validators.required ],
            reportName: [ this.data.reportName, Validators.required ],
            reportComments: [ this.data.reportComments, Validators.required ],
        } );

        console.log( this.formatDate( this.data!.runReportDate ) );
        this.form.disable();
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

    onSubmit () {
        throw new Error( 'Method not implemented.' );
    }

    onRestartForm (): void {
        throw new Error( 'Method not implemented.' );
    }
}
