import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment';
import { DepartmentType, UserDepartmentAssignmentType } from '../../../../shared/types/index';


@Injectable( {
    providedIn: 'root'
} )
export class UserCircularizationService {
    private _baseURL: string = environment.baseURL;
    private readonly _http: HttpClient;

    constructor ( _http: HttpClient ) {
        this._http = _http;
    }


    public assignDepartmentToCompanyUsers ( body: UserDepartmentAssignmentType[] ) {
        return this._http.patch( `${ this._baseURL }/userCircularization/assign-department-to-company-users`, body );
    }


    public addDepartment ( department: DepartmentType ) {
        return this._http.post( `${ this._baseURL }/departments`, department );
    }
}
