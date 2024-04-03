import { AppUtilsMessagesService } from '../services/app-utils-messages.service';
import { BaseServiceWithSoftDelete } from './base-service.class';
import { InfoTableBaseComponent } from './sheet-base-component.class';


/**
 * This TypeScript code defines an abstract class `ListEntityBase` that extends
 * `InfoTableBaseComponent`.
 * 
 * @author cpaezfer
 */
export abstract class ListEntityBase<Model, ModelEager> extends InfoTableBaseComponent<Model> {
    public deactivateItem!: Function;
    public reactivateItem!: Function;


    constructor (
        private readonly _appUtilsMessagesService: AppUtilsMessagesService,
        private readonly _service: BaseServiceWithSoftDelete<Model, ModelEager>
    ) {
        super();
        this._loadData();
        this._defineSoftDeleteFunctions();
    }


    /**
     * The _loadData function fetches data from a service and updates the component's properties
     * accordingly.
     */
    private _loadData (): void {
        this._service.getAll().subscribe(
            {
                next: ( response ) => {
                    this.data = response.data;
                    this.isEmptyTable = response.totalResults <= 0;
                    this.isLoadingResults = false;
                    console.log( { data: this.data } );
                },
                error: ( error ) => {
                    this.isLoadingResults = false;
                    this._appUtilsMessagesService.showUpdateErrorMessage( error );
                }
            }
        );
    }


    /**
     * The `defineSoftDeleteFunctions` function defines methods to deactivate and reactivate items
     * using a service.
     */
    private _defineSoftDeleteFunctions (): void {
        this.deactivateItem = ( id: string ) => this._service.deactivate( id )
            .subscribe( this._subscriptionObject() );

        this.reactivateItem = ( id: string ) => this._service.reactivate( id )
            .subscribe( this._subscriptionObject() );
    }


    /**
     * The `_subscriptionObject` function returns an object with `next` and `error` methods that
     * perform certain actions when called.
     * @returns An object with two properties: `next` and `error`. The `next` property is a function
     * that calls the `_loadData()` method and then notifies the service of an update. The `error`
     * property is a function that calls the `_appUtilsMessagesService.showUpdateErrorMessage()` method
     * with an error parameter.
     */
    private _subscriptionObject () {
        return {
            next: () => {
                this._loadData();
                this._service.notifyUpdate();
            },
            error: ( error: any ) => {
                this._appUtilsMessagesService.showUpdateErrorMessage( error );
            }
        };
    }
}