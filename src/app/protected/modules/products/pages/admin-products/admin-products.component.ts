import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
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

            this._productsService.getProductById( this.id )
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
            productName: [ this.data.productName ],
            subProduct: [ this.data.subProduct ],
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
     * This function handles the submission of a form to update a product, performing various checks
     * and displaying notifications based on the outcome.
     * @returns the result of the `_location.back()` method.
     */
    onSubmit () {
        if ( !this.isAdminUser ) return this._toastrNotificationService.error( {
            title: 'Error',
            message: 'No cuentas con permisos para actualizar el producto'
        } );

        if ( !this.form.valid ) return this._toastrNotificationService.warning( {
            title: 'Actualización fallida',
            message: 'Por favor, confirma que la información sea valida'
        } );

        const isConfirmedUpdate = window.confirm( `¿Confirma la actualización en la información del producto ${ this.data!.subProduct ?? this.data!.productName }?` );

        if ( !isConfirmedUpdate ) return this._toastrNotificationService.info( {
            title: 'Actualización Cancelada',
            message: 'Se canceló la actualización del producto'
        } );

        this._productsService.updateProduct( this.id, this.form.value );

        this._toastrNotificationService.success( {
            title: 'Actualización exitosa',
            message: 'La información del producto ha sido actualizada correctamente'
        } );

        this.submitted = true;

        return this._location.back();
    }
}
