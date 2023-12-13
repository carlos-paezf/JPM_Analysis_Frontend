import { Injectable } from '@angular/core';


/**
 * The `SessionStorageService` class provides methods for interacting 
 * with the sessionStorage in a TypeScript application. 
 * 
 * @author cpaezfer
 */
@Injectable( {
    providedIn: 'root'
} )
export class SessionStorageService<T> {
    /**
     * The getItem function retrieves an item from sessionStorage and returns it as a parsed JSON object,
     * or null if the item does not exist.
     * @param {string} key - The key parameter is a string that represents the key of the item you want
     * to retrieve from the sessionStorage.
     * @returns The getItem function returns the value associated with the specified key in the
     * sessionStorage. If there is a value associated with the key, it is parsed from JSON format and
     * returned. If there is no value associated with the key, null is returned.
     */
    getItem ( key: string ): T | null {
        const data = sessionStorage.getItem( key );
        return data ? JSON.parse( data ) : null;
    }

    /**
     * The function sets an item in the local storage by converting the value to a JSON string.
     * @param {string} key - The key parameter is a string that represents the name of the item you
     * want to store in the sessionStorage. It is used to uniquely identify the item and retrieve it
     * later.
     * @param {T} value - The value parameter can be any data type that can be serialized into a JSON
     * string. This includes basic data types such as strings, numbers, booleans, as well as objects
     * and arrays.
     * @returns The `setItem` function is returning the result of calling `sessionStorage.setItem` with
     * the provided `key` and `value` parameters.
     */
    setItem ( key: string, value: T ): void {
        return sessionStorage.setItem( key, JSON.stringify( value ) );
    }

    /**
     * The function removes an item from the sessionStorage using the provided key.
     * @param {string} key - The key parameter is a string that represents the key of the item you want
     * to remove from the sessionStorage.
     * @returns The `removeItem` function is returning `void`, which means it is not returning any
     * value.
     */
    removeItem ( key: string ): void {
        return sessionStorage.removeItem( key );
    }

    /**
     * The function clears the local storage.
     * @returns The clearSessionStorage function returns nothing, as indicated by the void return type.
     */
    clearSessionStorage (): void {
        return sessionStorage.clear();
    }
}
