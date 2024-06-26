import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { AuthUsersService } from '../../../../../shared/services/auth-users.service';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';
import { FormBaseType, ProductType } from '../../../../../shared/types';
import { ProductsService } from '../../services/products.service';


@Component( {
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: [ './admin-products.component.scss' ]
} )
export class AdminProductsComponent extends BaseDetailClass<ProductType> implements FormBaseType, OnInit {
    public form!: FormGroup;
    public initialFormValues!: FormGroup<any>;
    public submitted: boolean = false;

    public isDataChanged: boolean = false;
    public isAdminUser: boolean = false;

    constructor (
        private readonly _activateRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _location: Location,
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _productsService: ProductsService,
        private readonly _authUserService: AuthUsersService,
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

        this._activateRoute.params.subscribe( params => {
            this.id = params[ 'id' ];
            this.isLoading = true;

            this._productsService.getById( this.id )
                .subscribe( response => {
                    this.data = response;
                    this.isLoading = false;
                    this.formActions();
                } );
        } );
    }

    /**
     * The function sets up a form with pre-filled values and disables it if the user is not an admin,
     * and also listens for changes in the form values.
     * @returns If the `this.data` property is falsy (e.g. null, undefined, false), then nothing is
     * being returned. The function will exit early and no further code will be executed.
     */
    formActions () {
        if ( !this.data ) return;

        this.form = this._formBuilder.group( {
            // Required properties
            productName: [ this.data.productName, Validators.required ],
            // Optional properties
            subProduct: [ this.data.subProduct ],
            // Control Date properties
            createdAt: [ { value: this.data.createdAt, disabled: true } ],
            updatedAt: [ { value: this.data.updatedAt, disabled: true } ],
            deletedAt: [ { value: this.data.deletedAt, disabled: true } ],
        } );

        this.isAdminUser || this.form.disable();

        this.form.valueChanges.subscribe( _ => {
            this.isDataChanged = true;
        } );

        this.initialFormValues = this.form.getRawValue();
    }


    /**
     * This function handles the submission of a form to update a product, performing various checks
     * and displaying notifications based on the outcome.
     * @returns the result of the `_location.back()` method.
     */
    onSubmit () {
        if ( !this.isAdminUser ) return this._appUtilMessagesService.showNoPermissionError();

        if ( !this.form.valid ) return this._appUtilMessagesService.showValidationError();

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información del producto ${ this.data!.subProduct ?? this.data!.productName }?` );

        if ( !isConfirmedUpdate ) return this._appUtilMessagesService.showUpdateCancelledMessage();

        this._productsService.update(
            this.id,
            {
                id: this.id,
                productName: this.form.get( "productName" )!.value,
                subProduct: this.form.get( "subProduct" )?.value
            } as ProductType
        ).subscribe(
            {
                next: () => {
                    this._appUtilMessagesService.showUpdateSuccessMessage();
                    this.submitted = true;
                    this._location.back();
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
