import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { SharedModule } from '../../../shared/shared.module';
import { AdminProfilesComponent } from './pages/admin-profiles/admin-profiles.component';
import { FunctionsComponent } from './pages/functions/functions.component';
import { ListProfilesComponent } from './pages/list-profiles/list-profiles.component';
import { UsersByProfilesComponent } from './pages/users-by-profiles/users-by-profiles.component';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { UsersByProfileTableComponent } from './components/users-by-profile-table/users-by-profile-table.component';
import { FunctionFormComponent } from './components/function-form/function-form.component';


@NgModule( {
    declarations: [
        ListProfilesComponent,
        AdminProfilesComponent,
        UsersByProfilesComponent,
        FunctionsComponent,
        UsersByProfileTableComponent,
        FunctionFormComponent
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
