import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FileTypeEnum } from '../../../../constants';
import { UploadFileService } from '../../services/upload-file.service';
import { Router } from '@angular/router';
import { CustomValidators } from '../../../../../shared/classes/custom-validators.class';
import { FormBaseType } from '../../../../../shared/types';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';

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
    public fileControl = new FormControl<File | null>( null, [ Validators.required ] );
    public fileTypeControl = new FormControl( FileTypeEnum.analysis, [ Validators.required ] );
    public observationsControl = new FormControl<string | null>( null );

    public form!: FormGroup;
    public submitted: boolean = false;

    constructor (
        private readonly _formBuilder: FormBuilder,
        private readonly _uploadFileService: UploadFileService,
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _router: Router
    ) {
        super();
    }

    ngOnInit (): void {
        this.form = this._formBuilder.group( {
            file: this.fileControl,
            fileType: this.fileTypeControl,
            observations: this.fileTypeControl,
        } );
    }

    /**
     * This function returns the value of the fileTypeControl or a default value of
     * FileTypeEnum.analysis.
     * @returns The `getFileTypeValue()` function is returning a value of type `FileTypeEnum`. The value
     * returned is the value of the `fileTypeControl` property, or `FileTypeEnum.analysis` if
     * `fileTypeControl` is falsy.
     */
    getFileTypeValue (): FileTypeEnum {
        return this.fileTypeControl.value || FileTypeEnum.analysis;
    }

    /**
     * This function handles the submission of a file form, checking if a file has been uploaded and
     * sending it for analysis.
     * @returns a success message from the `_toastrNotificationService` indicating that the file has
     * been uploaded successfully for analysis.
     */
    onSubmit (): void {
        this.form.markAllAsTouched();

        if ( this._validateRequiredFields() ) return this._toastrNotificationService.warning( {
            title: 'Advertencia',
            message: 'Por favor, complete los campos obligatorios del formulario'
        } );

        const { file, observations, fileType } = this.form.value;

        this._uploadFileService.uploadFile( { file, observations, fileType } );

        this._router.navigateByUrl( 'dashboard' );

        this.submitted = true;

        return this._toastrNotificationService.success( {
            title: 'Envío de formulario exitoso',
            message: 'El archivo ha sido cargado correctamente para su análisis'
        } );
    }

    /**
     * This function sets the input file to a given file object.
     * @param {File} file - The "file" parameter is a variable that represents a file object. It is
     * likely used as an input parameter for a function or method that needs to read or manipulate the
     * contents of the file.
     */
    setFile ( file: File ) {
        this.fileControl.setValue( file );
    }

    get fileError () {
        if ( this.fileControl.getError( 'required' ) )
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
    private _validateRequiredFields ( fields = [ 'file', 'fileType', 'observations' ] ) {
        for ( const field of fields ) {
            if ( this.form.controls[ field ].getError( 'required' ) ) return true;
        }
        return false;
    }
}
