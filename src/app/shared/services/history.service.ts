import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable( {
    providedIn: 'root'
} )
export class HistoryService {
    private _historyCounter = 0;
    private _canGoBackSubject = new BehaviorSubject<boolean>( false );
    private _canGoForwardSubject = new BehaviorSubject<boolean>( false );

    public canGoBack$ = this._canGoBackSubject.asObservable();
    public canGoForward$ = this._canGoForwardSubject.asObservable();


    /**
     * The constructor initializes a class instance with a private location property and sets up an
     * event listener for the window's popstate event to update navigation state.
     * @param {Location} _location - The `_location` parameter is a private property that stores the
     * current location of the application. It is of type `Location`, which typically represents the
     * URL of the current page.
     */
    constructor ( private readonly _location: Location ) {
        window.onpopstate = () => {
            this._historyCounter++;
            this._updateNavigationState();
        };
    }


    /**
     * The function updates the navigation state by determining if the user can go back or forward in
     * the history.
     */
    private _updateNavigationState () {
        this._canGoBackSubject.next( this._historyCounter > 0 );
        this._canGoForwardSubject.next( false );
    }


    /**
     * The `goBack` function decreases the `_historyCounter`, goes back in the browser history using
     * `_location.back()`, and updates the navigation state if the counter is greater than 0.
     */
    goBack () {
        if ( this._historyCounter > 0 ) {
            this._location.back();
            this._historyCounter--;
            this._updateNavigationState();
        }
    }

    /**
     * The `goForward` function moves the browser forward in its navigation history and updates the
     * navigation state.
     */
    goForward () {
        this._location.forward();
        this._historyCounter++;
        this._updateNavigationState();
    }
}
