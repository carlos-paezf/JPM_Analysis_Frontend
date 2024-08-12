import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceWithSoftDelete } from '../../../../shared/classes/base-service.class';
import { DepartmentEagerType, DepartmentType } from '../../../../shared/types';

@Injectable( {
    providedIn: 'root'
} )
export class DepartmentsService extends BaseServiceWithSoftDelete<DepartmentType, DepartmentEagerType> {
    constructor ( _http: HttpClient, ) {
        super( _http, "departments" );
    }
}
