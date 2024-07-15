import { FileActionTypeEnum } from "../../protected/constants";


export type ReportHistoryType = {
    id: string;
    appUserId: string;
    reportName: string;
    reportComments: string;
    reportUploadDate: Date;
    runReportDate: Date;
};


export type ControlDateType = {
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};


export type ProfileType = {
    id: string;
    profileName: string;
    createdAt: Date;
    updatedAt: Date;
};


export type ProfileEagerType = ProfileType & {
    companyUsers: CompanyUserType[];
    profilesFunctions: ProfileFunctionType[];
};


export type FunctionType = ControlDateType & {
    id: string;
    functionName: string;
};


export type FunctionEagerType = FunctionType & {
    profilesFunctions: ProfileFunctionType[];
    usersEntitlements: UserEntitlementType[];
};


export type ProductType = ControlDateType & {
    id: string;
    productName: string;
    subProduct: string | null;
};


export type ProductEagerType = ProductType & {
    productsAccounts: ProductAccountType[];
    userEntitlements: UserEntitlementType[];
};


export type ProfileFunctionType = {
    id: string;
    profileId: string;
    functionId: string;
};


export type ProfileFunctionEagerType = ProfileFunctionType & {
    profile: ProfileType;
    function: FunctionType;
};


export type CompanyUserType = ControlDateType & {
    accessId: string;
    userName: string;
    userStatus: boolean;
    userType: "SA1" | "SA2" | "SAviewer" | "End User" | "SAOther";
    employeeId: string | null;
    emailAddress: string;
    windowsUserId: string;
    userLocation: string | null;
    userCountry: string;
    userLogonType: "RSA Token" | "Password";
    userLastLogonDt: Date | null;
    userLogonStatus: string;
    userGroupMembership: string | null;
    userRole: string | null;
    profileId: string;
};


export type CompanyUserEagerType = CompanyUserType & {
    profile: ProfileType;
    userEntitlements: UserEntitlementType;
};


export type AccountType = ControlDateType & {
    accountNumber: string;
    accountName: string;
    accountType: string;
    bankCurrency: string | null;
};



export type AccountEagerType = AccountType & {
    userEntitlements: UserEntitlementType[];
    productsAccounts: ProductAccountType[];
};


export type ProductAccountType = ControlDateType & {
    id: string;
    productId: string;
    accountNumber: string;
};


export type ProductAccountEagerType = ProductAccountType & {
    product: ProductType | null;
    account: AccountType | null;
};


export type ProductAccountEagerV2Type = ProductAccountType & {
    productName: string;
    subProduct: string | null;
    accountName: string;
    accountType: string;
    bankCurrency: string | null;
};


export type UserEntitlementType = ControlDateType & {
    id: string;
    accessId: string;
    productId: string;
    functionType: string;
    functionId: string;
    accountNumber: string;
};


export type UserEntitlementEagerType = UserEntitlementType & {
    companyUser: CompanyUserType;
    product: ProductType;
    function: FunctionType;
    account: AccountType;
};


export type UploadFileType = {
    file: File;
    observations: string;
    action: FileActionTypeEnum;
};

export type ApproveChangesType = {
    fileName: string;
    observations?: string;
    runReportDate?: Date;
};


export type UploadFileResponseType = {
    action: FileActionTypeEnum;
    result: PostSeedResponseType | CompareSeedResponseType;
};


export type FileDataType = {
    runReportDate?: Date;
    fileName: string;
};


export type PostSeedResponseType = FileDataType & {
    accounts: AccountType[];
    companyUsers: CompanyUserType[],
    functions: FunctionType[],
    products: ProductType[],
    productsAccounts: ProductAccountType[],
    profiles: ProfileType[],
    profilesFunctions: ProfileFunctionType[],
    usersEntitlements: UserEntitlementType[];
};


export type CompareSeedResponseType = FileDataType & {
    totalRowsInDatabase: number;
    totalRowsInExcel: number;
    totalNewEntities: number;
    totalToDeleteEntities: number;
    totalEntitiesWithDifferences: number;
    accountsReport: DiffExcelVsDatabaseType<AccountType>;
    companyUsersReport: DiffExcelVsDatabaseType<CompanyUserType>;
    functionsReport: DiffExcelVsDatabaseType<FunctionType>;
    productsReport: DiffExcelVsDatabaseType<ProductType>;
    productsAccountsReport: DiffExcelVsDatabaseType<ProductAccountType>;
    profilesReport: DiffExcelVsDatabaseType<ProfileType>;
    profilesFunctionsReport: DiffExcelVsDatabaseType<ProfileFunctionType>;
    usersEntitlementsReport: DiffExcelVsDatabaseType<UserEntitlementType>;
    observations?: string;
};


export type DiffExcelVsDatabaseType<Model> = {
    countRowsInDatabase: number;
    countRowsInExcel: number;
    newEntities: Model[];
    toDeleteEntities: Model[];
    entitiesWithDifferences: EntityWithDifferencesType<Model>[];
    countNewEntities: number;
    countToDeleteEntities: number;
    countEntitiesWithDifferences: number;
};


export type EntityWithDifferencesType<Model> = {
    excelEntity: Model;
    databaseEntity: Model;
};


export type ChangesStructureType<Model> = {
    newEntities: Model[];
    toChangesEntities: Model[];
    toDeleteEntities: string[];
};


export type EntitiesToChangesType = {
    accounts: ChangesStructureType<AccountType>;
    companyUsers: ChangesStructureType<CompanyUserType>;
    functions: ChangesStructureType<FunctionType>;
    products: ChangesStructureType<ProductType>;
    productsAccounts: ChangesStructureType<ProductAccountType>;
    profiles: ChangesStructureType<ProfileType>;
    profilesFunctions: ChangesStructureType<ProfileFunctionType>;
    usersEntitlements: ChangesStructureType<UserEntitlementType>;
};