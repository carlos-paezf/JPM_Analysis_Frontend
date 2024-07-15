import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';


@Component( {
    selector: 'app-file-upload-progress',
    templateUrl: './file-upload-progress.component.html',
    styleUrls: [ './file-upload-progress.component.scss' ]
} )
export class FileUploadProgressComponent implements OnChanges {
    public progress: number = 0;
    public loaded: number = 0;
    public total: number = 0;

    @Input() file: File | null = null;
    @Output() fileUploaded = new EventEmitter<File>();


    /**
     * The ngOnChanges function in TypeScript triggers the uploadFile method if a file is present.
     * @param {SimpleChanges} changes - The `changes` parameter in the `ngOnChanges` method is an
     * object of type `SimpleChanges` that contains the changed properties of the component. It
     * provides information about the previous and current values of the input properties that have
     * changed. This allows you to react to changes in input properties and perform
     */
    ngOnChanges ( changes: SimpleChanges ): void {
        if ( this.file ) this.uploadFile( this.file );
    }


    /**
     * The function `onFileSelected` takes an event object, extracts the selected file, and uploads it.
     * @param {any} event - The `event` parameter in the `onFileSelected` function is an event object
     * that is triggered when a file is selected using an input element in the browser. It contains
     * information about the event, such as the target element and the selected files.
     */
    onFileSelected ( event: any ): void {
        const file: File = event.target.files[ 0 ];
        if ( file ) this.uploadFile( file );
    }


    /**
     * The function `uploadFile` takes a File object, creates a FormData object with the file, sends a
     * POST request to a specified URL, and emits an event when the file is successfully uploaded.
     * @param {File} file - The `uploadFile` function you provided is used to upload a file using
     * XMLHttpRequest. The function takes a `File` object as a parameter. The `File` object represents
     * a file from the file system that the user has selected.
     */
    uploadFile ( file: File ): void {
        const formData = new FormData();
        formData.append( 'file', file, file.name );

        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener( 'progress', ( event: ProgressEvent ) => {
            if ( event.lengthComputable ) {
                this.loaded = event.loaded / ( 1024 );
                this.total = event.total / ( 1024 );
                this.progress = Math.round( ( event.loaded / event.total ) * 100 );
            }
        } );

        xhr.onreadystatechange = () => {
            if ( xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 ) {
                this.fileUploaded.emit( file );
                this.resetProgress();
            }
        };

        xhr.open( 'POST', '/dashboard', true );
        xhr.send( formData );
    }


    /**
     * The function `resetProgress` resets the progress, loaded, and total values to zero.
     */
    resetProgress (): void {
        this.progress = 0;
        this.loaded = 0;
        this.total = 0;
    }
}
