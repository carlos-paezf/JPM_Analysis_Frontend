import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { DiffExcelVsDatabaseType } from '../../../../../shared/types';


/**
 * The ResultsAccordionComponent class in TypeScript initializes properties based on input values 
 * and sets up an accordion section for displaying comparison results. 
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-results-accordion',
    templateUrl: './results-accordion.component.html',
    styleUrls: [ './results-accordion.component.scss' ]
} )
export class ResultsAccordionComponent implements OnInit {
    @ViewChild( MatAccordion ) accordion!: MatAccordion;

    @Input() sectionId: string = '';
    @Input() sectionName: string = '';
    @Input() result!: DiffExcelVsDatabaseType<any>;
    @Input() commonColumns!: { [ key: string ]: string; };

    keys: string[] = [];

    /**
     * The `ngOnInit` function pushes the keys of the `commonColumns` object into the `keys` array.
     */
    ngOnInit (): void {
        this.keys.push( ...Object.keys( this.commonColumns ) );
    }
}
