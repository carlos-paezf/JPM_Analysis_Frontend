import { Component, OnInit } from '@angular/core';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ColumnTableType, ReportHistoryType } from '../../../../../shared/types';
import { AdminAppService } from '../../services/admin-app.service';
import { InfoTableBaseComponent } from '../../../../../shared/classes/sheet-base-component.class';

@Component( {
    selector: 'app-reports-history',
    templateUrl: './reports-history.component.html',
    styleUrls: [ './reports-history.component.scss' ]
} )
export class ReportsHistoryComponent extends InfoTableBaseComponent<ReportHistoryType> implements OnInit {
    public override displayedColumns: string[] = [
        "runReportDate",
        "reportUploadDate",
        "appUserId",
        "reportName",
        "reportComments",
    ];
    public override columns: ColumnTableType<ReportHistoryType>[] = [
        { columnDef: 'reportName', tooltip: 'Nombre del reporte excel cargado', header: 'Nombre', cell: ( row ) => row.reportName },
        { columnDef: 'runReportDate', tooltip: 'Fecha en la cual fue generado el reporte desde la aplicación oficial de JPMorgan', header: 'Fecha de generación', cell: ( row ) => new Date( row.runReportDate ).toLocaleString() },
        { columnDef: 'reportUploadDate', tooltip: 'Fecha de cargue del archivo en la aplicación JPM Analysis', header: 'Fecha de cargue', cell: ( row ) => new Date( row.reportUploadDate ).toLocaleString() },
        { columnDef: 'reportComments', tooltip: 'Comentarios añadidos por el encargado del cargue del reporte', header: 'Comentarios', cell: ( row ) => ( row.reportComments === 'null' ) ? '' : row.reportComments },
        { columnDef: 'appUserId', tooltip: 'Usuario encargado del cargue del reporte', header: 'Usuario de la APP', cell: ( row ) => row.appUserId },
    ];


    constructor (
        private _appUtilsMessagesService: AppUtilsMessagesService,
        private _adminAppService: AdminAppService
    ) {
        super();
    }


    /** 
     * The `ngOnInit()` method in the `ReportsHistoryComponent` class is a lifecycle hook in Angular that 
     * is called after Angular has initialized all data-bound properties of a directive. In this specific 
     * implementation, the `ngOnInit()` method is making a service call to `_adminAppService.getReportsHistory()` 
     * to fetch reports history data. 
     */
    ngOnInit (): void {
        this._adminAppService.getReportsHistory()
            .subscribe( {
                next: ( response ) => {
                    this.data = response.data;
                    this.isEmptyTable = ( response.data.length <= 0 );
                    this.isLoadingResults = false;
                },
                error: ( error ) => {
                    this.isLoadingResults = false;
                    this._appUtilsMessagesService.showQueryErrorMessage( error );
                }
            } );
    }
}
