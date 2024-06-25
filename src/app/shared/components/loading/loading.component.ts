import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadingService } from '../../services/loading.service';


/**
 * The LoadingComponent class is a TypeScript component that displays a loading 
 * indicator based on the isLoading property from the LoadingService.
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: [ './loading.component.scss' ]
} )
export class LoadingComponent {
    @Input() width!: number;
    isLoading: Observable<boolean>;

    constructor ( private readonly _loadingService: LoadingService ) {
        this.isLoading = this._loadingService.isLoading;
    }
}
