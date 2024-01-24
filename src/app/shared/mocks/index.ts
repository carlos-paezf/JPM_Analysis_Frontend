import { AccountType, AppUserType, ClientType, CompanyUserType, ControlDateType, FunctionType, ProductType, ProfileFunctionType, ProfileType, UserEntitlementType } from "../types";


export const APP_USER: AppUserType = {
    id: 'cpaezfer',
    name: "Carlos David Páez Ferreira",
    appRole: 'admin',
    email: 'cpaezfer@banrep.gov.co',
    password: 'pass123',
    username: 'cpaezfer',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
};

const controlDateHelper: ControlDateType = {
    "created_at": new Date(),
    "updated_at": new Date(),
    "deleted_at": null
};



export const ACCOUNTS: AccountType[] = [
    {
        "account_name": "BANCO DE LA REPUBLICA-PACIFIC INVESTMENT MANAGEMENT COMPANY LLC",
        "account_number": "P 35946",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "FIDEICOMISO FAE - GOLDMAN SACHS ASSETMANAGEMENT, L.P.",
        "account_number": "P 46407",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA-WELLINGTONMANAGEMENT COMPANY LLP",
        "account_number": "S 17006",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "FIDEICOMISO FAE",
        "account_number": "82783",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA - STATE STREET GLOBAL ADVISORS TRUST COMPANY",
        "account_number": "EPR68",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA - STATE STREETGLOBAL ADVISORS TRUST COMPANY",
        "account_number": "P 92590",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA.",
        "account_number": "S 97871",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "FIDEICOMISO FAE",
        "account_number": "P 88529",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "FIDEICOMISO FAE - WELLINGTON MANAGEMENT COMPANY, LLP",
        "account_number": "P 46408",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "FIDEICOMISO FAE - GOLDMAN SACHS ASSET MANAGEMENT, L.P.",
        "account_number": "EMH26",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA",
        "account_number": "05421",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "FIDEICOMISO FAE - WELLINGTON MANAGEMENT COMPANY, LLP",
        "account_number": "EMH27",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "FIDEICOMISO FAE - BLACKROCK INSTITUTIONAL TRUST COMPANY, N.A. EQUITY",
        "account_number": "EID10",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA-WELLINGTONMANAGEMENT COMPANY LLP",
        "account_number": "FDA63",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "FIDEICOMISO FAE - BLACKROCK INSTITUTIONAL TRUST COMPANY, N.A. EQUITY",
        "account_number": "P 79897",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA-PACIFIC INVESTMENT MANAGEMENT COMANY LLC",
        "account_number": "AIF62",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCOVEW",
        "account_number": "0",
        "account_type": "Portfolio",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "FIDEICOMISO FAE - BLACKROCK INSTITUTIONAL TRUST COMPANY, N.A. FIX INCM",
        "account_number": "EMO35",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA -WESTERNASSET MANAGEMENT",
        "account_number": "P 06252",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA FAEP UBSBRINSON",
        "account_number": "19534",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA GOLDMAN SACHS FORWARD CASH TO STATE STREET BANK & TRUST ABA: 011000028 A/C: 10365211 NAME: BANCO DE LA REPUBLICA",
        "account_number": "P 83234",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "BANCO DE LA REPUBLICA GOLDMAN SACHS",
        "account_number": "18987",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    },
    {
        "account_name": "FIDEICOMISO FAE - BLACKROCK INSTITUTIONAL TRUST COMPANY, N.A. FIX INCM",
        "account_number": "P 49913",
        "account_type": "Custody Account",
        "bank_currency": null,
        ...controlDateHelper
    }
];


export const CLIENTS: ClientType[] = [
    {
        "id": 1,
        "account_number": "P 35946",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 2,
        "account_number": "P 46407",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 3,
        "account_number": "82783",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 4,
        "account_number": "S 17006",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 5,
        "account_number": "EPR68",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 6,
        "account_number": "S 97871",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 7,
        "account_number": "P 92590",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 8,
        "account_number": "P 88529",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 9,
        "account_number": "P 46408",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 10,
        "account_number": "EMH26",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 11,
        "account_number": "05421",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 12,
        "account_number": "EMH27",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 13,
        "account_number": "EID10",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 14,
        "account_number": "P 79897",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 15,
        "account_number": "FDA63",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 16,
        "account_number": "AIF62",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 17,
        "account_number": "P 35946",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 18,
        "account_number": "P 46407",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 19,
        "account_number": "82783",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 20,
        "account_number": "S 17006",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 21,
        "account_number": "EPR68",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 22,
        "account_number": "P 92590",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 23,
        "account_number": "S 97871",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 24,
        "account_number": "P 88529",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 25,
        "account_number": "P 46408",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 26,
        "account_number": "EMH26",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 27,
        "account_number": "05421",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 28,
        "account_number": "EMH27",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 29,
        "account_number": "EID10",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 30,
        "account_number": "FDA63",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 31,
        "account_number": "P 79897",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 32,
        "account_number": "AIF62",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 33,
        "account_number": "P 35946",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 34,
        "account_number": "P 46407",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 35,
        "account_number": "82783",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 36,
        "account_number": "S 17006",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 37,
        "account_number": "EPR68",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 38,
        "account_number": "S 97871",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 39,
        "account_number": "P 92590",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 40,
        "account_number": "P 88529",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 41,
        "account_number": "P 46408",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 42,
        "account_number": "EMH26",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 43,
        "account_number": "05421",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 44,
        "account_number": "EMH27",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 45,
        "account_number": "EID10",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 46,
        "account_number": "FDA63",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 47,
        "account_number": "P 79897",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 48,
        "account_number": "AIF62",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 49,
        "account_number": "EMO35",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 50,
        "account_number": "P 46407",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 51,
        "account_number": "P 06252",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 52,
        "account_number": "S 17006",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 53,
        "account_number": "S 97871",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 54,
        "account_number": "P 46408",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 55,
        "account_number": "19534",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 56,
        "account_number": "EMH26",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 57,
        "account_number": "05421",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 58,
        "account_number": "EMH27",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 59,
        "account_number": "P 83234",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 60,
        "account_number": "18987",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 61,
        "account_number": "EID10",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 62,
        "account_number": "P 79897",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 63,
        "account_number": "FDA63",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 64,
        "account_number": "P 49913",
        "product_id": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "id": 65,
        "account_number": "",
        "product_id": "corporate_action_manager_instruction_without_event",
        ...controlDateHelper
    },
    {
        "id": 66,
        "account_number": "",
        "product_id": "corporate_action_manager_corporate_instruction",
        ...controlDateHelper
    },
    {
        "id": 67,
        "account_number": "",
        "product_id": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "id": 68,
        "account_number": "",
        "product_id": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "id": 69,
        "account_number": "",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        ...controlDateHelper
    },
    {
        "id": 70,
        "account_number": "",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        ...controlDateHelper
    },
    {
        "id": 71,
        "account_number": "",
        "product_id": "tim_cash",
        ...controlDateHelper
    },
    {
        "id": 72,
        "account_number": "",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        ...controlDateHelper
    },
    {
        "id": 73,
        "account_number": "",
        "product_id": "tim_cash_inter_account_transfer",
        ...controlDateHelper
    },
    {
        "id": 74,
        "account_number": "",
        "product_id": "tim_listed_securities_receive_against_payment",
        ...controlDateHelper
    },
    {
        "id": 75,
        "account_number": "",
        "product_id": "tim_cash_advice_to_receive",
        ...controlDateHelper
    },
    {
        "id": 76,
        "account_number": "",
        "product_id": "tim_listed_securities_deliver_against_payment",
        ...controlDateHelper
    },
    {
        "id": 77,
        "account_number": "",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        ...controlDateHelper
    },
    {
        "id": 78,
        "account_number": "",
        "product_id": "tim_cash_payment_order",
        ...controlDateHelper
    }
];


export const COMPANY_USERS: CompanyUserType[] = [
    {
        "user_name": "Diaz  Cortes, Ana Maria",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "adiazcor@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-11-09 00:24:21" ),
        "user_logon_status": "Active",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "adiazcortes",
        "profile_id": "capture",
        ...controlDateHelper
    },
    {
        "user_name": "Machete, Andres",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "amachequ@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "Password",
        "user_last_logon_dt": new Date( "2023-11-16 15:00:50" ),
        "user_logon_status": "Active",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "amachete",
        "profile_id": "viewer",
        ...controlDateHelper
    },
    {
        "user_name": "Espinosa, Carlos",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "cespinri@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-08-29 16:13:33" ),
        "user_logon_status": "> 2 Month",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "carlespinosa",
        "profile_id": "verification",
        ...controlDateHelper
    },
    {
        "user_name": "Canon, Cesar",
        "user_type": "End User",
        "user_status": false,
        "employee_id": "",
        "email_address": "ccanonos@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "Password",
        "user_last_logon_dt": new Date( "2023-08-10 14:46:36" ),
        "user_logon_status": "> 3 Month",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "cecanon",
        "profile_id": "viewer",
        ...controlDateHelper
    },
    {
        "user_name": "Martin, Claudia",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "cmartibe@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-09-19 18:32:20" ),
        "user_logon_status": "> 2 Month",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "claudiamartin",
        "profile_id": "authorization",
        ...controlDateHelper
    },
    {
        "user_name": "Peralta, Gladys",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "Gperalfo@banrep.gov.co",
        "user_location": "",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-11-17 20:59:17" ),
        "user_logon_status": "Active",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "glperalta",
        "profile_id": "viewer",
        ...controlDateHelper
    },
    {
        "user_name": "Bohn, Jack",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "Jbohmsil@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-09-19 18:25:51" ),
        "user_logon_status": "> 2 Month",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "jackbohn8002",
        "profile_id": "verification",
        ...controlDateHelper
    },
    {
        "user_name": "Moreno, Jamie",
        "user_type": "SA2",
        "user_status": true,
        "employee_id": "",
        "email_address": "jmorenga@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-11-17 23:36:23" ),
        "user_logon_status": "Active",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "jammoreno",
        "profile_id": "administrator",
        ...controlDateHelper
    },
    {
        "user_name": "Sandoval Fernandez, Jose David",
        "user_type": "SAOther",
        "user_status": false,
        "employee_id": "",
        "email_address": "jsandofe@banep.gov.co",
        "user_location": "Bogota DC, Colombia",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": null,
        "user_logon_status": "No Log",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "jsandovalfernandez",
        "profile_id": "administrator",
        ...controlDateHelper
    },
    {
        "user_name": "Diaz, Juan",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "jdiazgam@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "Password",
        "user_last_logon_dt": new Date( "2023-06-27 19:18:08" ),
        "user_logon_status": "> 4 Month",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "juandiaz1980",
        "profile_id": "viewer",
        ...controlDateHelper
    },
    {
        "user_name": "Gutierrez, Juan",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "jgutieru@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-11-16 16:14:41" ),
        "user_logon_status": "Active",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "juangutierrez0496",
        "profile_id": "capture",
        ...controlDateHelper
    },
    {
        "user_name": "Alvarez, Julio",
        "user_type": "SAOther",
        "user_status": false,
        "employee_id": "",
        "email_address": "jalvarbe@banrep.gov.co",
        "user_location": "Bogota DC, Colombia",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-03-21 21:50:41" ),
        "user_logon_status": "Inactive",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "julioalvarez1052",
        "profile_id": "administrator",
        ...controlDateHelper
    },
    {
        "user_name": "Cifuentes, Laura",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "lcifuega@banrep.gov.co",
        "user_location": "",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-08-09 18:41:58" ),
        "user_logon_status": "> 3 Month",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "lacifuentes",
        "profile_id": "authorization",
        ...controlDateHelper
    },
    {
        "user_name": "Rincon, Laura",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "lrincosa@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-09-29 21:11:43" ),
        "user_logon_status": "> 1 Month",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "larincon",
        "profile_id": "verification",
        ...controlDateHelper
    },
    {
        "user_name": "Gutierrez, Lorena",
        "user_type": "End User",
        "user_status": true,
        "employee_id": "",
        "email_address": "lgutiees@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-11-07 15:39:31" ),
        "user_logon_status": "Active",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "lorenagutierrez0120",
        "profile_id": "capture",
        ...controlDateHelper
    },
    {
        "user_name": "Barreto, Martha",
        "user_type": "End User",
        "user_status": false,
        "employee_id": "",
        "email_address": "mbarreay@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": null,
        "user_logon_status": "No Log",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "martbarreto",
        "profile_id": "viewer",
        ...controlDateHelper
    },
    {
        "user_name": "Ortiz, Nathalie",
        "user_type": "End User",
        "user_status": false,
        "employee_id": "",
        "email_address": "nortizye@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-05-12 21:07:19" ),
        "user_logon_status": "> 5 Month",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "nathalortiz",
        "profile_id": "authorization",
        ...controlDateHelper
    },
    {
        "user_name": "Benavides, Victor",
        "user_type": "SA1",
        "user_status": false,
        "employee_id": "",
        "email_address": "vbenavza@banrep.gov.co",
        "user_location": "",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-03-30 15:33:47" ),
        "user_logon_status": "Inactive",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "vibenavides",
        "profile_id": "administrator",
        ...controlDateHelper
    },
    {
        "user_name": "Galvis, Xiomara",
        "user_type": "End User",
        "user_status": false,
        "employee_id": "",
        "email_address": "lgalvifl@banrep.gov.co",
        "user_location": "Bogota DC, UN",
        "user_country": "CO",
        "user_logon_type": "Password",
        "user_last_logon_dt": new Date( "2022-12-28 12:50:01" ),
        "user_logon_status": "Inactive",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "xiomgalvis",
        "profile_id": "viewer",
        ...controlDateHelper
    },
    {
        "user_name": "Reyes, Yuri",
        "user_type": "SAOther",
        "user_status": true,
        "employee_id": "",
        "email_address": "yreyesja@banrep.gov.co",
        "user_location": "Bogota, D.C.",
        "user_country": "CO",
        "user_logon_type": "RSA Token",
        "user_last_logon_dt": new Date( "2023-11-22 16:02:54" ),
        "user_logon_status": "Active",
        "user_group_membership": "",
        "user_role": "",
        "access_id": "yureyes",
        "profile_id": "administrator",
        ...controlDateHelper
    }
];


export const FUNCTIONS: FunctionType[] = [
    {
        "id": "view",
        "function_name": "View",
        ...controlDateHelper
    },
    {
        "id": "cancel",
        "function_name": "Cancel",
        ...controlDateHelper
    },
    {
        "id": "input",
        "function_name": "Input",
        ...controlDateHelper
    },
    {
        "id": "amend",
        "function_name": "Amend",
        ...controlDateHelper
    },
    {
        "id": "allow_cls",
        "function_name": "Allow CLS",
        ...controlDateHelper
    },
    {
        "id": "usgen2ccy",
        "function_name": "USGEN2CCY",
        ...controlDateHelper
    },
    {
        "id": "view_template",
        "function_name": "View Template",
        ...controlDateHelper
    },
    {
        "id": "create_template",
        "function_name": "Create Template",
        ...controlDateHelper
    },
    {
        "id": "visibility",
        "function_name": "Visibility",
        ...controlDateHelper
    },
    {
        "id": "approve",
        "function_name": "Approve",
        ...controlDateHelper
    },
    {
        "id": "approve_template",
        "function_name": "Approve Template",
        ...controlDateHelper
    },
    {
        "id": "file_import",
        "function_name": "File Import",
        ...controlDateHelper
    },
    {
        "id": "release",
        "function_name": "Release",
        ...controlDateHelper
    },
    {
        "id": "system",
        "function_name": "System",
        ...controlDateHelper
    },
    {
        "id": "positions_and_settlement_status",
        "function_name": "Positions and Settlement Status",
        ...controlDateHelper
    },
    {
        "id": "reports",
        "function_name": "Reports",
        ...controlDateHelper
    },
    {
        "id": "alerts_and_events",
        "function_name": "Alerts and Events",
        ...controlDateHelper
    },
    {
        "id": "investigations",
        "function_name": "Investigations",
        ...controlDateHelper
    },
    {
        "id": "manage_product_settings",
        "function_name": "Manage Product Settings",
        ...controlDateHelper
    },
    {
        "id": "clone",
        "function_name": "Clone",
        ...controlDateHelper
    },
    {
        "id": "create",
        "function_name": "Create",
        ...controlDateHelper
    },
    {
        "id": "delete",
        "function_name": "Delete",
        ...controlDateHelper
    },
    {
        "id": "modify",
        "function_name": "Modify",
        ...controlDateHelper
    },
    {
        "id": "run_reports",
        "function_name": "Run Reports",
        ...controlDateHelper
    },
    {
        "id": "manage_reports",
        "function_name": "Manage Reports",
        ...controlDateHelper
    },
    {
        "id": "view_reports",
        "function_name": "View Reports",
        ...controlDateHelper
    },
    {
        "id": "manage_templates",
        "function_name": "Manage Templates",
        ...controlDateHelper
    },
    {
        "id": "view_client_location_groups",
        "function_name": "View Client Location Groups",
        ...controlDateHelper
    },
    {
        "id": "additional_token_request",
        "function_name": "Additional Token Request",
        ...controlDateHelper
    },
    {
        "id": "manage_credentials",
        "function_name": "Manage Credentials",
        ...controlDateHelper
    },
    {
        "id": "client_location_groups",
        "function_name": "Client Location Groups",
        ...controlDateHelper
    },
    {
        "id": "approve_credentials",
        "function_name": "Approve Credentials",
        ...controlDateHelper
    },
    {
        "id": "custody_fund_services",
        "function_name": "Custody Fund Services",
        ...controlDateHelper
    },
    {
        "id": "links_online",
        "function_name": "Links Online",
        ...controlDateHelper
    },
    {
        "id": "common_services",
        "function_name": "Common Services",
        ...controlDateHelper
    },
    {
        "id": "delete_request",
        "function_name": "Delete Request",
        ...controlDateHelper
    },
    {
        "id": "view_request",
        "function_name": "View Request",
        ...controlDateHelper
    },
    {
        "id": "view_accounts",
        "function_name": "View Accounts",
        ...controlDateHelper
    },
    {
        "id": "view_products",
        "function_name": "View Products",
        ...controlDateHelper
    },
    {
        "id": "view_client",
        "function_name": "View Client",
        ...controlDateHelper
    }
];


export const PRODUCTS: ProductType[] = [
    {
        "id": "tim_foreign_exchange",
        "product_name": "TIM - Foreign Exchange",
        "sub_product": null,
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities",
        "product_name": "TIM - Listed Securities",
        "sub_product": null,
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities_inter_account_trade_transfer",
        "product_name": "TIM - Listed Securities",
        "sub_product": "Inter Account Trade Transfer",
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities_receive_free_of_payment",
        "product_name": "TIM - Listed Securities",
        "sub_product": "Receive Free of Payment",
        ...controlDateHelper
    },
    {
        "id": "tim_cash_advice_to_receive",
        "product_name": "TIM - Cash",
        "sub_product": "Advice to Receive",
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities_deliver_against_payment",
        "product_name": "TIM - Listed Securities",
        "sub_product": "Deliver Against Payment",
        ...controlDateHelper
    },
    {
        "id": "tim_cash_payment_order",
        "product_name": "TIM - Cash",
        "sub_product": "Payment Order",
        ...controlDateHelper
    },
    {
        "id": "tim_foreign_exchange_3rd_party_fx",
        "product_name": "TIM - Foreign Exchange",
        "sub_product": "3rd Party FX",
        ...controlDateHelper
    },
    {
        "id": "import_manager_and_template_manager",
        "product_name": "Import Manager and Template Manager",
        "sub_product": null,
        ...controlDateHelper
    },
    {
        "id": "securities_services_products_views_portfolio_reporting",
        "product_name": "Securities Services Products",
        "sub_product": "VIEWS Portfolio Reporting",
        ...controlDateHelper
    },
    {
        "id": "tim_cash",
        "product_name": "TIM - Cash",
        "sub_product": null,
        ...controlDateHelper
    },
    {
        "id": "tim_cash_inter_account_transfer",
        "product_name": "TIM - Cash",
        "sub_product": "Inter Account Transfer",
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities_deliver_free_of_payment",
        "product_name": "TIM - Listed Securities",
        "sub_product": "Deliver Free of Payment",
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities_receive_against_payment",
        "product_name": "TIM - Listed Securities",
        "sub_product": "Receive Against Payment",
        ...controlDateHelper
    },
    {
        "id": "securities_services_products_custody_dashboard",
        "product_name": "Securities Services Products",
        "sub_product": "Custody Dashboard",
        ...controlDateHelper
    },
    {
        "id": "securities_services_products",
        "product_name": "Securities Services Products",
        "sub_product": null,
        ...controlDateHelper
    },
    {
        "id": "continuous_link_settlement",
        "product_name": "Continuous Link Settlement",
        "sub_product": null,
        ...controlDateHelper
    },
    {
        "id": "administration",
        "product_name": "Administration",
        "sub_product": null,
        ...controlDateHelper
    },
    {
        "id": "corporate_action_manager",
        "product_name": "Corporate Action Manager",
        "sub_product": null,
        ...controlDateHelper
    },
    {
        "id": "corporate_action_manager_corporate_instruction",
        "product_name": "Corporate Action Manager",
        "sub_product": "Corporate Instruction",
        ...controlDateHelper
    },
    {
        "id": "corporate_action_manager_instruction_without_event",
        "product_name": "Corporate Action Manager",
        "sub_product": "Instruction Without Event",
        ...controlDateHelper
    }
];


export const PROFILES_FUNCTIONS: ProfileFunctionType[] = [
    {
        "id": 1,
        "profile_id": "administrator",
        "function_id": "manage_credentials"
    },
    {
        "id": 2,
        "profile_id": "administrator",
        "function_id": "run_reports"
    },
    {
        "id": 3,
        "profile_id": "administrator",
        "function_id": "view_reports"
    },
    {
        "id": 4,
        "profile_id": "administrator",
        "function_id": "additional_token_request"
    },
    {
        "id": 5,
        "profile_id": "administrator",
        "function_id": "view_products"
    },
    {
        "id": 6,
        "profile_id": "administrator",
        "function_id": "view_client"
    },
    {
        "id": 7,
        "profile_id": "administrator",
        "function_id": "links_online"
    },
    {
        "id": 8,
        "profile_id": "administrator",
        "function_id": "view_accounts"
    },
    {
        "id": 9,
        "profile_id": "administrator",
        "function_id": "modify"
    },
    {
        "id": 10,
        "profile_id": "administrator",
        "function_id": "client_location_groups"
    },
    {
        "id": 11,
        "profile_id": "administrator",
        "function_id": "view"
    },
    {
        "id": 12,
        "profile_id": "administrator",
        "function_id": "approve"
    },
    {
        "id": 13,
        "profile_id": "administrator",
        "function_id": "view_client_location_groups"
    },
    {
        "id": 14,
        "profile_id": "administrator",
        "function_id": "common_services"
    },
    {
        "id": 15,
        "profile_id": "administrator",
        "function_id": "clone"
    },
    {
        "id": 16,
        "profile_id": "administrator",
        "function_id": "manage_product_settings"
    },
    {
        "id": 17,
        "profile_id": "administrator",
        "function_id": "approve_credentials"
    },
    {
        "id": 18,
        "profile_id": "administrator",
        "function_id": "delete"
    },
    {
        "id": 19,
        "profile_id": "administrator",
        "function_id": "custody_fund_services"
    },
    {
        "id": 20,
        "profile_id": "administrator",
        "function_id": "create"
    },
    {
        "id": 21,
        "profile_id": "administrator",
        "function_id": "view_request"
    },
    {
        "id": 22,
        "profile_id": "administrator",
        "function_id": "delete_request"
    },
    {
        "id": 23,
        "profile_id": "administrator",
        "function_id": "visibility"
    },
    {
        "id": 24,
        "profile_id": "administrator",
        "function_id": "manage_reports"
    },
    {
        "id": 25,
        "profile_id": "administrator",
        "function_id": "manage_templates"
    },
    {
        "id": 26,
        "profile_id": "authorization",
        "function_id": "allow_cls"
    },
    {
        "id": 27,
        "profile_id": "authorization",
        "function_id": "view"
    },
    {
        "id": 28,
        "profile_id": "authorization",
        "function_id": "file_import"
    },
    {
        "id": 29,
        "profile_id": "authorization",
        "function_id": "release"
    },
    {
        "id": 30,
        "profile_id": "authorization",
        "function_id": "usgen2ccy"
    },
    {
        "id": 31,
        "profile_id": "authorization",
        "function_id": "visibility"
    },
    {
        "id": 32,
        "profile_id": "capture",
        "function_id": "allow_cls"
    },
    {
        "id": 33,
        "profile_id": "capture",
        "function_id": "create_template"
    },
    {
        "id": 34,
        "profile_id": "capture",
        "function_id": "input"
    },
    {
        "id": 35,
        "profile_id": "capture",
        "function_id": "view"
    },
    {
        "id": 36,
        "profile_id": "capture",
        "function_id": "view_template"
    },
    {
        "id": 37,
        "profile_id": "capture",
        "function_id": "cancel"
    },
    {
        "id": 38,
        "profile_id": "capture",
        "function_id": "amend"
    },
    {
        "id": 39,
        "profile_id": "capture",
        "function_id": "usgen2ccy"
    },
    {
        "id": 40,
        "profile_id": "capture",
        "function_id": "visibility"
    },
    {
        "id": 41,
        "profile_id": "verification",
        "function_id": "approve"
    },
    {
        "id": 42,
        "profile_id": "verification",
        "function_id": "view"
    },
    {
        "id": 43,
        "profile_id": "verification",
        "function_id": "file_import"
    },
    {
        "id": 44,
        "profile_id": "verification",
        "function_id": "view_template"
    },
    {
        "id": 45,
        "profile_id": "verification",
        "function_id": "approve_template"
    },
    {
        "id": 46,
        "profile_id": "verification",
        "function_id": "usgen2ccy"
    },
    {
        "id": 47,
        "profile_id": "verification",
        "function_id": "visibility"
    },
    {
        "id": 48,
        "profile_id": "verification",
        "function_id": "allow_cls"
    },
    {
        "id": 49,
        "profile_id": "viewer",
        "function_id": "investigations"
    },
    {
        "id": 50,
        "profile_id": "viewer",
        "function_id": "reports"
    },
    {
        "id": 51,
        "profile_id": "viewer",
        "function_id": "positions_and_settlement_status"
    },
    {
        "id": 52,
        "profile_id": "viewer",
        "function_id": "system"
    },
    {
        "id": 53,
        "profile_id": "viewer",
        "function_id": "alerts_and_events"
    },
    {
        "id": 54,
        "profile_id": "viewer",
        "function_id": "visibility"
    }
];


export const PROFILES: ProfileType[] = [
    {
        "id": "capture",
        "profile_name": "Capture",
        ...controlDateHelper
    },
    {
        "id": "verification",
        "profile_name": "Verification",
        ...controlDateHelper
    },
    {
        "id": "authorization",
        "profile_name": "Authorization",
        ...controlDateHelper
    },
    {
        "id": "administrator",
        "profile_name": "Administrador",
        ...controlDateHelper
    },
    {
        "id": "viewer",
        "profile_name": "Viewer",
        ...controlDateHelper
    }
];


export const USER_ENTITLEMENTS: UserEntitlementType[] = [
    {
        "id": 1,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 2,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 3,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 4,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 5,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 6,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 7,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 8,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 9,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 10,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 11,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 12,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 13,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 14,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 15,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 16,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 17,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 18,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 19,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 20,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 21,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 22,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 23,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 24,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 25,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 26,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 27,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 28,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 29,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 30,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 31,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 32,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 33,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 34,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 35,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 36,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 37,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 38,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 39,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 40,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 41,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 42,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 43,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 44,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_cash_payment_order",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 45,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_cash_payment_order",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 46,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 47,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 48,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "allow_cls",
        ...controlDateHelper
    },
    {
        "id": 49,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 50,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "import_manager_and_template_manager",
        "function_id": "usgen2ccy",
        ...controlDateHelper
    },
    {
        "id": 51,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "import_manager_and_template_manager",
        "function_id": "view_template",
        ...controlDateHelper
    },
    {
        "id": 52,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "import_manager_and_template_manager",
        "function_id": "create_template",
        ...controlDateHelper
    },
    {
        "id": 53,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 54,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 55,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 56,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 57,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 58,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 59,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 60,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 61,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 62,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 63,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 64,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 65,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 66,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 67,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 68,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 69,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "adiazcortes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 70,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 71,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 72,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 73,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 74,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 75,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 76,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 77,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 78,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 79,
        "function_type": "",
        "account_number": "",
        "access_id": "adiazcortes",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 80,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "amachete",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 81,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "amachete",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 82,
        "function_type": "",
        "account_number": "",
        "access_id": "amachete",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 83,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 84,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 85,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 86,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 87,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 88,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 89,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 90,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 91,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 92,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 93,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 94,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 95,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 96,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 97,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 98,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 99,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 100,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 101,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 102,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 103,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 104,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 105,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 106,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 107,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 108,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 109,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 110,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 111,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 112,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 113,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 114,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 115,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 116,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 117,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 118,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 119,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "tim_cash_payment_order",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 120,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 121,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "allow_cls",
        ...controlDateHelper
    },
    {
        "id": 122,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "import_manager_and_template_manager",
        "function_id": "approve_template",
        ...controlDateHelper
    },
    {
        "id": 123,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "import_manager_and_template_manager",
        "function_id": "usgen2ccy",
        ...controlDateHelper
    },
    {
        "id": 124,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "import_manager_and_template_manager",
        "function_id": "file_import",
        ...controlDateHelper
    },
    {
        "id": 125,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "import_manager_and_template_manager",
        "function_id": "view_template",
        ...controlDateHelper
    },
    {
        "id": 126,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 127,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 128,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 129,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 130,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 131,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 132,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 133,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 134,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 135,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 136,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 137,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 138,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 139,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 140,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 141,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 142,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "carlespinosa",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 143,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 144,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 145,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 146,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 147,
        "function_type": "",
        "account_number": "",
        "access_id": "carlespinosa",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 148,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "cecanon",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 149,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "cecanon",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 150,
        "function_type": "",
        "account_number": "",
        "access_id": "cecanon",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 151,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 152,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 153,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 154,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 155,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 156,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 157,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 158,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 159,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 160,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 161,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 162,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 163,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 164,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 165,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 166,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 167,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 168,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 169,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 170,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 171,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 172,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 173,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 174,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 175,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 176,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 177,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 178,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 179,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 180,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 181,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 182,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 183,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "tim_cash_payment_order",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 184,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 185,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "allow_cls",
        ...controlDateHelper
    },
    {
        "id": 186,
        "function_type": "",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "import_manager_and_template_manager",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 187,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 188,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 189,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 190,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 191,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 192,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 193,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 194,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 195,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 196,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 197,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 198,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 199,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 200,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 201,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "claudiamartin",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 202,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 203,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 204,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 205,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 206,
        "function_type": "",
        "account_number": "",
        "access_id": "claudiamartin",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 207,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "glperalta",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 208,
        "function_type": "Continuous Links Settlement",
        "account_number": "",
        "access_id": "glperalta",
        "product_id": "continuous_link_settlement",
        "function_id": "system",
        ...controlDateHelper
    },
    {
        "id": 209,
        "function_type": "Continuous Links Settlement",
        "account_number": "",
        "access_id": "glperalta",
        "product_id": "continuous_link_settlement",
        "function_id": "positions_and_settlement_status",
        ...controlDateHelper
    },
    {
        "id": 210,
        "function_type": "Continuous Links Settlement",
        "account_number": "",
        "access_id": "glperalta",
        "product_id": "continuous_link_settlement",
        "function_id": "reports",
        ...controlDateHelper
    },
    {
        "id": 211,
        "function_type": "Continuous Links Settlement",
        "account_number": "",
        "access_id": "glperalta",
        "product_id": "continuous_link_settlement",
        "function_id": "alerts_and_events",
        ...controlDateHelper
    },
    {
        "id": 212,
        "function_type": "Continuous Links Settlement",
        "account_number": "",
        "access_id": "glperalta",
        "product_id": "continuous_link_settlement",
        "function_id": "investigations",
        ...controlDateHelper
    },
    {
        "id": 213,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "glperalta",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 214,
        "function_type": "",
        "account_number": "",
        "access_id": "glperalta",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 215,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 216,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 217,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 218,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 219,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 220,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 221,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 222,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 223,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 224,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 225,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 226,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 227,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 228,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 229,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 230,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 231,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 232,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 233,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 234,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 235,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 236,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 237,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 238,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 239,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 240,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 241,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 242,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 243,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 244,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 245,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 246,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 247,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 248,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 249,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 250,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 251,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash_payment_order",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 252,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 253,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "allow_cls",
        ...controlDateHelper
    },
    {
        "id": 254,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "import_manager_and_template_manager",
        "function_id": "approve_template",
        ...controlDateHelper
    },
    {
        "id": 255,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "import_manager_and_template_manager",
        "function_id": "usgen2ccy",
        ...controlDateHelper
    },
    {
        "id": 256,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "import_manager_and_template_manager",
        "function_id": "file_import",
        ...controlDateHelper
    },
    {
        "id": 257,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "import_manager_and_template_manager",
        "function_id": "view_template",
        ...controlDateHelper
    },
    {
        "id": 258,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 259,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 260,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 261,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 262,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 263,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 264,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 265,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 266,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 267,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 268,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 269,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 270,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 271,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 272,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 273,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 274,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 275,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 276,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 277,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 278,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 279,
        "function_type": "",
        "account_number": "",
        "access_id": "jackbohn8002",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 280,
        "function_type": "",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "manage_product_settings",
        ...controlDateHelper
    },
    {
        "id": 281,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "clone",
        ...controlDateHelper
    },
    {
        "id": 282,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "create",
        ...controlDateHelper
    },
    {
        "id": 283,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 284,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 285,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "delete",
        ...controlDateHelper
    },
    {
        "id": 286,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "modify",
        ...controlDateHelper
    },
    {
        "id": 287,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "run_reports",
        ...controlDateHelper
    },
    {
        "id": 288,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "manage_reports",
        ...controlDateHelper
    },
    {
        "id": 289,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "view_reports",
        ...controlDateHelper
    },
    {
        "id": 290,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "manage_templates",
        ...controlDateHelper
    },
    {
        "id": 291,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "view_client_location_groups",
        ...controlDateHelper
    },
    {
        "id": 292,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "additional_token_request",
        ...controlDateHelper
    },
    {
        "id": 293,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "manage_credentials",
        ...controlDateHelper
    },
    {
        "id": 294,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "client_location_groups",
        ...controlDateHelper
    },
    {
        "id": 295,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "approve_credentials",
        ...controlDateHelper
    },
    {
        "id": 296,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "custody_fund_services",
        ...controlDateHelper
    },
    {
        "id": 297,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "links_online",
        ...controlDateHelper
    },
    {
        "id": 298,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "common_services",
        ...controlDateHelper
    },
    {
        "id": 299,
        "function_type": "Manage Requests",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "delete_request",
        ...controlDateHelper
    },
    {
        "id": 300,
        "function_type": "Manage Requests",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "view_request",
        ...controlDateHelper
    },
    {
        "id": 301,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "delete",
        ...controlDateHelper
    },
    {
        "id": 302,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 303,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "modify",
        ...controlDateHelper
    },
    {
        "id": 304,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "clone",
        ...controlDateHelper
    },
    {
        "id": 305,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "create",
        ...controlDateHelper
    },
    {
        "id": 306,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 307,
        "function_type": "Other",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "view_accounts",
        ...controlDateHelper
    },
    {
        "id": 308,
        "function_type": "Other",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "view_products",
        ...controlDateHelper
    },
    {
        "id": 309,
        "function_type": "Other",
        "account_number": "",
        "access_id": "jammoreno",
        "product_id": "administration",
        "function_id": "view_client",
        ...controlDateHelper
    },
    {
        "id": 310,
        "function_type": "",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "manage_product_settings",
        ...controlDateHelper
    },
    {
        "id": 311,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "clone",
        ...controlDateHelper
    },
    {
        "id": 312,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "create",
        ...controlDateHelper
    },
    {
        "id": 313,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 314,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 315,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "delete",
        ...controlDateHelper
    },
    {
        "id": 316,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "modify",
        ...controlDateHelper
    },
    {
        "id": 317,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "run_reports",
        ...controlDateHelper
    },
    {
        "id": 318,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "manage_reports",
        ...controlDateHelper
    },
    {
        "id": 319,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "view_reports",
        ...controlDateHelper
    },
    {
        "id": 320,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "manage_templates",
        ...controlDateHelper
    },
    {
        "id": 321,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "view_client_location_groups",
        ...controlDateHelper
    },
    {
        "id": 322,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "additional_token_request",
        ...controlDateHelper
    },
    {
        "id": 323,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "manage_credentials",
        ...controlDateHelper
    },
    {
        "id": 324,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "client_location_groups",
        ...controlDateHelper
    },
    {
        "id": 325,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "approve_credentials",
        ...controlDateHelper
    },
    {
        "id": 326,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "custody_fund_services",
        ...controlDateHelper
    },
    {
        "id": 327,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "links_online",
        ...controlDateHelper
    },
    {
        "id": 328,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "common_services",
        ...controlDateHelper
    },
    {
        "id": 329,
        "function_type": "Manage Requests",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "delete_request",
        ...controlDateHelper
    },
    {
        "id": 330,
        "function_type": "Manage Requests",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "view_request",
        ...controlDateHelper
    },
    {
        "id": 331,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "delete",
        ...controlDateHelper
    },
    {
        "id": 332,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 333,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "modify",
        ...controlDateHelper
    },
    {
        "id": 334,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "clone",
        ...controlDateHelper
    },
    {
        "id": 335,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "create",
        ...controlDateHelper
    },
    {
        "id": 336,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 337,
        "function_type": "Other",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "view_accounts",
        ...controlDateHelper
    },
    {
        "id": 338,
        "function_type": "Other",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "view_products",
        ...controlDateHelper
    },
    {
        "id": 339,
        "function_type": "Other",
        "account_number": "",
        "access_id": "jsandovalfernandez",
        "product_id": "administration",
        "function_id": "view_client",
        ...controlDateHelper
    },
    {
        "id": 340,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "juandiaz1980",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 341,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "juandiaz1980",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 342,
        "function_type": "",
        "account_number": "",
        "access_id": "juandiaz1980",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 343,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 344,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 345,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 346,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 347,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 348,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 349,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 350,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 351,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 352,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 353,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 354,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 355,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 356,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 357,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 358,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 359,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 360,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 361,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 362,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 363,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 364,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 365,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 366,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 367,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 368,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 369,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 370,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 371,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 372,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 373,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 374,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 375,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 376,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 377,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 378,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 379,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 380,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 381,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 382,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 383,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 384,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 385,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 386,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash_payment_order",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 387,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash_payment_order",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 388,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 389,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 390,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "allow_cls",
        ...controlDateHelper
    },
    {
        "id": 391,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 392,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "import_manager_and_template_manager",
        "function_id": "usgen2ccy",
        ...controlDateHelper
    },
    {
        "id": 393,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "import_manager_and_template_manager",
        "function_id": "view_template",
        ...controlDateHelper
    },
    {
        "id": 394,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "import_manager_and_template_manager",
        "function_id": "create_template",
        ...controlDateHelper
    },
    {
        "id": 395,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 396,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 397,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 398,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 399,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 400,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 401,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 402,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 403,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 404,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 405,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 406,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 407,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 408,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 409,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 410,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 411,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 412,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 413,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 414,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 415,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 416,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 417,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 418,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 419,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 420,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 421,
        "function_type": "",
        "account_number": "",
        "access_id": "juangutierrez0496",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 422,
        "function_type": "",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "manage_product_settings",
        ...controlDateHelper
    },
    {
        "id": 423,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "clone",
        ...controlDateHelper
    },
    {
        "id": 424,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "create",
        ...controlDateHelper
    },
    {
        "id": 425,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 426,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 427,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "delete",
        ...controlDateHelper
    },
    {
        "id": 428,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "modify",
        ...controlDateHelper
    },
    {
        "id": 429,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "run_reports",
        ...controlDateHelper
    },
    {
        "id": 430,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "manage_reports",
        ...controlDateHelper
    },
    {
        "id": 431,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "view_reports",
        ...controlDateHelper
    },
    {
        "id": 432,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "manage_templates",
        ...controlDateHelper
    },
    {
        "id": 433,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "view_client_location_groups",
        ...controlDateHelper
    },
    {
        "id": 434,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "additional_token_request",
        ...controlDateHelper
    },
    {
        "id": 435,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "manage_credentials",
        ...controlDateHelper
    },
    {
        "id": 436,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "client_location_groups",
        ...controlDateHelper
    },
    {
        "id": 437,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "approve_credentials",
        ...controlDateHelper
    },
    {
        "id": 438,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "custody_fund_services",
        ...controlDateHelper
    },
    {
        "id": 439,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "links_online",
        ...controlDateHelper
    },
    {
        "id": 440,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "common_services",
        ...controlDateHelper
    },
    {
        "id": 441,
        "function_type": "Manage Requests",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "delete_request",
        ...controlDateHelper
    },
    {
        "id": 442,
        "function_type": "Manage Requests",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "view_request",
        ...controlDateHelper
    },
    {
        "id": 443,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "delete",
        ...controlDateHelper
    },
    {
        "id": 444,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 445,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "modify",
        ...controlDateHelper
    },
    {
        "id": 446,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "clone",
        ...controlDateHelper
    },
    {
        "id": 447,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "create",
        ...controlDateHelper
    },
    {
        "id": 448,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 449,
        "function_type": "Other",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "view_accounts",
        ...controlDateHelper
    },
    {
        "id": 450,
        "function_type": "Other",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "view_products",
        ...controlDateHelper
    },
    {
        "id": 451,
        "function_type": "Other",
        "account_number": "",
        "access_id": "julioalvarez1052",
        "product_id": "administration",
        "function_id": "view_client",
        ...controlDateHelper
    },
    {
        "id": 452,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 453,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 454,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 455,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 456,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 457,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 458,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 459,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 460,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 461,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 462,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 463,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 464,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 465,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 466,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 467,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 468,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 469,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 470,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 471,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 472,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 473,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 474,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 475,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 476,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 477,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 478,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 479,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 480,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 481,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 482,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 483,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 484,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 485,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 486,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 487,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 488,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "tim_cash_payment_order",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 489,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 490,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "allow_cls",
        ...controlDateHelper
    },
    {
        "id": 491,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "import_manager_and_template_manager",
        "function_id": "usgen2ccy",
        ...controlDateHelper
    },
    {
        "id": 492,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "import_manager_and_template_manager",
        "function_id": "file_import",
        ...controlDateHelper
    },
    {
        "id": 493,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 494,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 495,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 496,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 497,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 498,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 499,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 500,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 501,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 502,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 503,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 504,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 505,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 506,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 507,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 508,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 509,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "lacifuentes",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 510,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 511,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 512,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 513,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 514,
        "function_type": "",
        "account_number": "",
        "access_id": "lacifuentes",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 515,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 516,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 517,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 518,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 519,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 520,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 521,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 522,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 523,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 524,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 525,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 526,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 527,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 528,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 529,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 530,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 531,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 532,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 533,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 534,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 535,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 536,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 537,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 538,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 539,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 540,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 541,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 542,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 543,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 544,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 545,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 546,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "larincon",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 547,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 548,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 549,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 550,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 551,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "tim_cash_payment_order",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 552,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 553,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "allow_cls",
        ...controlDateHelper
    },
    {
        "id": 554,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "import_manager_and_template_manager",
        "function_id": "approve_template",
        ...controlDateHelper
    },
    {
        "id": 555,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "import_manager_and_template_manager",
        "function_id": "usgen2ccy",
        ...controlDateHelper
    },
    {
        "id": 556,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "import_manager_and_template_manager",
        "function_id": "file_import",
        ...controlDateHelper
    },
    {
        "id": 557,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "import_manager_and_template_manager",
        "function_id": "view_template",
        ...controlDateHelper
    },
    {
        "id": 558,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 559,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 560,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 561,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 562,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 563,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 564,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 565,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 566,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 567,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 568,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 569,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 570,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 571,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 572,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 573,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 574,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "larincon",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 575,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 576,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 577,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 578,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 579,
        "function_type": "",
        "account_number": "",
        "access_id": "larincon",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 580,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 581,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 582,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 583,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 584,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 585,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 586,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 587,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 588,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 589,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 590,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 591,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 592,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 593,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 594,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 595,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 596,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 597,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 598,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 599,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 600,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 601,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 602,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 603,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 604,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 605,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 606,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 607,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 608,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 609,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 610,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 611,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 612,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 613,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 614,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 615,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 616,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 617,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 618,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 619,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 620,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 621,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 622,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 623,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash_payment_order",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 624,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash_payment_order",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 625,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 626,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 627,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "allow_cls",
        ...controlDateHelper
    },
    {
        "id": 628,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 629,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "import_manager_and_template_manager",
        "function_id": "usgen2ccy",
        ...controlDateHelper
    },
    {
        "id": 630,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "import_manager_and_template_manager",
        "function_id": "view_template",
        ...controlDateHelper
    },
    {
        "id": 631,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "import_manager_and_template_manager",
        "function_id": "create_template",
        ...controlDateHelper
    },
    {
        "id": 632,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 633,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 634,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 635,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 636,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 637,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 638,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 639,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 640,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 641,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 642,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 643,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 644,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 645,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 646,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 647,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 648,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 649,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 650,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 651,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 652,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 653,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 654,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "cancel",
        ...controlDateHelper
    },
    {
        "id": 655,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "input",
        ...controlDateHelper
    },
    {
        "id": 656,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "amend",
        ...controlDateHelper
    },
    {
        "id": 657,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 658,
        "function_type": "",
        "account_number": "",
        "access_id": "lorenagutierrez0120",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 659,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "martbarreto",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 660,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "martbarreto",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 661,
        "function_type": "",
        "account_number": "",
        "access_id": "martbarreto",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 662,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 663,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 664,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 665,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 666,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 667,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 668,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 669,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 670,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 671,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 672,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 673,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 674,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 675,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 676,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 677,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 678,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 679,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 680,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 681,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 682,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 683,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 684,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 685,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 686,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 687,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 688,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 689,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 690,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 691,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 692,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities_inter_account_trade_transfer",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 693,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities_receive_free_of_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 694,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "tim_cash_advice_to_receive",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 695,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities_deliver_against_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 696,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "tim_cash_payment_order",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 697,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 698,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "tim_foreign_exchange_3rd_party_fx",
        "function_id": "allow_cls",
        ...controlDateHelper
    },
    {
        "id": 699,
        "function_type": "",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "import_manager_and_template_manager",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 700,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 701,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 35946",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 702,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46407",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 703,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "82783",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 704,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 17006",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 705,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EPR68",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 706,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "S 97871",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 707,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 92590",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 708,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 88529",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 709,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 46408",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 710,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH26",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 711,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EMH27",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 712,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "05421",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 713,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "EID10",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 714,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "FDA63",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 715,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "P 79897",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 716,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "AIF62",
        "access_id": "nathalortiz",
        "product_id": "tim_cash",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 717,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "tim_cash_inter_account_transfer",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 718,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities_deliver_free_of_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 719,
        "function_type": "TIM - Transaction Intiation Manager",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "tim_listed_securities_receive_against_payment",
        "function_id": "release",
        ...controlDateHelper
    },
    {
        "id": 720,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 721,
        "function_type": "",
        "account_number": "",
        "access_id": "nathalortiz",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 722,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 723,
        "function_type": "",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "manage_product_settings",
        ...controlDateHelper
    },
    {
        "id": 724,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "clone",
        ...controlDateHelper
    },
    {
        "id": 725,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "create",
        ...controlDateHelper
    },
    {
        "id": 726,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 727,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 728,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "delete",
        ...controlDateHelper
    },
    {
        "id": 729,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "modify",
        ...controlDateHelper
    },
    {
        "id": 730,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "run_reports",
        ...controlDateHelper
    },
    {
        "id": 731,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "manage_reports",
        ...controlDateHelper
    },
    {
        "id": 732,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "view_reports",
        ...controlDateHelper
    },
    {
        "id": 733,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "manage_templates",
        ...controlDateHelper
    },
    {
        "id": 734,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "view_client_location_groups",
        ...controlDateHelper
    },
    {
        "id": 735,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "additional_token_request",
        ...controlDateHelper
    },
    {
        "id": 736,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "manage_credentials",
        ...controlDateHelper
    },
    {
        "id": 737,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "client_location_groups",
        ...controlDateHelper
    },
    {
        "id": 738,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "approve_credentials",
        ...controlDateHelper
    },
    {
        "id": 739,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "custody_fund_services",
        ...controlDateHelper
    },
    {
        "id": 740,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "links_online",
        ...controlDateHelper
    },
    {
        "id": 741,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "common_services",
        ...controlDateHelper
    },
    {
        "id": 742,
        "function_type": "Manage Requests",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "delete_request",
        ...controlDateHelper
    },
    {
        "id": 743,
        "function_type": "Manage Requests",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "view_request",
        ...controlDateHelper
    },
    {
        "id": 744,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "delete",
        ...controlDateHelper
    },
    {
        "id": 745,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 746,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "modify",
        ...controlDateHelper
    },
    {
        "id": 747,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "clone",
        ...controlDateHelper
    },
    {
        "id": 748,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "create",
        ...controlDateHelper
    },
    {
        "id": 749,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 750,
        "function_type": "Other",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "view_accounts",
        ...controlDateHelper
    },
    {
        "id": 751,
        "function_type": "Other",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "view_products",
        ...controlDateHelper
    },
    {
        "id": 752,
        "function_type": "Other",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "administration",
        "function_id": "view_client",
        ...controlDateHelper
    },
    {
        "id": 753,
        "function_type": "",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "corporate_action_manager",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 754,
        "function_type": "CFS - Corporate Action Instruction",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "corporate_action_manager_corporate_instruction",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 755,
        "function_type": "CFS - Corporate Action Instruction",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "corporate_action_manager_instruction_without_event",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 756,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 757,
        "function_type": "",
        "account_number": "",
        "access_id": "vibenavides",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 758,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "xiomgalvis",
        "product_id": "securities_services_products_views_portfolio_reporting",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 759,
        "function_type": "Merchant Services Reporting Functions",
        "account_number": "",
        "access_id": "xiomgalvis",
        "product_id": "securities_services_products_custody_dashboard",
        "function_id": "visibility",
        ...controlDateHelper
    },
    {
        "id": 760,
        "function_type": "",
        "account_number": "",
        "access_id": "xiomgalvis",
        "product_id": "securities_services_products",
        "function_id": "",
        ...controlDateHelper
    },
    {
        "id": 761,
        "function_type": "",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "manage_product_settings",
        ...controlDateHelper
    },
    {
        "id": 762,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "clone",
        ...controlDateHelper
    },
    {
        "id": 763,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "create",
        ...controlDateHelper
    },
    {
        "id": 764,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 765,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 766,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "delete",
        ...controlDateHelper
    },
    {
        "id": 767,
        "function_type": "Manage Account Groups",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "modify",
        ...controlDateHelper
    },
    {
        "id": 768,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "run_reports",
        ...controlDateHelper
    },
    {
        "id": 769,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "manage_reports",
        ...controlDateHelper
    },
    {
        "id": 770,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "view_reports",
        ...controlDateHelper
    },
    {
        "id": 771,
        "function_type": "Manage Administration Reports",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "manage_templates",
        ...controlDateHelper
    },
    {
        "id": 772,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "view_client_location_groups",
        ...controlDateHelper
    },
    {
        "id": 773,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "additional_token_request",
        ...controlDateHelper
    },
    {
        "id": 774,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "manage_credentials",
        ...controlDateHelper
    },
    {
        "id": 775,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "client_location_groups",
        ...controlDateHelper
    },
    {
        "id": 776,
        "function_type": "Manage Credentials",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "approve_credentials",
        ...controlDateHelper
    },
    {
        "id": 777,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "custody_fund_services",
        ...controlDateHelper
    },
    {
        "id": 778,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "links_online",
        ...controlDateHelper
    },
    {
        "id": 779,
        "function_type": "Manage Products",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "common_services",
        ...controlDateHelper
    },
    {
        "id": 780,
        "function_type": "Manage Requests",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "delete_request",
        ...controlDateHelper
    },
    {
        "id": 781,
        "function_type": "Manage Requests",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "view_request",
        ...controlDateHelper
    },
    {
        "id": 782,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "delete",
        ...controlDateHelper
    },
    {
        "id": 783,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "view",
        ...controlDateHelper
    },
    {
        "id": 784,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "modify",
        ...controlDateHelper
    },
    {
        "id": 785,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "clone",
        ...controlDateHelper
    },
    {
        "id": 786,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "create",
        ...controlDateHelper
    },
    {
        "id": 787,
        "function_type": "Manage Users",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "approve",
        ...controlDateHelper
    },
    {
        "id": 788,
        "function_type": "Other",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "view_accounts",
        ...controlDateHelper
    },
    {
        "id": 789,
        "function_type": "Other",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "view_products",
        ...controlDateHelper
    },
    {
        "id": 790,
        "function_type": "Other",
        "account_number": "",
        "access_id": "yureyes",
        "product_id": "administration",
        "function_id": "view_client",
        ...controlDateHelper
    }
]; 