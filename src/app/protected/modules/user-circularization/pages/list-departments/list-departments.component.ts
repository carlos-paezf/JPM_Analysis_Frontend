import { Component } from '@angular/core';

import { ListEntityBase } from '../../../../../shared/classes/list-entity-base.class';
import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { ColumnTableType, DepartmentEagerType, DepartmentType } from '../../../../../shared/types';
import { DepartmentsService } from '../../../departments/services/departments.service';


@Component( {
    selector: 'app-list-departments',
    templateUrl: './list-departments.component.html',
    styleUrls: [ './list-departments.component.scss' ]
} )
export class ListDepartmentsComponent extends ListEntityBase<DepartmentType, DepartmentEagerType> {
    public override displayedColumns: string[] = [
        'initials',
        'departmentName',
        // 'createdAt',
        // 'updatedAt',
        // 'deletedAt'
    ];

    public override columns: ColumnTableType<DepartmentType>[] = [
        { columnDef: 'initials', header: 'Iniciales', cell: ( row ) => row.initials },
        { columnDef: 'departmentName', header: 'Nombre del departamento', cell: ( row ) => row.departmentName },
        { columnDef: 'createdAt', header: 'Fecha de creación', cell: ( row ) => row.createdAt },
        { columnDef: 'updatedAt', header: 'Última actualización', cell: ( row ) => row.updatedAt },
        { columnDef: 'deletedAt', header: 'Fecha de eliminación', cell: ( row ) => row.deletedAt }
    ];


    constructor (
        _appUtilsMessagesService: AppUtilsMessagesService,
        _departmentsService: DepartmentsService
    ) {
        super( _appUtilsMessagesService, _departmentsService );
    }
}
