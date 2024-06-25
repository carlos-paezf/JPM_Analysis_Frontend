import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from '../../../../../shared/classes/custom-validators.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';
import { CompareSeedResponseType, FormBaseType, PostSeedResponseType, UploadFileResponseType } from '../../../../../shared/types';
import { FileActionTypeEnum } from '../../../../constants';
import { UploadFileService } from '../../services/upload-file.service';


/**
 * The FormComponent class is a TypeScript component that handles form submission, 
 * file upload, and validation. 
 *
 * @author cpaezfer
 */
@Component( {
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: [ './form.component.scss' ]
} )
export class FormComponent extends CustomValidators implements FormBaseType, OnInit {
    public form!: FormGroup;
    public initialFormValues!: FormGroup<any>;
    public submitted: boolean = false;


    constructor (
        private readonly _formBuilder: FormBuilder,
        private readonly _uploadFileService: UploadFileService,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _router: Router
    ) {
        super();
    }


    ngOnInit (): void {
        this.form = this._formBuilder.group( {
            file: [ null, Validators.required ],
            action: [ FileActionTypeEnum.compare, Validators.required ],
            observations: [ null ]
        } );
    }


    /**
     * This function returns the value of the fileTypeControl or a default value of
     * FileTypeEnum.analysis.
     * @returns The `getFileTypeValue()` function is returning a value of type `FileTypeEnum`. The value
     * returned is the value of the `fileTypeControl` property, or `FileTypeEnum.analysis` if
     * `fileTypeControl` is falsy.
     */
    getActionValue (): FileActionTypeEnum {
        return this.form.get( "action" )?.value || FileActionTypeEnum.compare;
    }


    /**
     * This function handles the submission of a file form, checking if a file has been uploaded and
     * sending it for analysis.
     * @returns a success message from the `_toastrNotificationService` indicating that the file has
     * been uploaded successfully for analysis.
     */
    onSubmit (): void {
        this.form.markAllAsTouched();

        if ( this._validateRequiredFields() ) return this._appUtilsMessagesService.showValidationError();

        const { file, observations, action } = this.form.value;

        if ( action === FileActionTypeEnum.load ) {
            const isConfirmedUpdate = window.confirm( "¿Estás seguro de reemplazar todos los datos con la nueva información?" );

            if ( !isConfirmedUpdate ) return this._appUtilsMessagesService.showUpdateCancelledMessage();
        }

        this._uploadFileService.uploadFile( { file, observations, action } ).subscribe(
            {
                next: ( response: UploadFileResponseType ) => {
                    this.submitted = true;

                    if ( response.action == FileActionTypeEnum.load ) {
                        this._uploadFileService.setPostResultData( response.result as PostSeedResponseType );
                        this._appUtilsMessagesService.showUpdateSuccessMessage();
                        return this._router.navigateByUrl( 'file-upload/post-result' );
                    }

                    else {
                        this._uploadFileService.setCompareResultData( response.result as CompareSeedResponseType );

                        this._toastrNotificationService.success( {
                            title: 'Comparación completada',
                            message: "Será redirigido a la página con los resultados"
                        } );
                        return this._router.navigateByUrl( 'file-upload/compare-result' );
                    }
                },
                error: ( error ) => {
                    this._appUtilsMessagesService.showQueryErrorMessage( error );
                }
            }
        );
    }


    /**
     * The `onRestartForm` function resets the form to its initial values in TypeScript.
     */
    onRestartForm (): void {
        this.form.reset( this.initialFormValues );
    }


    /**
     * This function sets the input file to a given file object.
     * @param {File} file - The "file" parameter is a variable that represents a file object. It is
     * likely used as an input parameter for a function or method that needs to read or manipulate the
     * contents of the file.
     */
    setFile ( file: File ) {
        this.form.get( 'file' )!.setValue( file );
    }


    /**
     * The function checks if a file is required before submitting a form and returns an error message
     * if it is not loaded.
     * @returns The `get fileError()` function is returning a message that says "Se debe cargar un
     * archivo antes de enviar el formulario" which translates to "A file must be uploaded before
     * submitting the form" in English. If the 'file' field is required and no file has been uploaded,
     * this message will be returned. Otherwise, an empty string will be returned.
     */
    get fileError () {
        if ( this.form.get( 'file' )!.getError( 'required' ) )
            return 'Se debe cargar un archivo antes de enviar el formulario';

        return '';
    }


    /**
     * The function `_validateRequiredFields` checks if certain fields in a form are required and
     * returns true if any of them are empty.
     * @param fields - The `fields` parameter is an optional array that contains the names of the
     * fields that need to be validated. By default, it is set to `[ 'file', 'fileType', 'observations'
     * ]`.
     * @returns a boolean value. It returns true if any of the fields in the "fields" array have the
     * "required" error in the form controls, otherwise it returns false.
     */
    private _validateRequiredFields ( fields = [ 'file', 'action', 'observations' ] ) {
        for ( const field of fields ) {
            if ( this.form.controls[ field ].getError( 'required' ) ) return true;
        }
        return false;
    }
}
