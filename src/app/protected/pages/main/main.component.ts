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
    public sourceSrcset = "../../../../assets/images/Curiosity people-amico.png";
    public imgSrc = "../../../../assets/images/Curiosity people-amico.svg";

    public notFoundError: boolean = false;
    public forbiddenError: boolean = false;
    public internalServerError: boolean = false;

    constructor (
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
}
