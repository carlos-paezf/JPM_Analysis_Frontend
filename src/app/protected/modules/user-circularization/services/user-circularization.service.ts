import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { CircularizationData, DepartmentType, UserDepartmentAssignmentType } from '../../../../shared/types/index';


@Injectable( {
    providedIn: 'root'
} )
export class UserCircularizationService {
    private _baseURL: string = environment.baseURL;
    private readonly _http: HttpClient;

    constructor ( _http: HttpClient ) {
        this._http = _http;
    }


    /**
     * The function `assignDepartmentToCompanyUsers` sends a PATCH request to assign departments to
     * company users.
     * @param {UserDepartmentAssignmentType[]} body - The `body` parameter in the
     * `assignDepartmentToCompanyUsers` function is an array of objects of type
     * `UserDepartmentAssignmentType`. Each object in the array represents an assignment of a
     * department to a company user.
     * @returns The `assignDepartmentToCompanyUsers` function is returning the result of a PATCH
     * request made to the specified URL `${ this._baseURL
     * }/userCircularization/assign-department-to-company-users` with the provided `body` data.
     */
    public assignDepartmentToCompanyUsers ( body: UserDepartmentAssignmentType[] ) {
        return this._http.patch( `${ this._baseURL }/userCircularization/assign-department-to-company-users`, body );
    }


    /**
     * The function `addDepartment` sends a POST request to add a new department using the provided
     * department data.
     * @param {DepartmentType} department - The `addDepartment` function takes a parameter `department`
     * of type `DepartmentType`. This parameter represents the department object that will be added to
     * the system. The function sends a POST request to the specified URL endpoint to add the
     * department using the provided department object.
     * @returns The `addDepartment` function is returning the result of an HTTP POST request to the
     * specified URL `${ this._baseURL }/departments` with the `department` object as the payload.
     */
    public addDepartment ( department: DepartmentType ) {
        return this._http.post( `${ this._baseURL }/departments`, department );
    }


    /**
     * This function generates user circularization data by making an HTTP GET request to a specific
     * endpoint.
     * @returns An Observable of CircularizationData array is being returned.
     */
    public generateUserCircularization (): Observable<CircularizationData[]> {
        return this._http.get<CircularizationData[]>( `${ this._baseURL }/userCircularization/generate-user-circularization` );
    }
}
