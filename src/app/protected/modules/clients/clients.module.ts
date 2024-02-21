import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './pages/list-clients/list-clients.component';
import { AdminClientsComponent } from './pages/admin-clients/admin-clients.component';


@NgModule( {
    declarations: [
        ListClientsComponent,
        AdminClientsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialDesignModule,
        ClientsRoutingModule
    ]
} )
export class ClientsModule { }
