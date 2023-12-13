import { FormGroup } from "@angular/forms";

export { AppUserType } from './app-user.type';


export type ColumnTableType<T> = {
    columnDef: string;
    header: string;
    cell: ( row: T ) => unknown;
};


export type ResponseSheetsType<T> = {
    totalResults: number;
    data: T[];
};


export type SidenavLinkType = {
    label: string;
    icon?: string;
    routeLink?: string;
    openTab?: boolean;
    children?: SidenavLinkType[];
    requiresAdmin: boolean;
};


export type FormBaseType = {
    form: FormGroup;
    submitted: boolean;
    onSubmit (): void;
};