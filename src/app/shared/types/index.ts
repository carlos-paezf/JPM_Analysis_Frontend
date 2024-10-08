import { FormGroup } from "@angular/forms";
import * as ExcelJS from 'exceljs';


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
    DepartmentEagerType,
    DepartmentType,
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
    UserEntitlementType
} from './jpm-types.type';


export type ColumnTableType<T> = {
    columnDef: string;
    header: string;
    tooltip?: string;
    cell: ( row: T ) => unknown;
};


export type ResponseSheetsType<T> = {
    totalResults: number;
    data: T[];
};


export type PanelLinkType = {
    label: string;
    routeLink: string;
    icon?: string;
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


export type BreadcrumbType = {
    label: string;
    url: string;
};


export type StatisticsSectionType = {
    name: string,
    sectionName: string,
    reportName: 'accountsReport' | 'companyUsersReport' | 'functionsReport' |
    'profilesReport' | 'profilesFunctionsReport' | 'productsReport' |
    'productsAccountsReport' | 'usersEntitlementsReport';
};


export type UserDepartmentAssignmentType = {
    accessId: string;
    departmentInitials: string;
};


export type UserCompanyCircularizationType = {
    name: string;
    accessId: string;
    departmentInitials: string;
    departmentName: string;
    profileName: string;
    status: boolean;
    email: string;
};


export interface CircularizationData {
    department: string;
    users: UserCompanyCircularizationType[];
}


export type CellStyleType = {
    cell: ExcelJS.Cell,
    value: string,
    bgColor: string,
    fontColor: string,
    alignment?: Partial<ExcelJS.Alignment>,
    bold?: boolean;
    fontName?: string;
    withBorder?: boolean;
};