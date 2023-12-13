import { FormGroup } from "@angular/forms";

export type TColumnTable<T> = {
    columnDef: string;
    header: string;
    cell: ( row: T ) => unknown;
};


export type TResponseSheets<T> = {
    totalResults: number;
    data: T[];
};


export type TSidenavLink = {
    label: string;
    icon?: string;
    routeLink?: string;
    openTab?: boolean;
    children?: TSidenavLink[];
    requiresAdmin: boolean;
};


export type TFormBase = {
    form: FormGroup;
    submitted: boolean;
    onSubmit (): void;
};