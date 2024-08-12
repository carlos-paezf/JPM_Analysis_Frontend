import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { CircularizationData, DepartmentType } from '../../../../../shared/types';
import { DepartmentsService } from '../../services/departments.service';
import { UserCircularizationService } from '../../services/user-circularization.service';
import { banrep_logo_base64 } from '../../../../constants/banrep-logo-base64';


@Component( {
    selector: 'app-generate-user-circularization',
    templateUrl: './generate-user-circularization.component.html',
    styleUrls: [ './generate-user-circularization.component.scss' ]
} )
export class GenerateUserCircularizationComponent implements OnInit {
    @ViewChild( MatAccordion ) accordion!: MatAccordion;

    public circularizationData: CircularizationData[] = [];
    public isLoadingResults: boolean = false;
    public isEmptyResults: boolean = false;
    public departmentsData: DepartmentType[] = [];


    constructor (
        private readonly _userCircularizationService: UserCircularizationService,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
        private readonly _departmentsService: DepartmentsService
    ) { }

    ngOnInit (): void {
        this._departmentsService.getAll().subscribe( {
            next: ( { data } ) => {
                this.departmentsData = data;
            },
            error: error => this._appUtilsMessagesService.showQueryErrorMessage( error )
        } );
    }


    generateUserCircularization () {
        this.isLoadingResults = true;
        this._userCircularizationService.generateUserCircularization().subscribe(
            {
                next: response => {
                    this.circularizationData = response;
                    if ( response.length > 0 ) {
                        this.isEmptyResults = false;
                    }
                },
                error: error => this._appUtilsMessagesService.showQueryErrorMessage( error )
            }
        );
        this.isLoadingResults = false;
    }


    generateExcel () {
        const workbook = new ExcelJS.Workbook();

        this.circularizationData.forEach( circularizationData => {
            const worksheet = workbook.addWorksheet( circularizationData.department );

            worksheet.columns = [
                { key: 'A', width: 20 },
                { key: 'B', width: 20 },
                { key: 'C', width: 15 },
                { key: 'E', width: 17 },
                { key: 'D', width: 15 },
                { key: 'F', width: 25 },
            ];

            const imageWidthPx = 80;
            const imageHeightPx = 80;

            worksheet.getRow( 1 ).height = 50;
            worksheet.getRow( 2 ).height = 50;

            worksheet.mergeCells( 'A1:A2' );
            worksheet.getCell( 'A1' ).fill = this.getFillColor( '002e52' ) as ExcelJS.Fill;
            worksheet.getCell( 'A1' ).font = this.getFontStyle( 14, true, 'FFFFFF' );

            const imageId = workbook.addImage( {
                base64: banrep_logo_base64,
                extension: 'png',
            } );

            worksheet.addImage( imageId, {
                tl: { col: 0, row: 0 },
                ext: { width: imageWidthPx, height: imageHeightPx },
                editAs: 'oneCell'
            } );

            worksheet.mergeCells( 'B1:F1' );
            this.setCellStyle( worksheet.getCell( 'B1' ), 'CIRCULARIZACIÓN DE USUARIOS JPMORGAN TI', '002e52', 'FFFFFF' );

            worksheet.mergeCells( 'B2:F2' );
            this.setCellStyle( worksheet.getCell( 'B2' ), `FECHA DE GENERACIÓN ${ new Date().toLocaleString().split( ',' ).at( 0 ) }`, '002e52', 'FFFFFF' );

            const headerRow = [ 'Nombre', 'Usuario', 'Departamento', 'Perfil', 'Estado', 'Correo' ];
            headerRow.forEach( ( header, index ) => {
                const cell = worksheet.getCell( 3, index + 1 );
                this.setCellStyle( cell, header, '002e52', 'FFFFFF' );
            } );

            circularizationData.users.forEach( user => {
                worksheet.addRow( [
                    user.name,
                    user.accessId,
                    user.departmentInitials,
                    user.profileName,
                    user.status ? 'ACTIVO' : 'INACTIVO',
                    user.email
                ] );
            } );
        } );


        workbook.xlsx.writeBuffer().then( ( data ) => {
            const blob = new Blob( [ data ], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' } );
            saveAs( blob, `CircularizationData_${ new Date().toLocaleDateString() }.xlsx` );
        } );
    }


    getFillColor ( color: string ) {
        return {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: color }
        } as ExcelJS.Fill;
    }


    getFontStyle ( size: number, bold: boolean, color: string ) {
        return {
            bold: bold,
            size: size,
            color: { argb: color }
        };
    }


    setCellStyle ( cell: ExcelJS.Cell, value: string, bgColor: string, fontColor: string ) {
        cell.value = value;
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.font = this.getFontStyle( 12, true, fontColor );
        cell.fill = this.getFillColor( bgColor );
    }
};
