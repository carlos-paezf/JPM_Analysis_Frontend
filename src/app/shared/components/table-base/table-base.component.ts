import { animate, state, style, transition, trigger } from '@angular/animations';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { ToastrNotificationService } from '../../services/toastr-notification.service';
import { ColumnTableType } from '../../types';


/** 
 * The `TableBaseComponent` class is a TypeScript component that represents 
 * a table with pagination, sorting, filtering, and expandable rows.
 * 
 * @author cpaezfer
 */
@Component( {
    selector: 'app-table-base',
    templateUrl: './table-base.component.html',
    styleUrls: [ './table-base.component.scss' ],
    /* The `animations` property in the component decorator is used to define animations for the
    component. In this case, it defines an animation trigger called `detailExpand`. */
    animations: [
        /* The `trigger('detailExpand', ...)` code block is defining an animation trigger called
        `detailExpand`. This trigger is used to animate the expansion and collapse of a row in a
        table. */
        trigger( 'detailExpand', [
            /* The `state( 'collapsed', style( { height: '0px', minHeight: '0' } ) )` line is defining
            a state called 'collapsed' for the animation trigger. This state sets the height and
            minHeight CSS properties of the element to '0px'. This means that when the row is in the
            'collapsed' state, it will have a height of '0px' and will be hidden from view. */
            state( 'collapsed', style( { height: '0px', minHeight: '0' } ) ),
            /* The `state( 'expanded', style( { height: '*' } ) )` line is defining a state called
            'expanded' for the animation trigger. This state sets the height CSS property of the
            element to '*', which means that when the row is in the 'expanded' state, it will have a
            dynamic height based on its content and will be fully visible. The '*' value is used to
            indicate that the height should be automatically determined based on the content. */
            state( 'expanded', style( { height: '*' } ) ),
            /* The `transition( 'expanded <=> collapsed', animate( '225ms cubic-bezier(0.4, 0.0, 0.2,
            1)' ) )` code block is defining a transition for the animation trigger called
            `detailExpand`. */
            transition( 'expanded <=> collapsed', animate( '225ms cubic-bezier(0.4, 0.0, 0.2, 1)' ) ),
        ] ),
    ]
} )
export class TableBaseComponent implements OnInit, AfterViewInit {
    @Input() public displayedColumns: string[] = [];
    @Input() public data: any[] = [];
    @Input() public columns: ColumnTableType<any>[] = [];
    @Input() public stickyColumn: string = 'user_name';
    @Input() public baseUrl!: string;
    @Input() public deleteFunction!: Function;
    @Input() public reactivateFunction!: Function;

    public expandedRow: any | null;
    public columnsToDisplayWithExpand = [ ...this.displayedColumns, 'expand' ];

    @ViewChild( MatPaginator ) public paginator!: MatPaginator;
    @ViewChild( MatSort ) public sort!: MatSort;

    public dataSource!: MatTableDataSource<any>;

    constructor (
        private readonly _liveAnnouncer: LiveAnnouncer,
        private readonly _router: Router,
        private readonly _toastrNotificationService: ToastrNotificationService
    ) { }

    /**
     * The function initializes the data source for a MatTable with pagination and sorting.
     */
    private _fetchData () {
        this.dataSource = new MatTableDataSource<any>( this.data );
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.columnsToDisplayWithExpand = [ ...this.displayedColumns, 'expand' ];
    }

    /**
     * The ngOnInit function is used to initialize data when the component is first loaded.
     */
    ngOnInit (): void {
        this._fetchData();
    }

    /**
     * The ngAfterViewInit function is used to initialize data after the view has been initialized in
     * Angular.
     */
    ngAfterViewInit (): void {
        this._fetchData();
    }

    /**
     * The function "announceSortChange" announces the current sorting state or clears the sorting.
     * @param {Sort} sortState - The sortState parameter is an object that represents the current state
     * of the sorting. It contains a property called direction, which indicates the direction of the
     * sorting (e.g., ascending or descending).
     */
    announceSortChange ( sortState: Sort ) {
        this._liveAnnouncer.announce(
            sortState.direction
                ? `Sorted ${ sortState.direction } ending`
                : `Sorting cleared`
        );
    }

    /**
     * The function applies a filter to a data source based on the value of an input element and resets
     * the paginator if available.
     * @param {Event} event - The event parameter is an object that represents the event that triggered
     * the filter. It could be an input event, a button click event, or any other type of event that
     * you want to use to trigger the filtering action.
     */
    applyFilter ( event: Event ) {
        const filterValue = ( event.target as HTMLInputElement ).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if ( this.dataSource.paginator ) {
            this.dataSource.paginator.firstPage();
        }
    }

    /**
     * The "drop" function in TypeScript is used to move an item within an array based on the drag and
     * drop event.
     * @param event - The event parameter is an object that contains information about the drag and
     * drop event. It includes properties such as previousIndex, which represents the index of the item
     * before it was moved, and currentIndex, which represents the index of the item after it was
     * moved.
     */
    drop ( event: CdkDragDrop<string[]> ) {
        moveItemInArray( this.displayedColumns, event.previousIndex, event.currentIndex );
    }

    /**
     * The function `handleRedirectUser` redirects the user to a specific user page based on their ID.
     * @param {string} idUser - The idUser parameter is a string that represents the unique identifier
     * of a user.
     */
    handleRedirectUser ( access_id: string, userName: string ) {
        const redirectionAccepted = window.confirm( `¿Desea abrir la vista detallada del usuario ${ userName }?` );

        if ( !redirectionAccepted ) return;

        this._router.navigateByUrl( `company-users/admin/${ access_id }` );
    }

    /**
     * The function redirects to a detail page with the ID of a row.
     * @param {string} id - The id parameter is of type `string`, that represents the unique identifier.
     */
    handleRedirectDetail ( id: string ) {
        this._router.navigateByUrl( `${ this.baseUrl }/admin/${ id }` );
    }

    /**
     * The function reloadData fetches data and displays a toastr notification with a success message.
     */
    reloadData () {
        this._fetchData();

        this._toastrNotificationService.info( {
            title: "Información actualizada",
            message: "Información actualizada con éxito"
        } );
    }


    /**
     * The function prompts the user to confirm the deletion of an item with a given ID, and if
     * confirmed, it calls a delete function and reloads the data.
     * @param {unknown} id - The id parameter is the identifier of the item that you want to delete.
     * @returns the result of the `reloadData()` function if the user confirms the deletion, otherwise
     * it returns nothing.
     */
    deleteItem ( id: unknown ) {
        if ( window.confirm( `¿Está seguro de eliminar el item con llave "${ id }"?` ) ) {
            this.deleteFunction( id );
            return this.reloadData();
        }
        return;
    }


    /**
     * The function `reactivateItem` prompts the user to confirm reactivating an item with a given ID,
     * and if confirmed, calls a `reactivateFunction` and reloads data.
     * @param {unknown} id - The id parameter is the unique identifier of the item that needs to be
     * reactivated.
     * @returns The function `reactivateItem` returns the result of calling the `reloadData` function.
     */
    reactivateItem ( id: unknown ) {
        if ( window.confirm( `¿Está seguro de reactivar el item con la llave "${ id }"?` ) ) {
            this.reactivateFunction( id );
            return this.reloadData();
        }
        return;
    }
}
