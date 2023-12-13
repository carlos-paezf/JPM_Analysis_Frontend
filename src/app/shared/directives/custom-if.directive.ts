import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * @author cpaezfer
 */
@Directive( {
    selector: '[customIf]'
} )
export class CustomIfDirective {
    constructor (
        private readonly _templateRef: TemplateRef<HTMLElement>,
        private readonly _viewContainer: ViewContainerRef
    ) { }

    /**
     * A setter that is called when the value of the customIf input is changed.
     * If the condition is true, create the embedded view, otherwise clear the view container
     * @param {boolean} condition - boolean - The condition to evaluate as the condition fot which View to display
     */
    @Input() set customIf ( condition: boolean ) {
        condition
            ? this._viewContainer.createEmbeddedView( this._templateRef )
            : this._viewContainer.clear();
    }
}
