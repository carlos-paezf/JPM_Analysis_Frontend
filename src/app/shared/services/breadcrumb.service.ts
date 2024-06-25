import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { BreadcrumbType } from '../types';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';

@Injectable( {
    providedIn: 'root'
} )
export class BreadcrumbService {
    private breadcrumbs = new BehaviorSubject<BreadcrumbType[]>( [] );
    breadcrumbs$ = this.breadcrumbs.asObservable();

    constructor ( private readonly _router: Router ) {
        this._router.events.pipe(
            filter( event => event instanceof NavigationEnd )
        ).subscribe( () => {
            const root = this._router.routerState.snapshot.root;
            const breadcrumbs: BreadcrumbType[] = [];

            this._addBreadcrumb( root, '', breadcrumbs );
            this.breadcrumbs.next( breadcrumbs );
        } );
    }


    private _addBreadcrumb ( route: ActivatedRouteSnapshot, url: string, breadcrumbs: BreadcrumbType[] ) {
        const children: ActivatedRouteSnapshot[] = route.children;

        if ( children.length === 0 ) return;

        for ( const child of children ) {
            const routeUrl: string = child.url.map( segment => segment.path ).join( '/' );

            if ( routeUrl !== '' ) {
                url += `/${ routeUrl }`;
            }

            if ( child.data[ 'breadcrumb' ] ) {
                breadcrumbs.push( {
                    label: child.data[ 'breadcrumb' ],
                    url: url
                } );
            }

            this._addBreadcrumb( child, url, breadcrumbs );
        }
    }
}
