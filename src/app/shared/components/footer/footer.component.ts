import { Component } from '@angular/core';

/**
 * The FooterComponent class is a TypeScript component that represents the footer 
 * of an application and includes a logo image source. 
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.scss' ]
} )
export class FooterComponent {
    logoSrc = "../../../../assets/images/banrep-logo.png";
}
