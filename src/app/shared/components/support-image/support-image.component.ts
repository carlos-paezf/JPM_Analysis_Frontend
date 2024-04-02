import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

import { HttpStatusService } from 'src/app/shared/services/http-status.service';

/**
 * The SupportImageComponent class is a TypeScript component that represents 
 * an image with support information, including source srcset, image source, 
 * alt text, and a message. 
 *
 * @author cpaezfer
 */
@Component( {
    selector: 'app-support-image',
    templateUrl: './support-image.component.html',
    styleUrls: [ './support-image.component.scss' ]
} )
export class SupportImageComponent {
    @Input() public sourceSrcset!: string;
    @Input() public imgSrc!: string;
    @Input() public alt!: string;
    @Input() public message?: string = "No se ha encontrado la información solicitada. Por favor, valida que la información se encuentra en la lista correspondiente";


    constructor (
        private readonly _location: Location,
        private readonly _httpStatusService: HttpStatusService
    ) { }


    goBack () {
        this._httpStatusService.removeNotFoundError();
        return this._location.back();
    }

    goHome () {
        this._httpStatusService.removeNotFoundError();
        window.location.href = "/";
    }
}
