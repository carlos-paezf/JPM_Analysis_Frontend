import { Component, Input, OnInit } from '@angular/core';

import { EntityWithDifferencesType } from '../../../../../shared/types/jpm-types.type';


/**
 * The `EntityComparisonTableComponent` class in TypeScript compares data between a database entity and
 * an Excel entity to calculate total additions, deletions, and updates, with methods for defining
 * individual statistics and highlighting differences. 
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-entity-comparison-table',
    templateUrl: './entity-comparison-table.component.html',
    styleUrls: [ './entity-comparison-table.component.scss' ]
} )
export class EntityComparisonTableComponent implements OnInit {
    @Input() entityName!: string;
    @Input() entityWithDifferences!: EntityWithDifferencesType<any>;
    @Input() commonColumns!: { [ key: string ]: string; };
    @Input() keys: string[] = [];

    public totalAdds: number = 0;
    public totalUpdates: number = 0;
    public totalDeletes: number = 0;

    private _highlightStyles = {
        positiveDiff: "#50e650b0",
        warningDiff: "#fbff04d6",
        negativeDiff: "#ff000099"
    };


    ngOnInit (): void {
        this.defineIndividualStatistics();
    }


    /**
     * The function `defineIndividualStatistics` compares data between a database entity and an Excel
     * entity to calculate the total number of additions, deletions, and updates.
     */
    defineIndividualStatistics () {
        const databaseData = this.entityWithDifferences.databaseEntity;
        const excelData = this.entityWithDifferences.excelEntity;

        for ( const key of this.keys ) {
            if ( databaseData[ key ] === null && excelData[ key ] !== null ) {
                this.totalAdds += 1;
            }
            else if ( excelData[ key ] === null && databaseData[ key ] !== null ) {
                this.totalDeletes += 1;
            }
            else if ( databaseData[ key ] !== excelData[ key ] ) {
                this.totalUpdates++;
            }
        }
    }


    /**
     * The function `isDifferent` compares two values and returns a specific highlight style based on
     * their differences.
     * @param {any} databaseValue - The `databaseValue` parameter represents a value retrieved from a
     * database, while the `excelValue` parameter represents a value from an Excel spreadsheet. The
     * `isDifferent` function compares these two values and returns a specific highlight style based on
     * the comparison result.
     * @param {any} excelValue - The `excelValue` parameter represents a value from an Excel
     * spreadsheet cell that you want to compare with a value from a database (`databaseValue`). The
     * `isDifferent` function compares these two values and returns a specific highlight style based on
     * the comparison result.
     * @returns The `isDifferent` function returns a string value based on the comparison of
     * `databaseValue` and `excelValue`. It returns different strings based on conditions.
     */
    isDifferent ( databaseValue: any, excelValue: any ): string | null {
        if ( databaseValue === null && excelValue !== null ) return this._highlightStyles.positiveDiff;

        else if ( excelValue === null && databaseValue !== null ) return this._highlightStyles.negativeDiff;

        else if ( databaseValue !== excelValue ) return this._highlightStyles.warningDiff;

        else return null;
    }
}
