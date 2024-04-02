import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpStatusService } from 'src/app/shared/services/http-status.service';

/**
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class ErrorHandlingInterceptorService implements HttpInterceptor {
    constructor ( private readonly _httpStatusService: HttpStatusService ) { }

    /**
     * The intercept function intercepts HTTP requests and handles any errors that 
     * occur, returning an observable that emits the HTTP event or throws an error.
     * @param {HttpRequest<unknown>} req - The HTTP request object that contains 
     * information about the request being made, such as the URL, headers, and body.
     * @param {HttpHandler} next - The next interceptor in the chain
     * @returns An observable of type HttpEvent
     */
    intercept ( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        return next
            .handle( req )
            .pipe(
                catchError( err => {
                    const error = err.error.message || err.status;

                    switch ( err.status ) {
                        case 401:
                            this._httpStatusService.reportUnauthorizedError();
                            break;
                        case 403:
                            this._httpStatusService.reportForbiddenError();
                            break;
                        case 404:
                            this._httpStatusService.reportNotFoundError();
                            break;
                        case 500:
                            this._httpStatusService.reportInternalServerError();
                            break;
                        default:
                            break;
                    }

                    return throwError( () => new Error( error ) );
                } )
            );
    }
}
