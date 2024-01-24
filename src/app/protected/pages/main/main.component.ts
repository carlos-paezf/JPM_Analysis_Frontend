import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { HttpStatusService } from '../../../shared/services/http-status.service';


/**
 * The MainComponent class is responsible for handling different types of HTTP 
 * errors and navigating back and forward in the browser's history. 
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss' ],
} )
export class MainComponent implements OnInit {
    public notFoundError: boolean = false;
    public forbiddenError: boolean = false;
    public internalServerError: boolean = false;

    constructor (
        private readonly _location: Location,
        private readonly _httpStatusService: HttpStatusService,
    ) { }

    /**
     * This function subscribes to different error emitters from an HTTP status service in order to
     * handle different types of errors.
     */
    ngOnInit (): void {
        this.subscribeHttpStatus();
    }

    /**
     * The function subscribes to different HTTP status error events and updates corresponding
     * variables with the received status.
     */
    subscribeHttpStatus () {
        this._httpStatusService.currentStatusNotFoundError.subscribe( status => this.notFoundError = status );
        this._httpStatusService.currentStatusForbiddenError.subscribe( status => this.forbiddenError = status );
        this._httpStatusService.currentStatusInternalServerError.subscribe( status => this.internalServerError = status );
    }

    /**
     * The "goBack" function uses the "_location" object to navigate back to the previous page.
     * @returns the result of calling the `back()` method on the `_location` object.
     */
    goBack () {
        return this._location.back();
    }

    /**
     * The function goForward() is used to navigate forward in the browser's history.
     * @returns The forward location.
     */
    goForward () {
        return this._location.forward();
    }
}
