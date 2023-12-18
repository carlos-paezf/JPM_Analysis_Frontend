import { Component } from '@angular/core';


/** 
 * The InternalServerErrorComponent class is a TypeScript component that handles 
 * the display of an internal server error page and provides a function to refresh the page. 
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-internal-server-error',
    templateUrl: './internal-server-error.component.html',
    styleUrls: [ './internal-server-error.component.scss' ]
} )
export class InternalServerErrorComponent {
    sourceSrcset = "../../../../assets/images/500 Internal Server Error-amico.png";
    imgSrc = "../../../../assets/images/500 Internal Server Error-amico.svg";

    /**
     * The function refreshes the page
     */
    public refresh () {
        window.location.reload();
    }
}
