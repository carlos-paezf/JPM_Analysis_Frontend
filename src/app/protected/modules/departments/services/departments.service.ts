import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/classes/base-service.class';
import { DepartmentEagerType, DepartmentType } from '../../../../shared/types';

@Injectable( {
    providedIn: 'root'
} )
export class DepartmentsService extends BaseService<DepartmentType, DepartmentEagerType> {
    constructor ( _http: HttpClient, ) {
        super( _http, "departments" );
    }
}
