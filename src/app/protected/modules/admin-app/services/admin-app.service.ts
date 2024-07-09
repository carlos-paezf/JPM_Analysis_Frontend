import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ReportHistoryType, ResponseSheetsType } from '../../../../shared/types';


@Injectable( {
    providedIn: 'root'
} )
export class AdminAppService {
    private _baseURL: string = `${ environment.baseURL }/adminApp`;

    constructor (
        private _http: HttpClient,
    ) { }

    /**
     * This function returns an Observable of type ReportHistoryType or undefined, which fetches the
     * last uploaded report data from a specified URL.
     * @returns An Observable of type ReportHistoryType or undefined is being returned.
     */
    public getReportById ( id: string ): Observable<ReportHistoryType | null> {
        return this._http.get<ReportHistoryType | null>( `${ this._baseURL }/report-by-id/${ id }` );
    }


    /**
     * This function returns an Observable of type ReportHistoryType or undefined, which fetches the
     * last uploaded report data from a specified URL.
     * @returns An Observable of type ReportHistoryType or undefined is being returned.
     */
    public getLastReportDate (): Observable<ReportHistoryType | undefined> {
        return this._http.get<ReportHistoryType | undefined>( `${ this._baseURL }/last-upload-report-data` );
    }


    /**
     * This function retrieves the history of reports using an HTTP GET request.
     * @returns An Observable of type ResponseSheetsType<ReportHistoryType> is being returned.
     */
    public getReportsHistory (): Observable<ResponseSheetsType<ReportHistoryType>> {
        return this._http.get<ResponseSheetsType<ReportHistoryType>>( `${ this._baseURL }/reports-history` );
    }
}
