import { COMMA, ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

import { ToastrService } from 'ngx-toastr';
import { CustomValidators } from '../../../../../shared/classes/custom-validators.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { SessionStorageService } from '../../../../../shared/services/session-storage.service';
import { CircularizationData, FormBaseType } from '../../../../../shared/types';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';

@Component( {
    selector: 'app-circularization-email',
    templateUrl: './circularization-email.component.html',
    styleUrls: [ './circularization-email.component.scss' ]
} )
export class CircularizationEmailComponent extends CustomValidators implements OnInit, FormBaseType {
    public form!: FormGroup;
    public initialFormValues!: FormGroup<any>;
    public submitted: boolean = false;

    public addOnBlur = true;
    public readonly separatorKeysCodes = [ ENTER, COMMA, SEMICOLON ] as const;

    // public announcer: inject(LiveAnnouncer);

    public circularizationData: CircularizationData | null = null;

    public body: string = '';

    public reportDate!: string;
    public maximumDateForUpdate!: string;

    constructor (
        private readonly _formBuilder: FormBuilder,
        private readonly _sessionStorageService: SessionStorageService<CircularizationData>,
        private readonly _appUtilMessagesService: AppUtilsMessagesService,
        private readonly _toastrNotificationService: ToastrNotificationService
    ) {
        super();
        this.circularizationData = this._sessionStorageService.getItem( "circularizationData" );
    }


    ngOnInit (): void {
        this.generateCircularizationDate();
        this.formActions();
        this.generateBodyMessage();
    }


    formActions () {
        this.form = this._formBuilder.group( {
            toRecipients: [ [], [ Validators.required, Validators.email ] ],
            ccRecipients: [ [ 'DRCPI-Solicitud-de-Servicios@banrep.gov.co' ], [ Validators.required, Validators.email ] ],
            subject: [ `CIRCULARIZACIÓN DE USUARIOS JPMORGAN TI - ${ this.reportDate }`, Validators.required ]
        } );

        this.initialFormValues = this.form.getRawValue();
    }


    generateCircularizationDate () {
        const date = new Date( Date.now() );

        this.reportDate = date.toLocaleString().split( ',' ).at( 0 )!;

        date.setDate( date.getDate() + 15 );

        const months = [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];

        const day = date.getDate().toLocaleString( 'es-co', { minimumIntegerDigits: 2 } );
        const month = months[ date.getMonth() ];
        const year = date.getFullYear();

        this.maximumDateForUpdate = `${ day } de ${ month } de ${ year }`;
    }


    generateBodyMessage () {
        this.body = `
            <html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
                <body>
                    <h3>REVISIÓN Y DEPURACIÓN DE USUARIOS SISTEMA JPMorgan - ${ this.circularizationData?.department }</h3>

                    <p>
                        Atentamente solicitamos efectuar una revisión al siguiente reporte correspondiente a los
                        usuarios vigentes de JPMorgan TI con su respectivo perfil a la fecha. </br></br>

                        En caso de existir novedades, se deben solicitar en el SharePoint de InfoBanco a través de
                        servicio al cliente, buscando el servicio "Perfiles JPMorgan Chase" a más tardar el día ${ this.maximumDateForUpdate };
                        pasada esta fecha, se asumirá la conformidad a dicho reporte. </br></br>

                        Agradecemos su valiosa colaboración. </br></br>

                        Cordial saludo.
                    </p>
                </body>
            </html>
        `;
    }


    validateEmailPattern ( value: string ) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if ( !emailPattern.test( value ) ) {
            this._toastrNotificationService.warning( {
                title: 'Correo invalido',
                message: 'Solo se aceptan direcciones de correo validas'
            } );
            return false;
        }
        // else if ( value.split( '@' ).at( 0 )?.length !== 8 ) {
        //     this._toastrNotificationService.warning( {
        //         title: 'Correo corporativo invalido',
        //         message: 'El usuario windows debe tener 8 caracteres'
        //     } );
        //     return false;
        // }
        return true;
    }


    addChip ( emailList: string, event: MatChipInputEvent ): void {
        const value = ( event.value || '' ).trim();

        if ( !value || !this.validateEmailPattern( value ) ) return;

        const initialValues = this.form.get( emailList )?.value;

        this.form.get( emailList )?.setValue( [ ...initialValues, value ] );

        event.chipInput.clear();
    }


    removeChip ( emailList: string, keyword: string ) {
        const initialValues: string[] = this.form.get( emailList )?.value;

        const index = initialValues.indexOf( keyword );

        if ( index >= 0 ) {
            initialValues.splice( index, 1 );
            this.form.get( emailList )?.setValue( [ ...initialValues ] );
        }
    }


    editChip ( emailList: string, keyword: string, event: MatChipEditedEvent ) {
        const value = event.value.trim();

        if ( !value ) {
            this.removeChip( emailList, keyword );
            return;
        }

        if ( !this.validateEmailPattern( value ) ) return;

        const initialValues: string[] = this.form.get( emailList )?.value;

        const index = initialValues.indexOf( keyword );

        if ( index >= 0 ) {
            initialValues[ index ] = value;
            this.form.get( emailList )?.setValue( [ ...initialValues ] );
        }
    }


    onSubmit () {
        const toRecipients: string[] = this.form.get( 'toRecipients' )?.value;
        const ccRecipients: string[] = this.form.get( 'ccRecipients' )?.value;
        const subject = encodeURIComponent( this.form.get( 'subject' )?.value );

        if ( !toRecipients.length ) {
            this._toastrNotificationService.warning( {
                title: 'Destinatarios Principales faltantes',
                message: 'Por favor añadir 1 o más destinatarios principales'
            } );
            return;
        } else if ( !ccRecipients.length ) {
            this._toastrNotificationService.warning( {
                title: 'Destinatarios con Copia faltantes',
                message: 'Por favor añadir mantener a DRCPI-Solicitud de Servicios cómo copia'
            } );
            return;
        }

        const mailtoLink = `mailto:${ toRecipients.join( ';' ) }?cc=${ ccRecipients }&subject=${ subject }&body=${ encodeURIComponent( this.body ) }`;

        // const mailtoLink = `https://outlook.office.com/mail/deeplink/compose?to=${ toRecipients.join( ';' ) }&cc=${ ccRecipients.join( ';' ) }&subject=${ subject }&body=${ encodeURIComponent( this.body ) }`;

        window.open( mailtoLink, '_blank' );
        return;
    }


    onRestartForm (): void {
        this.form.reset( this.initialFormValues );
    }
}
