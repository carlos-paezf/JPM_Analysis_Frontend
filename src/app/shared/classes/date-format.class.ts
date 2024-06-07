import * as moment from "moment-timezone";

export class DateFormat {
    // public static getColombianTime ( date: Date ): string {
    //     const options: Intl.DateTimeFormatOptions = {
    //         timeZone: 'America/Bogota',
    //         hour12: false,
    //         hour: '2-digit',
    //         minute: '2-digit',
    //         second: '2-digit'
    //     };

    //     return date.toLocaleTimeString( 'es-CO', options );
    // }

    public static getColombianTime ( date: Date ) {
        return moment( date ).tz( 'America/Bogota' ).format( 'ddd MMM DD YYYY HH:mm:ss [(Colombia Standard Time)]' );
    }
}