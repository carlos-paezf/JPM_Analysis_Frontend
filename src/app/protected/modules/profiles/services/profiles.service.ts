import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from '../../../../shared/classes/base-service.class';
import { ProfileEagerType, ProfileType } from '../../../../shared/types';


@Injectable( {
    providedIn: 'root'
} )
export class ProfilesService extends BaseService<ProfileType, ProfileEagerType> {
    constructor ( _http: HttpClient, ) {
        super( _http, "profiles" );
    }
}
