import { Component, OnInit } from '@angular/core';

import { CompareSeedResponseType } from '../../../../../shared/types';
import { UploadFileService } from '../../services/upload-file.service';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { Router } from '@angular/router';


@Component( {
    selector: 'app-compare-results',
    templateUrl: './compare-results.component.html',
    styleUrls: [ './compare-results.component.scss' ]
} )
export class CompareResultsComponent implements OnInit {
    results?: CompareSeedResponseType;

    constructor (
        private readonly _router: Router,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
        private readonly _uploadFileService: UploadFileService
    ) {
        this.results = this._uploadFileService.compareResultData || undefined;
    }


    ngOnInit (): void {
    }


    /**
     * The function `dataNumberCardChart` returns an array of objects containing data for different
     * categories with corresponding values and colors.
     * @returns An array of objects is being returned. Each object represents a category of data for a
     * chart and includes the name of the category, the corresponding value, and a color code for
     * visualization.
     */
    get dataNumberCardChart () {
        return [
            {
                name: "Registros en Base de Datos",
                value: this.results!.totalRowsInDatabase,
                color: "#7aa3e5"
            },
            {
                name: "Registros en Excel",
                value: this.results!.totalRowsInExcel,
                color: "#5AA454"
            },
            {
                name: "Nuevos registros",
                value: this.results!.totalNewEntities,
                color: "#aae3f5"
            },
            {
                name: "Registros con diferencias",
                value: this.results!.totalEntitiesWithDifferences,
                color: "#E44D25"
            },
            {
                name: "Registros a eliminar",
                value: this.results!.totalToDeleteEntities,
                color: "#a8385d"
            },
        ];
    }


    /**
     * The function `commonColumns` returns a nested object containing common column names for various
     * entities like account, user, function, product, profile, and user entitlement.
     * @returns The `getCommonColumns` function returns an object with keys representing different
     * entities such as account, companyUser, function, product, productAccount, profile,
     * profileFunction, and userEntitlement. Each key in the object corresponds to a specific entity
     * and contains another object with keys representing columns related to that entity and their
     * corresponding display names in Spanish.
     */
    get commonColumns (): { [ key: string ]: { [ key: string ]: string; }; } {
        return {
            account: {
                accountNumber: "Número de cuenta",
                accountName: "Nombre de cuenta",
                accountType: "Tipo de cuenta",
                bankCurrency: "Bank Currency"
            },
            companyUser: {
                accessId: "Access ID",
                userName: "Nombre de usuario",
                userStatus: "Estado",
                userType: "Tipo de usuario",
                employeeId: "ID de empleado",
                emailAddress: "Dirección de correo",
                userLocation: "Ubicación",
                userCountry: "País",
                userLogonType: "Tipo de Ingreso",
                userLastLogonDt: "Última fecha de Ingreso",
                userLogonStatus: "Estado de Ingreso",
                userGroupMembership: "Membresía de grupo",
                userRole: "Rol",
                profileId: "Id de perfil"
            },
            function: {
                id: "ID de función",
                functionName: "Nombre de función"
            },
            product: {
                id: "ID de producto",
                productName: "Nombre de producto",
                subProduct: "Sub Producto",
            },
            productAccount: {
                id: "ID del producto-cuenta",
                productId: "ID del producto",
                accountNumber: "ID de la cuenta"
            },
            profile: {
                id: "ID del perfil",
                profileName: "Nombre del perfil"
            },
            profileFunction: {
                id: "ID del perfil-función",
                profileId: "ID del perfil",
                functionId: "ID de la función"
            },
            userEntitlement: {
                id: "ID del título de usuario",
                accessId: "Access ID",
                accountNumber: "Número de cuenta",
                productId: "ID del producto",
                functionId: "ID de la función",
                functionType: "Tipo de función",
            }
        };
    }


    /**
     * The `approveChanges` function prompts the user to confirm changes, then calls a service to
     * approve and update data accordingly.
     * @returns If the user does not confirm the changes, the function will return a call to the
     * `_appUtilsMessagesService.showUpdateCancelledMessage()` method.
     */
    approveChanges () {
        const confirm = window.confirm( "¿Está seguro de aprobar los cambios? Esta acción podrá eliminar, cambiar información o añadir nuevos datos." );

        if ( !confirm ) return this._appUtilsMessagesService.showUpdateCancelledMessage();

        this._uploadFileService.approveChanges( {
            fileName: this.results!.fileName,
            runReportDate: this.results!.runReportDate,
            observations: this.results!.observations
        } ).subscribe(
            {
                next: ( response ) => {
                    this._appUtilsMessagesService.showUpdateSuccessMessage();
                    this._router.navigateByUrl( "" );
                },
                error: ( error ) => {
                    this._appUtilsMessagesService.showQueryErrorMessage( error );
                }
            }
        );
    }
}
