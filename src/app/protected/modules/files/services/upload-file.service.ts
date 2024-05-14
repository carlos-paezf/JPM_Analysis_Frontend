import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { APP_USER } from '../../../../shared/mocks';
import { SessionStorageService } from '../../../../shared/services/session-storage.service';
import { ApproveChangesType, CompareSeedResponseType, EntitiesToChangesType, PostSeedResponseType, UploadFileResponseType, UploadFileType } from '../../../../shared/types';


@Injectable( {
    providedIn: 'root'
} )
export class UploadFileService {
    private _baseURL: string = `${ environment.baseURL }/excel`;

    private _postResultData?: PostSeedResponseType;
    private _compareResultData?: CompareSeedResponseType;


    constructor (
        private _http: HttpClient,
        private _sessionStorageService: SessionStorageService<PostSeedResponseType | CompareSeedResponseType>
    ) {
        this._loadSavedData();
    }


    /**
     * The function `uploadFile` in TypeScript uploads a file along with additional data to a server
     * using FormData and returns an Observable of type UploadFileResponseType.
     * @param {UploadFileType}  - - `file`: The file to be uploaded.
     * @returns An Observable of type UploadFileResponseType is being returned.
     */
    uploadFile ( { file, observations, action: fileType }: UploadFileType ): Observable<UploadFileResponseType> {
        const formData = new FormData();
        formData.append( 'file', file );
        formData.append( 'action', fileType );
        formData.append( 'observations', observations );
        formData.append( 'appUserId', APP_USER.id );

        return this._http.post<UploadFileResponseType>( this._baseURL, formData );
    }


    /**
     * The function `approveChanges` compares changes, prepares data for approval, and sends a POST
     * request to approve the changes.
     * @param {ApproveChangesType}  - The `approveChanges` function takes in the following parameters:
     * @returns The function `approveChanges` is returning the result of an HTTP POST request to the
     * endpoint `${ this._baseURL }/approve-changes` with the `body` containing `entitiesToChange`,
     * `fileName`, `runReportDate`, `observations`, and `appUserId`. If there are no changes found in
     * the comparison data, it will return an error object with the message "No Changes Found
     */
    approveChanges ( { fileName, observations, runReportDate }: ApproveChangesType ) {
        const changes = this._compareResultData;

        if ( !changes
            || ( changes.totalNewEntities === 0 && changes.totalEntitiesWithDifferences === 0 && changes.totalToDeleteEntities === 0 ) ) {
            return of( { error: "No Changes Found" } );
        }

        const entitiesToChange: EntitiesToChangesType = this._parseChangesToApproveBody( changes );

        const body = {
            entitiesToChange,
            fileName,
            runReportDate,
            observations,
            appUserId: APP_USER.id
        };

        this._deleteCompareResultDataLocal();

        return this._http.post( `${ this._baseURL }/approve-changes`, body );
    }


    /**
     * The function `_parseChangesToApproveBody` takes a `CompareSeedResponseType` object and extracts
     * specific properties to create a structured `EntitiesToChangesType` object.
     * @param {CompareSeedResponseType} changes - The `_parseChangesToApproveBody` function takes in a
     * parameter `changes` of type `CompareSeedResponseType`. This parameter contains reports for
     * various entities such as accounts, company users, functions, products, profiles, and users
     * entitlements. The function then extracts specific data from each report and organ
     * @returns The function `_parseChangesToApproveBody` is returning an object with properties for
     * different entity types (accounts, companyUsers, functions, products, productsAccounts, profiles,
     * profilesFunctions, usersEntitlements). Each property contains information about new entities,
     * entities with changes, and entities to delete based on the input `changes` object of type
     * `CompareSeedResponseType`.
     */
    private _parseChangesToApproveBody ( changes: CompareSeedResponseType ): EntitiesToChangesType {
        const {
            accountsReport, companyUsersReport, functionsReport,
            productsReport, productsAccountsReport, profilesReport,
            profilesFunctionsReport, usersEntitlementsReport, fileName, runReportDate
        } = changes;

        return {
            accounts: {
                newEntities: accountsReport.newEntities,
                toChangesEntities: accountsReport.entitiesWithDifferences.map( e => e.excelEntity ),
                toDeleteEntities: accountsReport.toDeleteEntities.map( e => e.accountNumber )
            },
            companyUsers: {
                newEntities: companyUsersReport.newEntities,
                toChangesEntities: companyUsersReport.entitiesWithDifferences.map( e => e.excelEntity ),
                toDeleteEntities: companyUsersReport.toDeleteEntities.map( e => e.accessId )
            },
            functions: {
                newEntities: functionsReport.newEntities,
                toChangesEntities: functionsReport.entitiesWithDifferences.map( e => e.excelEntity ),
                toDeleteEntities: functionsReport.toDeleteEntities.map( e => e.id )
            },
            products: {
                newEntities: productsReport.newEntities,
                toChangesEntities: productsReport.entitiesWithDifferences.map( e => e.excelEntity ),
                toDeleteEntities: productsReport.toDeleteEntities.map( e => e.id )
            },
            productsAccounts: {
                newEntities: productsAccountsReport.newEntities,
                toChangesEntities: productsAccountsReport.entitiesWithDifferences.map( e => e.excelEntity ),
                toDeleteEntities: productsAccountsReport.toDeleteEntities.map( e => e.id )
            },
            profiles: {
                newEntities: profilesReport.newEntities,
                toChangesEntities: profilesReport.entitiesWithDifferences.map( e => e.excelEntity ),
                toDeleteEntities: profilesReport.toDeleteEntities.map( e => e.id )
            },
            profilesFunctions: {
                newEntities: profilesFunctionsReport.newEntities,
                toChangesEntities: profilesFunctionsReport.entitiesWithDifferences.map( e => e.excelEntity ),
                toDeleteEntities: profilesFunctionsReport.toDeleteEntities.map( e => e.id )
            },
            usersEntitlements: {
                newEntities: usersEntitlementsReport.newEntities,
                toChangesEntities: usersEntitlementsReport.entitiesWithDifferences.map( e => e.excelEntity ),
                toDeleteEntities: usersEntitlementsReport.toDeleteEntities.map( e => e.id )
            }
        };
    }


    /**
     * The function `setPostResultData` sets the post result data and stores it in session storage.
     * @param {PostSeedResponseType} data - The `data` parameter in the `setPostResultData` function is
     * of type `PostSeedResponseType`. This parameter is used to store the data related to a post
     * result.
     */
    setPostResultData ( data: PostSeedResponseType ) {
        this._postResultData = data;
        this._sessionStorageService.setItem( 'postResult', data );
    }


    /**
     * This function returns the post result data or undefined.
     * @returns The `postResultData` property is being returned. It is of type `PostSeedResponseType`
     * or `undefined`.
     */
    get postResultData (): PostSeedResponseType | undefined {
        return this._postResultData;
    }


    /**
     * The function `setCompareResultData` sets the compare result data and stores it in session
     * storage.
     * @param {CompareSeedResponseType} data - The `data` parameter in the `setCompareResultData`
     * function is of type `CompareSeedResponseType`. This parameter likely contains information
     * related to a comparison result, such as seed data for comparison.
     */
    setCompareResultData ( data: CompareSeedResponseType ) {
        this._compareResultData = data;
        this._sessionStorageService.setItem( 'compareResult', data );
    }


    /**
     * This function returns the compare result data of type CompareSeedResponseType or undefined.
     * @returns The `get compareResultData()` method is returning a value of type
     * `CompareSeedResponseType` or `undefined`.
     */
    get compareResultData (): CompareSeedResponseType | undefined {
        return this._compareResultData;
    }


    /**
     * The _loadSavedData function retrieves saved data from session storage and sets it as post and
     * compare result data if available.
     */
    private _loadSavedData () {
        const postData = this._sessionStorageService.getItem( 'postResult' );
        const compareData = this._sessionStorageService.getItem( 'compareResult' );

        postData && this.setPostResultData( postData as PostSeedResponseType );
        compareData && this.setCompareResultData( compareData as CompareSeedResponseType );
    }


    /**
     * The function `_deleteCompareResultDataLocal` removes the item with key 'compareResult' from
     * session storage.
     */
    private _deleteCompareResultDataLocal () {
        this._sessionStorageService.removeItem( 'compareResult' );
    }
}
