import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { AdminProfilesComponent } from './pages/admin-profiles/admin-profiles.component';
import { ListProfilesComponent } from './pages/list-profiles/list-profiles.component';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule( {
    declarations: [
        ListProfilesComponent,
        AdminProfilesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        MaterialDesignModule,
        ProfilesRoutingModule
    ]
} )
export class ProfilesModule { }
