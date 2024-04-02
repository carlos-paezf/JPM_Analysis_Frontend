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

export type FunctionType = ControlDateType & {
    id: string;
    functionName: string;
};

export type FunctionEagerLoadingType =
    FunctionType & {
        profiles: string[];
    };

export type ProductType = ControlDateType & {
    id: string;
    productName: string;
    subProduct: string | null;
};

export type ProfileFunctionType = {
    id: string;
    profileId: string;
    functionId: string;
};

export type ProfileFunctionEagerLoadingType =
    ProfileFunctionType
    & {
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
    userLocation: string | null;
    userCountry: string;
    userLogonType: "RSA Token" | "Password";
    userLastLogonDt: Date | null;
    userLogonStatus: string;
    userGroupMembership: string | null;
    userRole: string | null;
    profileId: string;
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

export type ProductAccountEagerType =
    ProductAccountType
    & {
        product: ProductType;
        account: AccountType;
    };

export type UserEntitlementType = ControlDateType & {
    id: string;
    accessId: string;
    productId: string;
    functionType: string;
    functionId: string;
    accountNumber: string;
};

export type UserEntitlementEagerType =
    UserEntitlementType
    & {
        companyUser: CompanyUserType;
        product: ProductType;
        function: FunctionType;
        account: AccountType;
    };

export type JPMDataAppType = {
    profiles: ProfileType[];
    functions: FunctionType[];
    profilesFunctions: ProfileFunctionType[];
    products: ProductType[];
    companyUsers: CompanyUserType[];
    accounts: AccountType[];
    productsAccounts: ProductAccountType[];
    userEntitlement: UserEntitlementType[];
};
