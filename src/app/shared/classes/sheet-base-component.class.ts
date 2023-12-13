import { TColumnTable } from "../types";

/**
 * An abstract class is defined with a generic type, 
 * which allows structuring some basic properties within 
 * the components that extend from this class.
 * 
 * @author cpaezfer
 */
export abstract class InfoTableBaseComponent<T> {
    public isLoadingResults: boolean = true;
    public isEmptyTable: boolean = true;
    public data: T[] = [];
    public abstract displayedColumns: string[];
    public abstract columns: TColumnTable<T>[];
}