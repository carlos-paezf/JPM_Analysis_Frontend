import { Injectable } from '@angular/core';


/**
 * The `LocalStorageService` class provides methods for interacting 
 * with the browser's local storage, allowing you to 
 * store, retrieve, remove, and clear items.
 * 
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class LocalStorageService<T> {
    /**
     * The getItem function retrieves an item from localStorage and returns it as a parsed JSON object,
     * or null if the item does not exist.
     * @param {string} key - The key parameter is a string that represents the key of the item you want
     * to retrieve from the localStorage.
     * @returns The getItem function returns the value associated with the specified key in the
     * localStorage. If there is a value associated with the key, it is parsed from JSON format and
     * returned. If there is no value associated with the key, null is returned.
     */
    getItem ( key: string ): T | null {
        const data = localStorage.getItem( key );
        return data ? JSON.parse( data ) : null;
    }

    /**
     * The function sets an item in the local storage by converting the value to a JSON string.
     * @param {string} key - The key parameter is a string that represents the name of the item you
     * want to store in the localStorage. It is used to uniquely identify the item and retrieve it
     * later.
     * @param {T} value - The value parameter can be any data type that can be serialized into a JSON
     * string. This includes basic data types such as strings, numbers, booleans, as well as objects
     * and arrays.
     * @returns The `setItem` function is returning the result of calling `localStorage.setItem` with
     * the provided `key` and `value` parameters.
     */
    setItem ( key: string, value: T ): void {
        return localStorage.setItem( key, JSON.stringify( value ) );
    }

    /**
     * The function removes an item from the localStorage using the provided key.
     * @param {string} key - The key parameter is a string that represents the key of the item you want
     * to remove from the localStorage.
     * @returns The `removeItem` function is returning `void`, which means it is not returning any
     * value.
     */
    removeItem ( key: string ): void {
        return localStorage.removeItem( key );
    }

    /**
     * The function clears the local storage.
     * @returns The clearLocalStorage function returns nothing, as indicated by the void return type.
     */
    clearLocalStorage (): void {
        return localStorage.clear();
    }
}
