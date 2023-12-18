import { Component, Input } from '@angular/core';

/**
 * The SupportImageComponent class is a TypeScript component that represents 
 * an image with support information, including source srcset, image source, 
 * alt text, and a message. 
 *
 * @author cpaezfer
 */
@Component( {
    selector: 'app-support-image',
    templateUrl: './support-image.component.html',
    styleUrls: [ './support-image.component.scss' ]
} )
export class SupportImageComponent {
    @Input() public sourceSrcset!: string;
    @Input() public imgSrc!: string;
    @Input() public alt!: string;
    @Input() public message!: string;
}
