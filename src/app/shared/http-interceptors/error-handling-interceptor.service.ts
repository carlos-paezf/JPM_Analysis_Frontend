import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

/**
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class ErrorHandlingInterceptorService implements HttpInterceptor {
    constructor () { }

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

                    return throwError( () => new Error( error ) );
                } )
            );
    }
}
