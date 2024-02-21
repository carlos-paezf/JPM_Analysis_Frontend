import { FormGroup } from "@angular/forms";

export {
    ControlDateType,
    ProfileType,
    FunctionType,
    ProductType,
    ProfileFunctionType,
    CompanyUserType,
    AccountType,
    ClientType,
    ClientEagerLoadingType,
    UserEntitlementType,
    JPMDataAppType
} from './jpm-types.type';
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


export type PanelLinkType = {
    label: string;
    routeLink: string;
};


export type ModulesPanelsType = {
    title: string;
    panels: PanelLinkType[];
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