import { Component, OnInit } from '@angular/core';

import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ReportHistoryType } from '../../../../../shared/types';
import { AdminAppService } from '../../../admin-app/services/admin-app.service';
import { APP_MODULES_PANELS } from '../../constants/modules';


@Component( {
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss' ]
} )
export class MainComponent implements OnInit {
    public appModulesPanels = APP_MODULES_PANELS;
    public lastReportData?: ReportHistoryType;

    constructor (
        private _appUtilsMessagesService: AppUtilsMessagesService,
        private _adminAppService: AdminAppService
    ) { }

    /**
     * The function `ngOnInit` in TypeScript initializes a component by fetching the last report date
     * from a service and handling the response or error accordingly.
     */
    ngOnInit (): void {
        this._adminAppService.getLastReportDate().subscribe( {
            next: ( response: ReportHistoryType | undefined ) => {
                this.lastReportData = response;
            },
            error: ( error ) => {
                this._appUtilsMessagesService.showQueryErrorMessage( error );
                this.lastReportData = undefined;
            }
        } );
    }
}
