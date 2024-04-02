import { Injectable } from '@angular/core';
import { ToastrNotificationService } from 'src/app/shared/services/toastr-notification.service';


@Injectable( {
    providedIn: 'root'
} )
export class AppUtilsMessagesService {
    constructor ( private readonly _toastrNotificationService: ToastrNotificationService ) { }


    /**
     * This function displays an error message indicating that the user does not have permission to
     * update the record.
     */
    showNoPermissionError (): void {
        this._toastrNotificationService.error( {
            title: 'Error',
            message: 'No cuentas con permisos para actualizar el registro'
        } );
    }


    /**
     * The function `showValidationError` displays a warning notification for a failed update,
     * prompting the user to confirm the validity of the information.
     */
    showValidationError (): void {
        this._toastrNotificationService.warning( {
            title: 'Actualización fallida',
            message: 'Por favor, confirma que la información sea válida'
        } );
    }


    /**
     * The function `showUpdateCancelledMessage` displays an informational toastr notification with the
     * title "Actualización Cancelada" and the message "Se canceló la actualización del registro".
     */
    showUpdateCancelledMessage (): void {
        this._toastrNotificationService.info( {
            title: 'Actualización Cancelada',
            message: 'Se canceló la actualización del registro'
        } );
    }


    /**
     * The function `showUpdateSuccessMessage` displays a success message for a successful record
     * update.
     */
    showUpdateSuccessMessage (): void {
        this._toastrNotificationService.success( {
            title: 'Actualización exitosa',
            message: 'La información del registro ha sido actualizada correctamente'
        } );
    }


    /**
     * The function `showUpdateErrorMessage` logs an error message and displays a notification for an
     * account update error.
     * @param {any} error - The `error` parameter in the `showUpdateErrorMessage` function is used to
     * pass an error object or message that occurred during the account update process. This error
     * information is then logged to the console using `console.error` and displayed to the user as a
     * notification using the `_toastrNotificationService.error
     */
    showUpdateErrorMessage ( error: any ): void {
        console.error( 'Error updating account:', error );
        this._toastrNotificationService.error( {
            title: 'Error',
            message: 'Hubo un error al actualizar el registro. Por favor, inténtalo de nuevo más tarde.'
        } );
    }
}
