import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';


type ToastParamsType = {
    title: string;
    message: string;
    params?: Partial<IndividualConfig<any>>;
};


/** 
 * The `ToastrNotificationService` class is a TypeScript class that provides 
 * methods for displaying different types of toast notifications. 
 * 
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class ToastrNotificationService {
    public params: Partial<IndividualConfig<any>> = {
        enableHtml: true,
        progressBar: true,
        positionClass: `toast-top-right`,
        timeOut: 8000,
        closeButton: true
    };

    constructor ( private readonly _toastr: ToastrService ) { }

    /**
     * A function that is used to display a success message
     * @param {ToastParamsType} ToastParamsType The function `warning` takes in an object of type `ToastParamsType`
     * as its parameter. This object has three properties:
     *  - {string} title - It is used to provide a brief summary or description of the the warning message.
     *  - {string} message - A string that represents the warning message to be displayed
     *  - {Partial<IndividualConfig<any>>} params 
     */
    public success ( { title, message, params = this.params }: ToastParamsType ): void {
        this._toastr.success( message, title, params );
    }

    /**
     * A function that displays an error message
     * @param {ToastParamsType} ToastParamsType The function `warning` takes in an object of type `ToastParamsType`
     * as its parameter. This object has three properties:
     *  - {string} title - It is used to provide a brief summary or description of the the warning message.
     *  - {string} message - A string that represents the warning message to be displayed
     *  - {Partial<IndividualConfig<any>>} params 
     */
    public error ( { title, message, params = this.params }: ToastParamsType ): void {
        this._toastr.error( message, title, params );
    }

    /**
     * A function that is used to display a info message
     * @param {ToastParamsType} ToastParamsType The function `warning` takes in an object of type `ToastParamsType`
     * as its parameter. This object has three properties:
     *  - {string} title - It is used to provide a brief summary or description of the the warning message.
     *  - {string} message - A string that represents the warning message to be displayed
     *  - {Partial<IndividualConfig<any>>} params 
     */
    public info ( { title, message, params = this.params }: ToastParamsType ): void {
        this._toastr.info( message, title, params );
    }

    /**
     * A function that is used to display a warning message
     * @param {ToastParamsType} ToastParamsType The function `warning` takes in an object of type `ToastParamsType`
     * as its parameter. This object has three properties:
     *  - {string} title - It is used to provide a brief summary or description of the the warning message.
     *  - {string} message - A string that represents the warning message to be displayed
     *  - {Partial<IndividualConfig<any>>} params 
     */
    public warning ( { title, message, params = this.params }: ToastParamsType ): void {
        this._toastr.warning( message, title, params );
    }

    /**
     * The cleanAllToast function clears all toasts.
     */
    public cleanAllToast () {
        this._toastr.clear();
    }
}
