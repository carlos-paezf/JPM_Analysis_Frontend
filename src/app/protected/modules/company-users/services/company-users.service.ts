import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseServiceWithSoftDelete } from '../../../../shared/classes/base-service.class';
import { CompanyUserEagerType, CompanyUserType } from '../../../../shared/types';


/**
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class CompanyUsersService extends BaseServiceWithSoftDelete<CompanyUserType, CompanyUserEagerType> {
    constructor ( _http: HttpClient ) {
        super( _http, "companyUsers" );
    }
}
