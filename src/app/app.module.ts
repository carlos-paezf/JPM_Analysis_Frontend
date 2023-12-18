import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { ErrorHandlingInterceptorService } from './shared/http-interceptors/error-handling-interceptor.service';
import { LoadingInterceptorService } from './shared/http-interceptors/loading-interceptor.service';
import { SharedModule } from './shared/shared.module';


@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot( {
            preventDuplicates: true,
            countDuplicates: true,
            resetTimeoutOnDuplicate: true,
            includeTitleDuplicates: true
        } ),
        AppRoutingModule,
        SharedModule,
        MaterialDesignModule,
    ],
    providers: [
        Title,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptorService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlingInterceptorService,
            multi: true
        }
    ],
    bootstrap: [ AppComponent ]
} )
export class AppModule { }
