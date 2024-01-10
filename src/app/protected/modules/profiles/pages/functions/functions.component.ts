import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { FunctionsService } from '../../services/functions.service';
import { FunctionType, ProfileFunctionType, ProfileType } from '../../../../../shared/types';
import { BaseDetailClass } from '../../../../../shared/classes/base-detail.class';
import { forkJoin, Observable } from 'rxjs';

@Component( {
    selector: 'app-functions',
    templateUrl: './functions.component.html',
    styleUrls: [ './functions.component.scss' ]
} )
export class FunctionsComponent extends BaseDetailClass<ProfileFunctionType[]> implements OnInit {
    public override sourceSrcset = "../../../../assets/images/Curiosity people-amico.png";
    public override imgSrc = "../../../../assets/images/Curiosity people-amico.svg";

    public profiles: ProfileType[] = [];
    public functions: FunctionType[] = [];

    constructor (
        private readonly _profilesService: ProfilesService,
        private readonly _functionsService: FunctionsService
    ) {
        super();
    }

    ngOnInit (): void {
        forkJoin(
            [
                this._profilesService.getProfiles(),
                this._functionsService.getFunctions(),
                this._functionsService.getProfilesFunctions(),
            ]
        ).subscribe( {
            next: ( [ profilesResponse, functionsResponse, profilesFunctionsResponse ] ) => {
                this.profiles = profilesResponse.data;
                this.functions = functionsResponse.data;
                this.data = profilesFunctionsResponse.data;
            },
            complete: () => {
                this.isLoading = false;
            },
            error: ( error ) => {
                throw new Error( 'Method not implemented.' );
            }
        } );
    }

    getProfileFunction ( profileId: string, functionId: string ) {
        return this.data!.some( e => e.profile_id === profileId && e.function_id === functionId ) ? "✔" : null;
    }

}
