import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


/**
 * The NotFoundComponent class is a TypeScript component that handles the 
 * functionality of a "404 Not Found" page, including navigating back to 
 * the previous page and redirecting to the home page. 
 *
 * @author cpaezfer
 */
@Component( {
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: [ './not-found.component.scss' ]
} )
export class NotFoundComponent {
    sourceSrcset = "../../../../assets/images/404 Error-amico.png";
    imgSrc = "../../../../assets/images/404 Error-amico.svg";

    constructor ( private readonly _router: Router, private _location: Location ) { }

    /**
     * The function "goBack" uses the "_location" object to navigate back to the previous page.
     */
    public goBack () {
        this._location.back();
    }

    /**
     * This function navigates to the home page using the Angular router.
     */
    public goToHome () {
        this._router.navigate( [ '/' ] );
    }
}
