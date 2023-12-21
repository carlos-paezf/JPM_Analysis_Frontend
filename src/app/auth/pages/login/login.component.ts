import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from '../../../shared/classes/custom-validators.class';
import { FormBaseType } from '../../../shared/types';
import { ToastrNotificationService } from '../../../shared/services/toastr-notification.service';
import { AuthUsersService } from '../../../shared/services/auth-users.service';


/**
 * The LoginComponent class is a TypeScript component that handles the login 
 * functionality, form validation, and displays notifications. 
 *
 * @author cpaezfer
 */
@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent extends CustomValidators implements FormBaseType, OnInit {
    public form!: FormGroup;
    public submitted: boolean = false;

    public isInputPassword: boolean = true;

    constructor (
        private readonly _formBuilder: FormBuilder,
        private readonly _router: Router,
        private readonly _toastrNotificationService: ToastrNotificationService,
        private readonly _authUsersService: AuthUsersService
    ) {
        super();
    }

    ngOnInit (): void {
        this.form = this._formBuilder.group( {
            username: [ '', [ Validators.required, Validators.minLength( 6 ) ] ],
            password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ]
        } );
    }

    /**
     * The onSubmit function checks if the form is valid, logs in the user, navigates to the dashboard,
     * and displays success or error notifications.
     * @returns a toastr notification object.
     */
    onSubmit () {
        this.form.markAllAsTouched();

        if ( this.form.status === 'INVALID' ) return this._toastrNotificationService.error( {
            title: 'Error en el formulario',
            message: 'Por favor valide los campos del formulario'
        } );

        this._authUsersService.login();

        this.submitted = true;

        this._router.navigateByUrl( 'app/dashboard' );

        this._toastrNotificationService.cleanAllToast();

        return this._toastrNotificationService.success( {
            title: 'Inicio de Sesión',
            message: 'Has iniciado sesión exitosamente'
        } );
    }

    /**
     * The function returns an error message based on the validation errors of a username input field.
     * @returns a string that represents an error message related to the username field in a form. 
     */
    get usernameError (): string {
        const usernameControl = this.form.get( 'username' );

        if ( usernameControl?.getError( 'required' ) )
            return 'Se debe ingresar un correo o nombre de usuario';

        else if ( usernameControl?.getError( 'minlength' ) )
            return 'El correo o nombre de usuario debe tener mínimo 6 caracteres';

        return '';
    }

    /**
     * The function returns an error message based on the validation rules for a password field.
     * @returns a string that represents an error message related to the password input field.
     */
    get passwordError (): string {
        const passwordControl = this.form.get( 'password' );

        if ( passwordControl?.getError( 'required' ) )
            return 'Se debe ingresar una contraseña';

        else if ( passwordControl?.getError( 'minlength' ) )
            return 'La contraseña debe tener mínimo 8 caracteres';

        return '';
    }
}
