import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';

import { LoadingService } from '../services/loading.service';


/**
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class LoadingInterceptorService implements HttpInterceptor {
    constructor ( private readonly _loadingService: LoadingService ) { }

    /**
     * It intercepts the request, shows the loading spinner,
     * and then hides it when the request is complete
     * @param {HttpRequest<unknown>} req - The request object
     * @param {HttpHandler} next - The next interceptor in the chain
     * @returns An observable of type HttpEvent
     */
    intercept ( req: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {
        this._loadingService.show();

        return next
            .handle( req )
            .pipe(
                finalize( () => this._loadingService.hide() )
            );
    }
}
