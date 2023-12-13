import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


/** 
 * The LoadingService class is a TypeScript class that provides 
 * methods to show and hide a loading indicator. 
 * 
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class LoadingService {
    public isLoading = new Subject<boolean>();

    /**
     * The function sets the isLoading property to true.
     */
    public show (): void {
        this.isLoading.next( true );
    }

    /**
     * The function "hide" sets the value of "isLoading" to false.
     */
    public hide (): void {
        this.isLoading.next( false );
    }
}
