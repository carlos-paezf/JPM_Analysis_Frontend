import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';


@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {
    title = 'JPM Analysis';

    constructor (
        private readonly _titleService: Title,
        private readonly _router: Router,
        private readonly _activateRoute: ActivatedRoute
    ) { }

    /**
     * This function sets the title of the current page based on the title specified in the route data
     * or the default title of the application.
     */
    ngOnInit (): void {
        const appTitle = this._titleService.getTitle();

        this._router.events.pipe(
            filter( event => event instanceof NavigationEnd ),
            map( () => {
                let child = this._activateRoute.firstChild;

                while ( child?.firstChild ) {
                    child = child.firstChild;
                }

                return child?.snapshot.data[ 'title' ] || appTitle;
            } )
        ).subscribe( ( title: string ) => {
            this._titleService.setTitle( title );
        } );
    }
}
