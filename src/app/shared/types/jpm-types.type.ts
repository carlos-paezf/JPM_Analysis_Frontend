export type ControlDateType = {
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
};

export type ProfileType = ControlDateType & {
    id: string;
    profile_name: string;
};

export type FunctionType = ControlDateType & {
    id: string;
    function_name: string;
};

export type ProductType = ControlDateType & {
    id: string;
    product_name: string;
    sub_product: string | null;
};

export type ProfileFunctionType = {
    id: number;
    profile_id: string;
    function_id: string;
};

export type ProfileFunctionEagerLoadingType =
    ProfileFunctionType
    & {
        profile: ProfileType;
        function: FunctionType;
    };

export type CompanyUserType = ControlDateType & {
    access_id: string;
    user_name: string;
    user_status: boolean;
    user_type: "SA1" | "SA2" | "SAviewer" | "End User" | "SAOther";
    employee_id: string | null;
    email_address: string;
    user_location: string | null;
    user_country: string;
    user_logon_type: "RSA Token" | "Password";
    user_last_logon_dt: Date | null;
    user_logon_status: string;
    user_group_membership: string | null;
    user_role: string | null;
    profile_id: string;
};

export type AccountType = ControlDateType & {
    account_number: string;
    account_name: string;
    account_type: string;
    bank_currency: string | null;
};

export type ClientType = ControlDateType & {
    id: number;
    product_id: string;
    account_number: string;
};

export type ClientEagerLoadingType =
    ClientType
    & {
        product: ProductType;
        account: AccountType;
    };

export type UserEntitlementType = ControlDateType & {
    id: number;
    access_id: string;
    product_id: string;
    function_type: string;
    function_id: string;
    account_number: string;
};

export type UserEntitlementEagerLoadingType =
    UserEntitlementType
    & {
        company_user: CompanyUserType;
        product: ProductType;
        function: FunctionType;
        account: AccountType;
    };

export type JPMDataAppType = {
    profiles: ProfileType[];
    functions: FunctionType[];
    profiles_functions: ProfileFunctionType[];
    products: ProductType[];
    company_users: CompanyUserType[];
    accounts: AccountType[];
    clients: ClientType[];
    user_entitlement: UserEntitlementType[];
};
