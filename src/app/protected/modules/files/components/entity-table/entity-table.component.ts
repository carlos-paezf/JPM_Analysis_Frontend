import { Component, Input } from '@angular/core';

@Component( {
    selector: 'app-entity-table',
    templateUrl: './entity-table.component.html',
    styleUrls: [ './entity-table.component.scss' ]
} )
export class EntityTableComponent {
    @Input() panelTitle!: string;
    @Input() className: 'add' | 'delete' = 'add';
    @Input() entityName!: string;
    @Input() entity!: any;
    @Input() commonColumns!: { [ key: string ]: string; };
    @Input() keys: string[] = [];
    @Input() index: number = 0;
}
