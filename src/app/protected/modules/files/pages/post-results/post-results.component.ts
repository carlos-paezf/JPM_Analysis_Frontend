import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PostSeedResponseType } from '../../../../../shared/types';
import { UploadFileService } from '../../services/upload-file.service';


@Component( {
    selector: 'app-post-results',
    templateUrl: './post-results.component.html',
    styleUrls: [ './post-results.component.scss' ]
} )
export class PostResultsComponent {
    results?: PostSeedResponseType;


    constructor (
        private _router: Router,
        private _uploadFileService: UploadFileService
    ) {
        this.results = this._uploadFileService.postResultData;
    }


    /**
     * The function `redirectTo` in TypeScript redirects to a specified URL using the Angular router.
     * @param {string} url - A string representing the URL that the user wants to navigate to.
     */
    redirectTo ( url: string ) {
        this._router.navigateByUrl( url );
    }
}
