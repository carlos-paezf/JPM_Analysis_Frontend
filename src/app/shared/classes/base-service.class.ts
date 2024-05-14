import { HttpClient } from "@angular/common/http";
import { Observable, Subject, map, tap } from "rxjs";

import { environment } from "src/environments/environment";
import { ResponseSheetsType } from '../types/index';


export interface IBaseService<Model, ModelEager> {
    getAll (): Observable<ResponseSheetsType<Model>>;
    getById ( id: string ): Observable<ModelEager | null>;
    post ( data: Model ): Observable<Model>;
    update ( id: string, data: Model ): Observable<Model>;
}


export interface ISoftDeleteService<T> {
    deactivate ( id: string ): Observable<boolean>;
    reactivate ( id: string ): Observable<boolean>;
}


export interface IHardDeleteService<T> {
    hardDelete ( id: string ): Observable<boolean>;
}


export interface IBulkPostService<T> {
    bulkPost ( collectionBody: T[] ): Observable<T[]>;
}


export interface IBulkHardDeleteService<T> {
    bulkDelete ( pks: string[] ): Observable<number>;
}


/**
 * The `BaseService` class is an abstract class that implements the `IBaseService` interface. 
 * It serves as a base class for other services to inherit common functionality related to CRUD operations. 
 * 
 * @author cpaezfer 
 */
export abstract class BaseService<Model, ModelEager> implements IBaseService<Model, ModelEager> {
    protected _baseUrl: string = environment.baseURL;
    protected _http: HttpClient;
    private _updateSubject: Subject<void> = new Subject<void>();


    constructor ( _http: HttpClient, _path: string ) {
        this._http = _http;
        this._baseUrl = `${ this._baseUrl }/${ _path }`;
    }


    /**
     * The function `getAll` returns an Observable of type `ResponseSheetsType<Model>` by making an
     * HTTP GET request to a specified base URL.
     * @returns An Observable of type ResponseSheetsType<Model> is being returned.
     */
    getAll (): Observable<ResponseSheetsType<Model>> {
        return this._http.get<ResponseSheetsType<Model>>( this._baseUrl );
    }


    /**
     * The getById function retrieves a ModelEager object by its ID from a specified base URL using an
     * HTTP GET request.
     * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
     * model entity you want to retrieve from the server.
     * @returns An Observable of type ModelEager or null is being returned.
     */
    getById ( id: string ): Observable<ModelEager | null> {
        return this._http.get<ModelEager | null>( `${ this._baseUrl }/${ id }` );
    }


    /**
     * The function `post` sends a POST request with data to a specified URL and returns an Observable
     * of the response data.
     * @param {Model} data - The `data` parameter in the `post` method represents the model object that
     * you want to send in the HTTP POST request. This model object will typically contain the data
     * that you want to send to the server.
     * @returns An Observable of type Model is being returned.
     */
    post ( data: Model ): Observable<Model> {
        return this._http.post<Model>( `${ this._baseUrl }`, data )
            .pipe( tap( () => this._updateSubject.next() ) );
    }


    /**
     * The `update` function sends a PUT request to update a model with the specified ID using the
     * provided data.
     * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
     * data you want to update. It is used to specify which specific data entry should be updated in
     * the database.
     * @param {Model} data - The `data` parameter in the `update` method represents the model object
     * that you want to update in the backend server. This object contains the new values that you want
     * to save for the specified `id`. When you call the `update` method with the `id` and `data`
     * parameters
     * @returns An Observable of type Model is being returned.
     */
    update ( id: string, data: Model ): Observable<Model> {
        return this._http.put<Model>( `${ this._baseUrl }/update/${ id }`, data )
            .pipe( tap( () => this._updateSubject.next() ) );
    }


    /**
     * The `notifyUpdate` function in TypeScript notifies subscribers of an update using a subject.
     */
    notifyUpdate (): void {
        this._updateSubject.next();
    }


    /**
     * The onUpdate function returns an Observable that emits void values.
     * @returns The `onUpdate()` method returns an Observable of type `void`.
     */
    onUpdate (): Observable<void> {
        return this._updateSubject.asObservable();
    }
}


/** 
 * The `BaseServiceWithSoftDelete` class is extending the `BaseService` class and implementing the
 * `ISoftDeleteService` interface. This class adds functionality related to soft delete operations on
 * top of the base CRUD operations provided by the `BaseService`. 
 * 
 * @author cpaezfer
 */
export abstract class BaseServiceWithSoftDelete<Model, ModelEager> extends BaseService<Model, ModelEager> implements ISoftDeleteService<Model> {

    constructor ( _http: HttpClient, _path: string ) {
        super( _http, _path );
    }


    /**
     * The `deactivate` function sends a PATCH request to deactivate an item with the specified ID and
     * returns an Observable that emits a boolean value indicating the success of the operation.
     * @param {string} id - The `id` parameter is a string that represents the identifier of the item
     * to be deactivated.
     * @returns The `deactivate` method returns an Observable of type boolean.
     */
    deactivate ( id: string ): Observable<boolean> {
        return this._http.patch<void>( `${ this._baseUrl }/delete/${ id }`, {} )
            .pipe( map( () => true ) );
    }


    /**
     * The `reactivate` function sends a PATCH request to a specific endpoint to restore an item
     * identified by its ID and returns an Observable that emits a boolean value indicating the success
     * of the operation.
     * @param {string} id - The `id` parameter is a string that represents the identifier of the item
     * that needs to be reactivated.
     * @returns The `reactivate` method returns an Observable of type boolean.
     */
    reactivate ( id: string ): Observable<boolean> {
        return this._http.patch<void>( `${ this._baseUrl }/restore/${ id }`, {} )
            .pipe( map( () => true ) );
    }
}


/**
 * The `BaseServiceWithHardDelete` class is an abstract class that extends the `BaseService` class and
 * implements the `IHardDeleteService` interface. This class adds functionality related to hard delete
 * operations on top of the base CRUD operations provided by the `BaseService`. 
 * 
 * @author cpaezfer
 */
export abstract class BaseServiceWithHardDelete<Model, ModelEager> extends BaseService<Model, ModelEager> implements IHardDeleteService<Model> {

    constructor ( _http: HttpClient, _path: string ) {
        super( _http, _path );
    }


    /**
     * The `hardDelete` function sends a DELETE request to a specific endpoint with the provided ID and
     * returns an Observable that emits a boolean value indicating the success of the operation.
     * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
     * item that you want to delete. It is used to specify which item should be deleted from the
     * database or server when calling the `hardDelete` method.
     * @returns The `hardDelete` method returns an Observable of type boolean.
     */
    hardDelete ( id: string ): Observable<boolean> {
        return this._http.delete<any>( `${ this._baseUrl }/delete/${ id }`, {} )
            .pipe( map( () => true ) );
    }
}


export abstract class BaseServiceWithBulkMethods<Model, ModelEager> extends BaseServiceWithHardDelete<Model, ModelEager> implements IBulkPostService<Model>, IBulkHardDeleteService<Model> {

    constructor ( _http: HttpClient, _path: string ) {
        super( _http, _path );
    }


    /**
     * The function `bulkPost` sends a POST request to a specified endpoint with an array of models and
     * returns an Observable of the response array.
     * @param {Model[]} collectionBody - The `collectionBody` parameter in the `bulkPost` function is
     * an array of `Model` objects. This array contains the data that will be sent in the POST request
     * to the specified endpoint (`${ this._baseUrl }/bulk-post`).
     * @returns The `bulkPost` method is returning an Observable of an array of Model objects.
     */
    bulkPost ( collectionBody: Model[] ): Observable<Model[]> {
        return this._http.post<any>( `${ this._baseUrl }/bulk-post`, collectionBody );
    }


    /**
     * The `bulkDelete` function sends a POST request to delete multiple items using an array of
     * primary keys.
     * @param {string[]} pks - An array of strings representing the primary keys of the items to be
     * deleted in bulk.
     * @returns The `bulkDelete` method is returning an Observable of type number.
     */
    bulkDelete ( pks: string[] ): Observable<number> {
        return this._http.delete<any>( `${ this._baseUrl }/bulk-delete`, { body: pks } );
    }
}