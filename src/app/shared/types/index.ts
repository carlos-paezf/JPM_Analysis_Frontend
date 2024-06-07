import { FormGroup } from "@angular/forms";

export { AppUserType } from './app-user.type';
export {
    AccountEagerType,
    AccountType,
    ApproveChangesType,
    ChangesStructureType,
    CompanyUserEagerType,
    CompanyUserType,
    CompareSeedResponseType,
    ControlDateType,
    DiffExcelVsDatabaseType,
    EntitiesToChangesType,
    EntityWithDifferencesType,
    FileDataType,
    FunctionEagerType,
    FunctionType,
    PostSeedResponseType,
    ProductAccountEagerType,
    ProductAccountType,
    ProductEagerType,
    ProductType,
    ProfileEagerType,
    ProfileFunctionEagerType,
    ProfileFunctionType,
    ProfileType,
    ReportHistoryType,
    UploadFileResponseType,
    UploadFileType,
    UserEntitlementEagerType,
    UserEntitlementType,
} from './jpm-types.type';


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
    requireData: boolean;
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
    initialFormValues: FormGroup;
    submitted: boolean;
    onSubmit (): void;
    onRestartForm (): void;
};