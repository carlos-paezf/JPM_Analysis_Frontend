import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * The `HttpStatusService` class is a service that provides methods
 * to report and remove different types of HTTP status errors.
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class HttpStatusService {
    private _unauthorizedErrorEmitter = new BehaviorSubject<boolean>( false );
    private _forbiddenErrorEmitter = new BehaviorSubject<boolean>( false );
    private _notFoundErrorEmitter = new BehaviorSubject<boolean>( false );
    private _internalServerErrorEmitter = new BehaviorSubject<boolean>( false );

    public currentStatusUnauthorizedError = this._unauthorizedErrorEmitter.asObservable();
    public currentStatusForbiddenError = this._forbiddenErrorEmitter.asObservable();
    public currentStatusNotFoundError = this._notFoundErrorEmitter.asObservable();
    public currentStatusInternalServerError = this._internalServerErrorEmitter.asObservable();

    /**
     * This function emits an event to report a Unauthorized error.
     */
    reportUnauthorizedError () {
        this._unauthorizedErrorEmitter.next( true );
    }

    /**
     * The function removes the Unauthorized error by emitting a false value.
     */
    removeUnauthorizedError () {
        this._unauthorizedErrorEmitter.next( false );
    }

    /**
     * This function emits an event to report a forbidden error.
     */
    reportForbiddenError () {
        this._forbiddenErrorEmitter.next( true );
    }

    /**
     * The function removes the forbidden error by emitting a false value.
     */
    removeForbiddenError () {
        this._forbiddenErrorEmitter.next( false );
    }

    /**
     * This function emits an event to report a not found error.
     */
    reportNotFoundError () {
        this._notFoundErrorEmitter.next( true );
    }

    /**
     * The function removes the "NotFoundError" by emitting a value of "false" through the
     * "_notFoundErrorEmitter".
     */
    removeNotFoundError () {
        this._notFoundErrorEmitter.next( false );
    }

    /**
     * This function emits an event to report an internal server error.
     */
    reportInternalServerError () {
        this._internalServerErrorEmitter.next( true );
    }

    /**
     * The function removes the internal server error by emitting a false value.
     */
    removeInternalServerError () {
        this._internalServerErrorEmitter.next( false );
    }
}
