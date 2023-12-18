import { Component, Input } from '@angular/core';


/** 
 * The TableLoadingComponent class is a TypeScript component that displays a 
 * loading state and an empty table state with corresponding images
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-table-loading',
    templateUrl: './table-loading.component.html',
    styleUrls: [ './table-loading.component.scss' ]
} )
export class TableLoadingComponent {
    @Input() public isLoadingResults: boolean = true;
    @Input() public isEmptyTable: boolean = true;

    public sourceSrcset = "../../../../assets/images/Searching-amico.png";
    public imgSrc = "../../../../assets/images/Searching-amico.svg";
}
