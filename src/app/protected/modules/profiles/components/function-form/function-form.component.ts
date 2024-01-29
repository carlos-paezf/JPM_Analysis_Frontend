import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileType } from '../../../../../shared/types';
import { FunctionEagerLoadingType } from '../../../../../shared/types/jpm-types.type';
import { FunctionsService } from '../../services/functions.service';
import { ProfilesService } from '../../services/profiles.service';
import { forkJoin, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrNotificationService } from '../../../../../shared/services/toastr-notification.service';

@Component( {
    selector: 'app-function-form',
    templateUrl: './function-form.component.html',
    styleUrls: [ './function-form.component.scss' ]
} )
export class FunctionFormComponent implements OnChanges {
    @Input() public functionId: string | null = null;
    @Output() public showForm: boolean = true;

    public isLoading: boolean = true;
    public form!: FormGroup<any>;
    public profiles: ProfileType[] = [];
    public functionData: FunctionEagerLoadingType | null = null;

    constructor (
        private readonly _router: Router,
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _profilesService: ProfilesService,
        private readonly _functionsService: FunctionsService,
    ) { }

    ngOnChanges (): void {
        this.isLoading = true;
        forkJoin(
            [
                this._profilesService.getProfiles(),
                this.functionId
                    ? this._functionsService.getFunctionById( this.functionId )
                    : of( null )
            ]
        ).subscribe( {
            next: ( [ profilesResponse, functionsResponse ] ) => {
                this.profiles = profilesResponse.data;
                this.functionData = functionsResponse;
            },
            complete: () => {
                this.formActions();
                this.isLoading = false;
            },
            error: ( error ) => {
                // TODO: Reportar al servicio de manejo de errores del servidor
                throw new Error( 'Method not implemented.' );
            }
        } );
    }


    /**
     * The function creates a form group with two form controls and loads associated profiles.
     */
    formActions () {
        this.form = new FormGroup( {
            function_name: new FormControl<string>( this.functionData?.function_name ?? '', [ Validators.required ] ),
            profiles: new FormControl<ProfileType[]>( [], [ Validators.required, Validators.minLength( 1 ) ] )
        } );

        this.loadAssociatedProfiles();
    }


    /**
     * The function toggles a profile in an array of profiles in a form.
     * @param {ProfileType} profile - The `profile` parameter is of type `ProfileType` and represents
     * the profile object that needs to be toggled.
     */
    toggleProfile ( profile: ProfileType ) {
        const oldProfiles: ProfileType[] = this.form.get( 'profiles' )?.value;

        const newProfiles: ProfileType[] =
            oldProfiles.find( p => p.id === profile.id )
                ? oldProfiles.filter( p => p.id !== profile.id )
                : [ profile, ...oldProfiles ];

        this.form.get( 'profiles' )?.setValue( newProfiles );
    }


    /**
     * The function loads associated profiles and toggles them based on the function data.
     */
    loadAssociatedProfiles () {
        this.functionData?.profiles.forEach( e => {
            this.toggleProfile( this.profiles.find( x => x.id === e )! );
        } );
    }


    /**
     * The function checks if a given profile exists in an array of profiles.
     * @param {ProfileType} profile - The `profile` parameter is of type `ProfileType`.
     * @returns a boolean value.
     */
    checked ( profile: ProfileType ) {
        return ( this.form.get( 'profiles' )!.value as ProfileType[] ).some( p => p.id === profile.id );
    }


    /**
     * The onSubmit function handles the submission of a form, either creating a new function or
     * updating an existing one, and displays appropriate notifications.
     */
    onSubmit (): void {
        this.form.markAllAsTouched();

        if ( !this.functionId ) {
            this._functionsService.createFunction( this.form.get( 'function_name' )!.value, this.form.get( 'profiles' )!.value );
            this._toastrNotificationService.success( {
                title: 'Función creada',
                message: 'La función ha sido creada con éxito'
            } );
        } else {
            if ( window.confirm( '¿Está seguro de actualizar la función?' ) ) {
                this._functionsService.updateFunction( this.functionId, this.form.get( 'function_name' )!.value, this.form.get( 'profiles' )!.value );
                this._toastrNotificationService.info( {
                    title: 'Función actualizada',
                    message: 'La función ha sido actualizada con éxito'
                } );
            } else {
                this._toastrNotificationService.warning( {
                    title: 'Actualización cancelada',
                    message: 'Se ha cancelado la actualización de la función'
                } );
            }
        }


        this.form.reset();
        this.form.get( 'profiles' )?.setValue( [] );

        this._router.navigate( [ 'profiles/functions' ] );

        this.showForm = false;
    }
}
