import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

import { ToastrNotificationService } from '../../services/toastr-notification.service';

/** 
 * The InputFileComponent class is a TypeScript component that handles file uploads, 
 * validates file extensions, and emits events for the uploaded file. 
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: [ './input-file.component.scss' ]
} )
export class InputFileComponent {
    @Input() public extensions: string[] = [ 'xlsx', 'csv' ];
    @Output() public file = new EventEmitter<File>();
    @ViewChild( 'fileInputLabel', { static: false } ) public fileInputLabel!: ElementRef<HTMLElement>;

    public fileName: string | null = null;
    public loading: boolean = false;
    public selectedFile: File | null = null;

    constructor ( private readonly _toastNotificationService: ToastrNotificationService ) { }

    /**
     * This function removes the 'active' class from the native element of the file input label in
     * response to a drag event.
     * @param {DragEvent}  $event - is a parameter of type DragEvent, which is an event object
     * that is triggered when a draggable element is being dragged. It contains information about the
     * drag operation, such as the position of the mouse pointer and the data being dragged. In this
     * case, the function is using the  parameter
     */
    private _removeClassName ( $event: DragEvent ) {
        $event.preventDefault();
        $event.stopPropagation();
        this.fileInputLabel.nativeElement.classList.remove( 'active' );
    }

    @HostListener( 'dragenter', [ '$event' ] ) onDragEnter ( event: DragEvent ) {
        event.preventDefault();
        event.stopPropagation();

        this.fileInputLabel.nativeElement.classList.add( 'active' );
    }

    @HostListener( 'dragend', [ '$event' ] ) onDragEnd ( $event: DragEvent ) {
        this._removeClassName( $event );
    }

    @HostListener( 'dragexit', [ '$event' ] ) onDragExit ( $event: DragEvent ) {
        this._removeClassName( $event );
    }

    @HostListener( 'drop', [ '$event' ] ) onDrop ( $event: DragEvent ) {
        this._removeClassName( $event );

        this.uploadFile( $event.dataTransfer?.files as FileList );
    }

    /**
     * This function checks if a file is valid and then sets it as the current file.
     * @param {FileList} files - FileList object containing one or more File objects to be uploaded.
     * @returns a toast notification object with a title and message indicating whether the file was
     * successfully loaded or not. If the file is not loaded, a warning message is returned. If the
     * file extension is not valid, an error message is returned. If the file is successfully loaded, a
     * success message is returned.
     */
    uploadFile ( files: FileList ) {
        this.loading = true;

        const file = files?.item( 0 ) as File;

        if ( !file ) {
            this.loading = false;
            return this._toastNotificationService.warning( {
                title: 'Archivo no cargado',
                message: `Por favor realice nuevamente el cargue del archivo`
            } );
        }

        const fileExt = file.name.split( '.' ).at( -1 );

        if ( !this.extensions.some( ext => fileExt === ext ) ) {
            this.loading = false;
            return this._toastNotificationService.error( {
                title: 'Archivo no valido',
                message: `La extensión del archivo cargado no es valido. Por favor cargue un archivo con extensión ${ this.extensions.join( ', ' ) }`
            } );
        }

        this.selectedFile = file;
        this.fileName = file.name;
        this.loading = false;
        this.file.emit( file );

        return this._toastNotificationService.info( {
            title: 'Archivo cargado con éxito',
            message: 'El archivo ha sido cargado de manera exitosa'
        } );
    }

    /**
     * The function removes a file and displays a toast notification confirming the successful removal.
     * @returns The `_toastNotificationService.info()` method is being returned with an object
     * containing a title and message for a notification.
     */
    removeFile () {
        this.selectedFile = null;
        this.fileName = null;
        this.file.emit();

        return this._toastNotificationService.info( {
            title: 'Eliminación exitosa',
            message: 'El archivo ha sido descartado con éxito'
        } );
    }

    /**
     * This function handles the input of a file and passes it to the uploadFile function.
     * @param {Event}  -  is an event object that is passed as a parameter to the inputFile
     * function. It is likely an event that is triggered when a user selects a file to upload. The
     * event object contains information about the event, such as the target element and any data
     * associated with the event.
     */
    inputFile ( $event: Event ) {
        const files = ( $event.currentTarget! as HTMLInputElement ).files!;

        this.uploadFile( files as FileList );
    }


    onFileUploaded ( file: File ): void { }
}
