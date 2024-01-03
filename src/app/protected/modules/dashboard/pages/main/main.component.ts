import { Component } from '@angular/core';
import { APP_MODULES_PANELS } from '../../constants/modules';

@Component( {
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss' ]
} )
export class MainComponent {
    public appModulesPanels = APP_MODULES_PANELS;
}
