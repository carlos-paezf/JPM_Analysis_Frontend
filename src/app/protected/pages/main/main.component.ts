import { BreakpointObserver } from '@angular/cdk/layout';
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

    public drawerMode: 'over' | 'push' = "push";


    constructor (
        private readonly _httpStatusService: HttpStatusService,
        private readonly _breakpointObserver: BreakpointObserver
    ) { }


    /**
     * This function subscribes to different error emitters from an HTTP status service in order to
     * handle different types of errors.
     */
    ngOnInit (): void {
        this._subscribeHttpStatus();
        this._subscribeBreakpointObserver();
    }


    /**
     * The function subscribes to different HTTP status error events and updates corresponding
     * variables with the received status.
     */
    private _subscribeHttpStatus (): void {
        this._httpStatusService.currentStatusNotFoundError.subscribe( status => this.notFoundError = status );
        this._httpStatusService.currentStatusForbiddenError.subscribe( status => this.forbiddenError = status );
        this._httpStatusService.currentStatusInternalServerError.subscribe( status => this.internalServerError = status );
    }


    /**
     * The function `_subscribeBreakpointObserver` adjusts the `drawerMode` based on the viewport
     * dimensions observed by the `_breakpointObserver`.
     */
    private _subscribeBreakpointObserver (): void {
        this._breakpointObserver.observe( [
            '(max-width: 1650px)', '(max-height: 768px)'
        ] ).subscribe( {
            next: ( result ) => {
                if ( result.matches ) {
                    this.drawerMode = 'over';
                } else {
                    this.drawerMode = 'push';
                }
            }
        } );
    }
}
