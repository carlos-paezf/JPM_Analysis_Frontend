import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver-es';

import { AppUtilsMessagesService } from '../../../../../shared/services/app-utils-messages.service';
import { CellStyleType, CircularizationData, DepartmentType, UserCompanyCircularizationType } from '../../../../../shared/types';
import { banrep_logo_base64 } from '../../../../constants/banrep-logo-base64';
import { DepartmentsService } from '../../services/departments.service';
import { UserCircularizationService } from '../../services/user-circularization.service';



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

    private _circularizationDate!: string;
    private _maximumDateForUpdate!: string;


    constructor (
        private readonly _userCircularizationService: UserCircularizationService,
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
        private readonly _departmentsService: DepartmentsService
    ) { }


    /**
     * The above function initializes a component in Angular by fetching all departments data from a
     * service and handling the response and error accordingly.
     */
    ngOnInit (): void {
        this._departmentsService.getAll().subscribe( {
            next: ( { data } ) => {
                this.departmentsData = data;
            },
            error: error => this._appUtilsMessagesService.showQueryErrorMessage( error )
        } );

        this._defineDates();
    }


    /**
     * The function `generateUserCircularization` sets a loading flag, calls a service to generate user
     * circularization data, and updates the UI based on the response.
     */
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


    /**
     * The function generates an Excel file with circularization data, including department
     * information, user details, and a logo image.
     */
    generateExcel () {
        const workbook = new ExcelJS.Workbook();
        const imageId = workbook.addImage( {
            base64: banrep_logo_base64,
            extension: 'png',
        } );

        this.circularizationData.forEach( circularizationData => {
            const worksheet = workbook.addWorksheet( circularizationData.department );

            this._setWorksheetColumns( worksheet );
            this._addHeaderRows( worksheet, circularizationData.department );
            this._addImageToWorksheet( worksheet, imageId );
            this._addUserRows( worksheet, circularizationData.users );
        } );


        workbook.xlsx.writeBuffer().then( ( data ) => {
            const blob = new Blob( [ data ], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' } );
            saveAs( blob, `CircularizationData_${ new Date().toLocaleDateString() }.xlsx` );
        } );
    }


    /**
     * The function `defineDates` calculates a date 15 days from the current date and formats it as a
     * string in Spanish.
     */
    private _defineDates () {
        const date = new Date();

        this._circularizationDate = date.toLocaleString().split( ',' ).at( 0 )!;

        date.setDate( date.getDate() + 15 );

        const months = [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];

        const day = date.getDate();
        const month = months[ date.getMonth() ];
        const year = date.getFullYear();

        this._maximumDateForUpdate = `${ day } de ${ month } de ${ year }`;
    }


    /**
     * The function `_setWorksheetColumns` sets the column widths for a given Excel worksheet.
     * @param worksheet - The `worksheet` parameter in the `_setWorksheetColumns` function is of type
     * `ExcelJS.Worksheet`. This parameter represents the worksheet in an Excel workbook where you want
     * to set the column widths.
     */
    private _setWorksheetColumns ( worksheet: ExcelJS.Worksheet ) {
        worksheet.columns = [
            { key: 'A', width: 32.5 },
            { key: 'B', width: 22.5 },
            { key: 'C', width: 20 },
            { key: 'E', width: 20 },
            { key: 'D', width: 20 },
            { key: 'F', width: 30 },
        ];
    }


    /**
     * The _addHeaderRows function in TypeScript adds header rows with specific styling and content to
     * an Excel worksheet.
     * @param worksheet - The `worksheet` parameter is an ExcelJS.Worksheet object where you are adding
     * header rows. It allows you to manipulate and interact with the Excel worksheet, such as merging
     * cells, setting cell values, styles, and heights. In your `_addHeaderRows` function, you are
     * using this parameter to
     * @param {string} department - The `department` parameter in the `_addHeaderRows` function is a
     * string that represents the department for which the header rows are being added in the Excel
     * worksheet. It is used to customize the header content based on the specific department being
     * processed.
     */
    private _addHeaderRows ( worksheet: ExcelJS.Worksheet, department: string ) {
        worksheet.mergeCells( 'A1:F1' );
        worksheet.getRow( 1 ).height = 50;
        this._setCellStyle(
            {
                cell: worksheet.getCell( 'A1' ),
                value: `REVISIÓN Y DEPURACIÓN DE USUARIOS SISTEMA JPMorgan - ${ department }`,
                bgColor: '002e52',
                fontColor: 'FFFFFF',
                fontName: 'Times New Roman'
            }
        );

        worksheet.mergeCells( 'B2:E2' );
        worksheet.getRow( 2 ).height = 300;
        this._setCellStyle(
            {
                cell: worksheet.getCell( 'B2' ),
                value: `Atentamente solicitamos efectuar una revisión al siguiente reporte correspondiente a los usuarios vigentes de JPMorgan TI con su respectivo perfil a la fecha.\n\nEn caso de existir novedades, se deben solicitar en el SharePoint de InfoBanco a través de servicio al cliente buscando el servicio "Perfiles JPMorgan Chase" a más tardar el día ${ this._maximumDateForUpdate }; pasada esta fecha, se asumirá la conformidad a dicho reporte.\n\nAgradecemos su valiosa colaboración.\n\nCordial saludo,`,
                bgColor: 'FFFFFF',
                fontColor: '000000',
                alignment: { vertical: 'middle', horizontal: 'justify' },
                bold: false
            }
        );

        worksheet.getRow( 3 ).height = 45;
        worksheet.getRow( 4 ).height = 45;

        worksheet.mergeCells( 'A3:F3' );
        this._setCellStyle(
            {
                cell: worksheet.getCell( 'B3' ),
                value: 'CIRCULARIZACIÓN DE USUARIOS JPMORGAN TI',
                bgColor: '002e52',
                fontColor: 'FFFFFF'
            }
        );

        worksheet.mergeCells( 'A4:F4' );
        this._setCellStyle(
            {
                cell: worksheet.getCell( 'B4' ),
                value: `FECHA DE GENERACIÓN ${ this._circularizationDate }`,
                bgColor: '002e52',
                fontColor: 'FFFFFF'
            }
        );
    }


    /**
     * The function `_addImageToWorksheet` adds an image to a worksheet at a specific location with a
     * specified width and height.
     * @param worksheet - The `worksheet` parameter is an instance of the ExcelJS.Worksheet class,
     * which represents a single worksheet within an Excel workbook. It is used to perform operations
     * such as adding data, formatting cells, and adding images to the worksheet.
     * @param {number} imageId - The `imageId` parameter is the identifier of the image that you want
     * to add to the Excel worksheet. It is used to reference the specific image that you want to
     * insert into the worksheet.
     */
    private _addImageToWorksheet ( worksheet: ExcelJS.Worksheet, imageId: number ) {
        const imageWidthPx = 235;
        const imageHeightPx = 92.5;

        worksheet.addImage( imageId, {
            tl: { col: 0, row: 2 },
            ext: { width: imageWidthPx, height: imageHeightPx },
            editAs: 'oneCell'
        } );
    }


    /**
     * The function `_addUserRows` adds rows of user data to an Excel worksheet with specified cell
     * styles.
     * @param worksheet - The `worksheet` parameter is an ExcelJS.Worksheet object where the user rows
     * will be added.
     * @param {UserCompanyCircularizationType[]} users - The `users` parameter in the `_addUserRows`
     * function is an array of objects of type `UserCompanyCircularizationType`. Each object in the
     * array represents a user and contains the following properties:
     */
    private _addUserRows ( worksheet: ExcelJS.Worksheet, users: UserCompanyCircularizationType[] ) {
        const headerRow = [ 'Nombre', 'Usuario', 'Departamento', 'Perfil', 'Estado', 'Correo' ];

        worksheet.addRow( headerRow ).eachCell( ( cell, colNumber ) => {
            this._setCellStyle( {
                cell: cell,
                value: headerRow[ colNumber - 1 ],
                bgColor: '002e52',
                fontColor: 'FFFFFF',
                withBorder: true
            } );
        } );

        users.forEach( user => {
            const userData = [
                user.name, user.accessId, user.departmentInitials,
                user.profileName, user.status ? 'ACTIVO' : 'INACTIVO', user.email
            ];

            worksheet.addRow( userData ).eachCell( ( cell, colNumber ) => {
                this._setCellStyle( {
                    cell: cell,
                    value: userData[ colNumber - 1 ],
                    bgColor: 'FFFFFF',
                    fontColor: '000000',
                    alignment: { vertical: 'justify', horizontal: 'left' },
                    bold: false,
                    withBorder: true
                } );
            } );
        } );
    }


    /**
     * The function `getFillColor` in TypeScript returns a solid fill color pattern with the specified
     * color for ExcelJS.
     * @param {string} color - The `color` parameter in the `getFillColor` function is a string
     * representing the color value that you want to use for filling in a cell in an Excel worksheet.
     * This color value should be in the ARGB format, which is a hexadecimal representation of the
     * alpha, red, green, and blue
     * @returns An ExcelJS Fill object with a solid pattern and the specified color is being returned.
     */
    private _getFillColor ( color: string ) {
        return {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: color }
        } as ExcelJS.Fill;
    }


    /**
     * The _getFontStyle function returns an object with font properties such as size, boldness, color,
     * and font name.
     * @param {number} size - The `size` parameter in the `_getFontStyle` function represents the font
     * size of the text. It is a number value that determines how big or small the text will appear in
     * the specified font.
     * @param {boolean} bold - The `bold` parameter is a boolean value that determines whether the text
     * should be displayed in bold style or not. If `bold` is `true`, the text will be bold; if `bold`
     * is `false`, the text will not be bold.
     * @param {string} color - The `color` parameter in the `_getFontStyle` function is a string that
     * represents the color of the font in ARGB format. ARGB stands for Alpha, Red, Green, Blue, and it
     * is a way to represent colors in hexadecimal format.
     * @param {string} fontName - The `fontName` parameter in the `_getFontStyle` function refers to
     * the name of the font that you want to use for styling text. It is a string parameter where you
     * can specify the name of the font such as "Arial", "Times New Roman", "Verdana", etc.
     * @returns An object with properties for font name, boldness, size, and color is being returned.
     */
    private _getFontStyle ( size: number, bold: boolean, color: string, fontName: string ) {
        return {
            name: fontName,
            bold: bold,
            size: size,
            color: { argb: color }
        };
    }


    /**
     * The _setCellStyle function sets the style of a cell in a spreadsheet with specified values for
     * content, background color, font color, alignment, and boldness.
     * @param {CellStyleType}  - The `_setCellStyle` function takes in the following parameters:
     */
    private _setCellStyle ( {
        cell, value, bgColor, fontColor,
        alignment = { vertical: 'middle', horizontal: 'center' }, bold = true, fontName = 'Calibri', withBorder = false
    }: CellStyleType ) {
        cell.value = value;
        cell.font = this._getFontStyle( 12, bold, fontColor, fontName );
        cell.fill = this._getFillColor( bgColor );
        cell.alignment = alignment;
        if ( withBorder ) {
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
        }
    }
};
