import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseServiceWithSoftDelete } from '../../../../shared/classes/base-service.class';
import { UserEntitlementType, UserEntitlementEagerType } from '../../../../shared/types';


/**
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class UserEntitlementsService extends BaseServiceWithSoftDelete<UserEntitlementType, UserEntitlementEagerType> {
    constructor ( _http: HttpClient ) {
        super( _http, "usersEntitlements" );
    }
}
