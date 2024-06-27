import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { HistoryService } from '../../services/history.service';


@Component( {
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [ './navigation.component.scss' ]
} )
export class NavigationComponent implements OnInit, OnDestroy {
    public canGoBack = false;
    public canGoForward = false;

    private _subscription: Subscription[] = [];


    constructor ( private readonly _historyService: HistoryService ) { }


    ngOnInit (): void {
        this._subscription.push(
            this._historyService.canGoBack$.subscribe( {
                next: ( canGoBack ) => {
                    this.canGoBack = canGoBack;
                }
            } )
        );

        this._subscription.push(
            this._historyService.canGoForward$.subscribe( {
                next: ( canGoForward ) => {
                    this.canGoForward = canGoForward;
                }
            } )
        );
    }


    public goBack (): void {
        this._historyService.goBack();
    }


    public goForward (): void {
        this._historyService.goForward();
    }


    ngOnDestroy (): void {
        this._subscription.forEach( subscription => subscription.unsubscribe() );
    }
}
