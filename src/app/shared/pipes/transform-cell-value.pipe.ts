import { Pipe, PipeTransform } from '@angular/core';

/**
 * @author cpaezfer
 */
@Pipe( {
    name: 'transformCellValue'
} )
export class TransformCellValuePipe implements PipeTransform {

    /**
     * The function transforms various types of values into a string representation, handling different
     * types such as boolean, number and Date.
     * @param {unknown} value - The `value` parameter is of type `unknown`, which means it can be any
     * type. It represents the value that needs to be transformed into a string.
     * @param {unknown[]} args - The `args` parameter is a rest parameter that allows you to pass an
     * arbitrary number of arguments to the `transform` function. These arguments can be of any type
     * and will be stored in an array called `args`.
     * @returns a string value.
     */
    transform ( value: unknown, ...args: unknown[] ): string {
        if ( value === undefined || value === null ) return '';

        if ( typeof value === 'boolean' ) {
            return ( value ) ? '✔' : '❌';
        }

        if ( typeof value === 'number' ) {
            return new Intl.NumberFormat().format( value );
        }

        if ( value instanceof Date ) {
            const options: Intl.DateTimeFormatOptions = {
                weekday: 'short',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            };
            const dateTimeFormat = new Intl.DateTimeFormat( 'es-CO', options );
            return dateTimeFormat.format( value );
        }

        return `${ value }`;
    }
}
