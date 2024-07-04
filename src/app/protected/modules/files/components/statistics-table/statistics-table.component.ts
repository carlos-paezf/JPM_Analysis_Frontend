import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CompareSeedResponseType, StatisticsSectionType } from '../../../../../shared/types';


@Component( {
    selector: 'app-statistics-table',
    templateUrl: './statistics-table.component.html',
    styleUrls: [ './statistics-table.component.scss' ]
} )
export class StatisticsTableComponent {
    @Input() results!: CompareSeedResponseType;


    constructor ( private _router: Router ) { }


    public sections: StatisticsSectionType[] = [
        { name: 'Cuentas', sectionName: "accounts", 'reportName': 'accountsReport' },
        { name: 'Usuarios de la Compañía', sectionName: "company_users", 'reportName': 'companyUsersReport' },
        { name: 'Funciones', sectionName: "functions", 'reportName': 'functionsReport' },
        { name: 'Perfiles', sectionName: "profiles", 'reportName': 'profilesReport' },
        { name: 'Perfiles - Funciones', sectionName: "profiles_functions", 'reportName': 'profilesFunctionsReport' },
        { name: 'Productos', sectionName: "products", 'reportName': 'productsReport' },
        { name: 'Productos - Cuentas', sectionName: "products_accounts", 'reportName': 'productsAccountsReport' },
        { name: 'Autorizaciones de Usuarios', sectionName: "users_entitlements", 'reportName': 'usersEntitlementsReport' }
    ];


    /**
     * The function `redirectSection` scrolls the webpage to a specified section element and updates
     * the URL fragment accordingly.
     * @param {string} sectionId - The `sectionId` parameter is a string that represents the ID of the
     * section in the HTML document that you want to redirect to.
     */
    redirectSection ( sectionId: string ) {
        const element = document.getElementById( sectionId );
        if ( element ) {
            element.scrollIntoView( { behavior: 'smooth', block: 'start', inline: 'nearest' } );

            this._router.navigate( [], { fragment: sectionId } );
        }
    }


    /**
     * This TypeScript function retrieves a specific result from a given report based on the report
     * name and result type.
     * @param {'accountsReport' | 'companyUsersReport' | 'functionsReport' |
     *             'profilesReport' | 'profilesFunctionsReport' | 'productsReport' |
     *             'productsAccountsReport' | 'usersEntitlementsReport'} reportName - The `reportName`
     * parameter specifies the type of report for which you want to retrieve the amount. It can have
     * one of the following values: 'accountsReport', 'companyUsersReport', 'functionsReport',
     * 'profilesReport', 'profilesFunctionsReport', 'productsReport', 'productsAccountsReport',
     * @param {'countNewEntities' | 'countEntitiesWithDifferences' | 'countToDeleteEntities'} result -
     * The `result` parameter in the `getAmount` function specifies the type of result that you want to
     * retrieve. It can have one of the following values:
     * @returns the amount of a specific result for a given report name. It accesses the result value
     * from the `results` object using the provided `reportName` and `result` parameters. If the result
     * is found, it is returned; otherwise, it returns '--'.
     */
    getAmount (
        reportName: 'accountsReport' | 'companyUsersReport' | 'functionsReport' |
            'profilesReport' | 'profilesFunctionsReport' | 'productsReport' |
            'productsAccountsReport' | 'usersEntitlementsReport',
        result: 'countNewEntities' | 'countEntitiesWithDifferences' | 'countToDeleteEntities'
    ) {
        return this.results[ reportName ][ result ] || '--';
    }
}
