import { Component, Input } from '@angular/core';

type ResultType = {
    name: string;
    value: number;
    color: string;
};


@Component( {
    selector: 'app-number-card',
    templateUrl: './number-card.component.html',
    styleUrls: [ './number-card.component.scss' ]
} )
export class NumberCardComponent {
    @Input() results!: ResultType[];
}
