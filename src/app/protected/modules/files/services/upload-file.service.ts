import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment';
import { FileTypeEnum } from '../../../constants';


type UploadFileType = {
    file: File;
    observations: string;
    fileType: FileTypeEnum;
};


@Injectable( {
    providedIn: 'root'
} )
export class UploadFileService {
    private baseURL: string = `${ environment.baseURL }`;

    constructor () { }

    uploadFile ( { file, observations, fileType }: UploadFileType ) {
        const url = `${ this.baseURL }/upload-file`;

        console.log( { url, file, observations, fileType } );
    }
}
