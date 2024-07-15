import { AccountType, AppUserType, ProductAccountType, CompanyUserType, ControlDateType, FunctionType, ProductType, ProfileFunctionType, ProfileType, UserEntitlementType } from "../types";


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
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "deletedAt": null
};



export const ACCOUNTS: AccountType[] = [
    {
        "accountName": "BANCO DE LA REPUBLICA-PACIFIC INVESTMENT MANAGEMENT COMPANY LLC",
        "accountNumber": "P 35946",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "FIDEICOMISO FAE - GOLDMAN SACHS ASSETMANAGEMENT, L.P.",
        "accountNumber": "P 46407",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA-WELLINGTONMANAGEMENT COMPANY LLP",
        "accountNumber": "S 17006",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "FIDEICOMISO FAE",
        "accountNumber": "82783",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA - STATE STREET GLOBAL ADVISORS TRUST COMPANY",
        "accountNumber": "EPR68",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA - STATE STREETGLOBAL ADVISORS TRUST COMPANY",
        "accountNumber": "P 92590",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA.",
        "accountNumber": "S 97871",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "FIDEICOMISO FAE",
        "accountNumber": "P 88529",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "FIDEICOMISO FAE - WELLINGTON MANAGEMENT COMPANY, LLP",
        "accountNumber": "P 46408",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "FIDEICOMISO FAE - GOLDMAN SACHS ASSET MANAGEMENT, L.P.",
        "accountNumber": "EMH26",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA",
        "accountNumber": "05421",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "FIDEICOMISO FAE - WELLINGTON MANAGEMENT COMPANY, LLP",
        "accountNumber": "EMH27",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "FIDEICOMISO FAE - BLACKROCK INSTITUTIONAL TRUST COMPANY, N.A. EQUITY",
        "accountNumber": "EID10",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA-WELLINGTONMANAGEMENT COMPANY LLP",
        "accountNumber": "FDA63",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "FIDEICOMISO FAE - BLACKROCK INSTITUTIONAL TRUST COMPANY, N.A. EQUITY",
        "accountNumber": "P 79897",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA-PACIFIC INVESTMENT MANAGEMENT COMANY LLC",
        "accountNumber": "AIF62",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCOVEW",
        "accountNumber": "0",
        "accountType": "Portfolio",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "FIDEICOMISO FAE - BLACKROCK INSTITUTIONAL TRUST COMPANY, N.A. FIX INCM",
        "accountNumber": "EMO35",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA -WESTERNASSET MANAGEMENT",
        "accountNumber": "P 06252",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA FAEP UBSBRINSON",
        "accountNumber": "19534",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA GOLDMAN SACHS FORWARD CASH TO STATE STREET BANK & TRUST ABA: 011000028 A/C: 10365211 NAME: BANCO DE LA REPUBLICA",
        "accountNumber": "P 83234",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "BANCO DE LA REPUBLICA GOLDMAN SACHS",
        "accountNumber": "18987",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    },
    {
        "accountName": "FIDEICOMISO FAE - BLACKROCK INSTITUTIONAL TRUST COMPANY, N.A. FIX INCM",
        "accountNumber": "P 49913",
        "accountType": "Custody Account",
        "bankCurrency": null,
        ...controlDateHelper
    }
];


export const PRODUCTS_ACCOUNTS: ProductAccountType[] = [
    {
        "accountNumber": "P 35946",
        "id": "tim_foreign_exchange_p_35946",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 46407",
        "id": "tim_foreign_exchange_p_46407",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "82783",
        "id": "tim_foreign_exchange_82783",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "S 17006",
        "id": "tim_foreign_exchange_s_17006",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "EPR68",
        "id": "tim_foreign_exchange_epr68",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "S 97871",
        "id": "tim_foreign_exchange_s_97871",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 92590",
        "id": "tim_foreign_exchange_p_92590",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 88529",
        "id": "tim_foreign_exchange_p_88529",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 46408",
        "id": "tim_foreign_exchange_p_46408",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "EMH26",
        "id": "tim_foreign_exchange_emh26",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "05421",
        "id": "tim_foreign_exchange_05421",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "EMH27",
        "id": "tim_foreign_exchange_emh27",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "EID10",
        "id": "tim_foreign_exchange_eid10",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 79897",
        "id": "tim_foreign_exchange_p_79897",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "FDA63",
        "id": "tim_foreign_exchange_fda63",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "AIF62",
        "id": "tim_foreign_exchange_aif62",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 35946",
        "id": "tim_listed_securities_p_35946",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 46407",
        "id": "tim_listed_securities_p_46407",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "82783",
        "id": "tim_listed_securities_82783",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "S 17006",
        "id": "tim_listed_securities_s_17006",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "EPR68",
        "id": "tim_listed_securities_epr68",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 92590",
        "id": "tim_listed_securities_p_92590",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "S 97871",
        "id": "tim_listed_securities_s_97871",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 88529",
        "id": "tim_listed_securities_p_88529",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 46408",
        "id": "tim_listed_securities_p_46408",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "EMH26",
        "id": "tim_listed_securities_emh26",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "05421",
        "id": "tim_listed_securities_05421",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "EMH27",
        "id": "tim_listed_securities_emh27",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "EID10",
        "id": "tim_listed_securities_eid10",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "FDA63",
        "id": "tim_listed_securities_fda63",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 79897",
        "id": "tim_listed_securities_p_79897",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "AIF62",
        "id": "tim_listed_securities_aif62",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 35946",
        "id": "tim_cash_p_35946",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 46407",
        "id": "tim_cash_p_46407",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "82783",
        "id": "tim_cash_82783",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "S 17006",
        "id": "tim_cash_s_17006",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "EPR68",
        "id": "tim_cash_epr68",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "S 97871",
        "id": "tim_cash_s_97871",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 92590",
        "id": "tim_cash_p_92590",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 88529",
        "id": "tim_cash_p_88529",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 46408",
        "id": "tim_cash_p_46408",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "EMH26",
        "id": "tim_cash_emh26",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "05421",
        "id": "tim_cash_05421",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "EMH27",
        "id": "tim_cash_emh27",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "EID10",
        "id": "tim_cash_eid10",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "FDA63",
        "id": "tim_cash_fda63",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 79897",
        "id": "tim_cash_p_79897",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "AIF62",
        "id": "tim_cash_aif62",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "EMO35",
        "id": "corporate_action_manager_emo35",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 46407",
        "id": "corporate_action_manager_p_46407",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 06252",
        "id": "corporate_action_manager_p_06252",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "S 17006",
        "id": "corporate_action_manager_s_17006",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "S 97871",
        "id": "corporate_action_manager_s_97871",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 46408",
        "id": "corporate_action_manager_p_46408",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "19534",
        "id": "corporate_action_manager_19534",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "EMH26",
        "id": "corporate_action_manager_emh26",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "05421",
        "id": "corporate_action_manager_05421",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "EMH27",
        "id": "corporate_action_manager_emh27",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 83234",
        "id": "corporate_action_manager_p_83234",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "18987",
        "id": "corporate_action_manager_18987",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "EID10",
        "id": "corporate_action_manager_eid10",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 79897",
        "id": "corporate_action_manager_p_79897",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "FDA63",
        "id": "corporate_action_manager_fda63",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "P 49913",
        "id": "corporate_action_manager_p_49913",
        "productId": "corporate_action_manager",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "corporate_action_manager_instruction_without_event_",
        "productId": "corporate_action_manager_instruction_without_event",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "corporate_action_manager_corporate_instruction_",
        "productId": "corporate_action_manager_corporate_instruction",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_foreign_exchange_",
        "productId": "tim_foreign_exchange",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_listed_securities_",
        "productId": "tim_listed_securities",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_listed_securities_receive_free_of_payment_",
        "productId": "tim_listed_securities_receive_free_of_payment",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_listed_securities_inter_account_trade_transfer_",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_cash_",
        "productId": "tim_cash",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_listed_securities_deliver_free_of_payment_",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_cash_inter_account_transfer_",
        "productId": "tim_cash_inter_account_transfer",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_listed_securities_receive_against_payment_",
        "productId": "tim_listed_securities_receive_against_payment",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_cash_advice_to_receive_",
        "productId": "tim_cash_advice_to_receive",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_listed_securities_deliver_against_payment_",
        "productId": "tim_listed_securities_deliver_against_payment",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_foreign_exchange_3rd_party_fx_",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        ...controlDateHelper
    },
    {
        "accountNumber": "",
        "id": "tim_cash_payment_order_",
        "productId": "tim_cash_payment_order",
        ...controlDateHelper
    }
];


export const COMPANY_USERS: CompanyUserType[] = [
    {
        "userName": "Diaz  Cortes, Ana Maria",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "adiazcor@banrep.gov.co",
        "windowsUserId": "adiazcor",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-11-09 00:24:21" ),
        "userLogonStatus": "Active",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "adiazcortes",
        "profileId": "capture",
        ...controlDateHelper
    },
    {
        "userName": "Machete, Andres",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "amachequ@banrep.gov.co",
        "windowsUserId": "amachequ",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "Password",
        "userLastLogonDt": new Date( "2023-11-16 15:00:50" ),
        "userLogonStatus": "Active",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "amachete",
        "profileId": "viewer",
        ...controlDateHelper
    },
    {
        "userName": "Espinosa, Carlos",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "cespinri@banrep.gov.co",
        "windowsUserId": "cespinri",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-08-29 16:13:33" ),
        "userLogonStatus": "> 2 Month",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "carlespinosa",
        "profileId": "verification",
        ...controlDateHelper
    },
    {
        "userName": "Canon, Cesar",
        "userType": "End User",
        "userStatus": false,
        "employeeId": "",
        "emailAddress": "ccanonos@banrep.gov.co",
        "windowsUserId": "ccanonos",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "Password",
        "userLastLogonDt": new Date( "2023-08-10 14:46:36" ),
        "userLogonStatus": "> 3 Month",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "cecanon",
        "profileId": "viewer",
        ...controlDateHelper
    },
    {
        "userName": "Martin, Claudia",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "cmartibe@banrep.gov.co",
        "windowsUserId": "cmartibe",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-09-19 18:32:20" ),
        "userLogonStatus": "> 2 Month",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "claudiamartin",
        "profileId": "authorization",
        ...controlDateHelper
    },
    {
        "userName": "Peralta, Gladys",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "Gperalfo@banrep.gov.co",
        "windowsUserId": "Gperalfo",
        "userLocation": "",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-11-17 20:59:17" ),
        "userLogonStatus": "Active",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "glperalta",
        "profileId": "viewer",
        ...controlDateHelper
    },
    {
        "userName": "Bohn, Jack",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "Jbohmsil@banrep.gov.co",
        "windowsUserId": "Jbohmsil",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-09-19 18:25:51" ),
        "userLogonStatus": "> 2 Month",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "jackbohn8002",
        "profileId": "verification",
        ...controlDateHelper
    },
    {
        "userName": "Moreno, Jamie",
        "userType": "SA2",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "jmorenga@banrep.gov.co",
        "windowsUserId": "jmorenga",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-11-17 23:36:23" ),
        "userLogonStatus": "Active",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "jammoreno",
        "profileId": "administrator",
        ...controlDateHelper
    },
    {
        "userName": "Sandoval Fernandez, Jose David",
        "userType": "SAOther",
        "userStatus": false,
        "employeeId": "",
        "emailAddress": "jsandofe@banep.gov.co",
        "windowsUserId": "jsandofe",
        "userLocation": "Bogota DC, Colombia",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "" ),
        "userLogonStatus": "No Log",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "jsandovalfernandez",
        "profileId": "administrator",
        ...controlDateHelper
    },
    {
        "userName": "Diaz, Juan",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "jdiazgam@banrep.gov.co",
        "windowsUserId": "jdiazgam",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "Password",
        "userLastLogonDt": new Date( "2023-06-27 19:18:08" ),
        "userLogonStatus": "> 4 Month",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "juandiaz1980",
        "profileId": "viewer",
        ...controlDateHelper
    },
    {
        "userName": "Gutierrez, Juan",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "jgutieru@banrep.gov.co",
        "windowsUserId": "jgutieru",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-11-16 16:14:41" ),
        "userLogonStatus": "Active",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "juangutierrez0496",
        "profileId": "capture",
        ...controlDateHelper
    },
    {
        "userName": "Alvarez, Julio",
        "userType": "SAOther",
        "userStatus": false,
        "employeeId": "",
        "emailAddress": "jalvarbe@banrep.gov.co",
        "windowsUserId": "jalvarbe",
        "userLocation": "Bogota DC, Colombia",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-03-21 21:50:41" ),
        "userLogonStatus": "Inactive",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "julioalvarez1052",
        "profileId": "administrator",
        ...controlDateHelper
    },
    {
        "userName": "Cifuentes, Laura",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "lcifuega@banrep.gov.co",
        "windowsUserId": "lcifuega",
        "userLocation": "",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-08-09 18:41:58" ),
        "userLogonStatus": "> 3 Month",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "lacifuentes",
        "profileId": "authorization",
        ...controlDateHelper
    },
    {
        "userName": "Rincon, Laura",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "lrincosa@banrep.gov.co",
        "windowsUserId": "lrincosa",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-09-29 21:11:43" ),
        "userLogonStatus": "> 1 Month",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "larincon",
        "profileId": "verification",
        ...controlDateHelper
    },
    {
        "userName": "Gutierrez, Lorena",
        "userType": "End User",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "lgutiees@banrep.gov.co",
        "windowsUserId": "lgutiees",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-11-07 15:39:31" ),
        "userLogonStatus": "Active",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "lorenagutierrez0120",
        "profileId": "capture",
        ...controlDateHelper
    },
    {
        "userName": "Barreto, Martha",
        "userType": "End User",
        "userStatus": false,
        "employeeId": "",
        "emailAddress": "mbarreay@banrep.gov.co",
        "windowsUserId": "mbarreay",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "" ),
        "userLogonStatus": "No Log",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "martbarreto",
        "profileId": "viewer",
        ...controlDateHelper
    },
    {
        "userName": "Ortiz, Nathalie",
        "userType": "End User",
        "userStatus": false,
        "employeeId": "",
        "emailAddress": "nortizye@banrep.gov.co",
        "windowsUserId": "nortizye",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-05-12 21:07:19" ),
        "userLogonStatus": "> 5 Month",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "nathalortiz",
        "profileId": "authorization",
        ...controlDateHelper
    },
    {
        "userName": "Benavides, Victor",
        "userType": "SA1",
        "userStatus": false,
        "employeeId": "",
        "emailAddress": "vbenavza@banrep.gov.co",
        "windowsUserId": "vbenavza",
        "userLocation": "",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-03-30 15:33:47" ),
        "userLogonStatus": "Inactive",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "vibenavides",
        "profileId": "administrator",
        ...controlDateHelper
    },
    {
        "userName": "Galvis, Xiomara",
        "userType": "End User",
        "userStatus": false,
        "employeeId": "",
        "emailAddress": "lgalvifl@banrep.gov.co",
        "windowsUserId": "lgalvifl",
        "userLocation": "Bogota DC, UN",
        "userCountry": "CO",
        "userLogonType": "Password",
        "userLastLogonDt": new Date( "2022-12-28 12:50:01" ),
        "userLogonStatus": "Inactive",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "xiomgalvis",
        "profileId": "viewer",
        ...controlDateHelper
    },
    {
        "userName": "Reyes, Yuri",
        "userType": "SAOther",
        "userStatus": true,
        "employeeId": "",
        "emailAddress": "yreyesja@banrep.gov.co",
        "windowsUserId": "yreyesja",
        "userLocation": "Bogota, D.C.",
        "userCountry": "CO",
        "userLogonType": "RSA Token",
        "userLastLogonDt": new Date( "2023-11-22 16:02:54" ),
        "userLogonStatus": "Active",
        "userGroupMembership": "",
        "userRole": "",
        "accessId": "yureyes",
        "profileId": "administrator",
        ...controlDateHelper
    }
];


export const FUNCTIONS: FunctionType[] = [
    {
        "id": "view",
        functionName: "View",
        ...controlDateHelper
    },
    {
        "id": "cancel",
        functionName: "Cancel",
        ...controlDateHelper
    },
    {
        "id": "input",
        functionName: "Input",
        ...controlDateHelper
    },
    {
        "id": "amend",
        functionName: "Amend",
        ...controlDateHelper
    },
    {
        "id": "allow_cls",
        functionName: "Allow CLS",
        ...controlDateHelper
    },
    {
        "id": "usgen2ccy",
        functionName: "USGEN2CCY",
        ...controlDateHelper
    },
    {
        "id": "view_template",
        functionName: "View Template",
        ...controlDateHelper
    },
    {
        "id": "create_template",
        functionName: "Create Template",
        ...controlDateHelper
    },
    {
        "id": "visibility",
        functionName: "Visibility",
        ...controlDateHelper
    },
    {
        "id": "approve",
        functionName: "Approve",
        ...controlDateHelper
    },
    {
        "id": "approve_template",
        functionName: "Approve Template",
        ...controlDateHelper
    },
    {
        "id": "file_import",
        functionName: "File Import",
        ...controlDateHelper
    },
    {
        "id": "release",
        functionName: "Release",
        ...controlDateHelper
    },
    {
        "id": "system",
        functionName: "System",
        ...controlDateHelper
    },
    {
        "id": "positions_and_settlement_status",
        functionName: "Positions and Settlement Status",
        ...controlDateHelper
    },
    {
        "id": "reports",
        functionName: "Reports",
        ...controlDateHelper
    },
    {
        "id": "alerts_and_events",
        functionName: "Alerts and Events",
        ...controlDateHelper
    },
    {
        "id": "investigations",
        functionName: "Investigations",
        ...controlDateHelper
    },
    {
        "id": "manage_product_settings",
        functionName: "Manage Product Settings",
        ...controlDateHelper
    },
    {
        "id": "clone",
        functionName: "Clone",
        ...controlDateHelper
    },
    {
        "id": "create",
        functionName: "Create",
        ...controlDateHelper
    },
    {
        "id": "delete",
        functionName: "Delete",
        ...controlDateHelper
    },
    {
        "id": "modify",
        functionName: "Modify",
        ...controlDateHelper
    },
    {
        "id": "run_reports",
        functionName: "Run Reports",
        ...controlDateHelper
    },
    {
        "id": "manage_reports",
        functionName: "Manage Reports",
        ...controlDateHelper
    },
    {
        "id": "view_reports",
        functionName: "View Reports",
        ...controlDateHelper
    },
    {
        "id": "manage_templates",
        functionName: "Manage Templates",
        ...controlDateHelper
    },
    {
        "id": "view_client_location_groups",
        functionName: "View Client Location Groups",
        ...controlDateHelper
    },
    {
        "id": "additional_token_request",
        functionName: "Additional Token Request",
        ...controlDateHelper
    },
    {
        "id": "manage_credentials",
        functionName: "Manage Credentials",
        ...controlDateHelper
    },
    {
        "id": "client_location_groups",
        functionName: "Client Location Groups",
        ...controlDateHelper
    },
    {
        "id": "approve_credentials",
        functionName: "Approve Credentials",
        ...controlDateHelper
    },
    {
        "id": "custody_fund_services",
        functionName: "Custody Fund Services",
        ...controlDateHelper
    },
    {
        "id": "links_online",
        functionName: "Links Online",
        ...controlDateHelper
    },
    {
        "id": "common_services",
        functionName: "Common Services",
        ...controlDateHelper
    },
    {
        "id": "delete_request",
        functionName: "Delete Request",
        ...controlDateHelper
    },
    {
        "id": "view_request",
        functionName: "View Request",
        ...controlDateHelper
    },
    {
        "id": "view_accounts",
        functionName: "View Accounts",
        ...controlDateHelper
    },
    {
        "id": "view_products",
        functionName: "View Products",
        ...controlDateHelper
    },
    {
        "id": "view_client",
        functionName: "View Client",
        ...controlDateHelper
    }
];


export const PRODUCTS: ProductType[] = [
    {
        "id": "tim_foreign_exchange",
        "productName": "TIM - Foreign Exchange",
        "subProduct": null,
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities",
        "productName": "TIM - Listed Securities",
        "subProduct": null,
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities_inter_account_trade_transfer",
        "productName": "TIM - Listed Securities",
        "subProduct": "Inter Account Trade Transfer",
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities_receive_free_of_payment",
        "productName": "TIM - Listed Securities",
        "subProduct": "Receive Free of Payment",
        ...controlDateHelper
    },
    {
        "id": "tim_cash_advice_to_receive",
        "productName": "TIM - Cash",
        "subProduct": "Advice to Receive",
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities_deliver_against_payment",
        "productName": "TIM - Listed Securities",
        "subProduct": "Deliver Against Payment",
        ...controlDateHelper
    },
    {
        "id": "tim_cash_payment_order",
        "productName": "TIM - Cash",
        "subProduct": "Payment Order",
        ...controlDateHelper
    },
    {
        "id": "tim_foreign_exchange_3rd_party_fx",
        "productName": "TIM - Foreign Exchange",
        "subProduct": "3rd Party FX",
        ...controlDateHelper
    },
    {
        "id": "import_manager_and_template_manager",
        "productName": "Import Manager and Template Manager",
        "subProduct": null,
        ...controlDateHelper
    },
    {
        "id": "securities_services_products_views_portfolio_reporting",
        "productName": "Securities Services Products",
        "subProduct": "VIEWS Portfolio Reporting",
        ...controlDateHelper
    },
    {
        "id": "tim_cash",
        "productName": "TIM - Cash",
        "subProduct": null,
        ...controlDateHelper
    },
    {
        "id": "tim_cash_inter_account_transfer",
        "productName": "TIM - Cash",
        "subProduct": "Inter Account Transfer",
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities_deliver_free_of_payment",
        "productName": "TIM - Listed Securities",
        "subProduct": "Deliver Free of Payment",
        ...controlDateHelper
    },
    {
        "id": "tim_listed_securities_receive_against_payment",
        "productName": "TIM - Listed Securities",
        "subProduct": "Receive Against Payment",
        ...controlDateHelper
    },
    {
        "id": "securities_services_products_custody_dashboard",
        "productName": "Securities Services Products",
        "subProduct": "Custody Dashboard",
        ...controlDateHelper
    },
    {
        "id": "securities_services_products",
        "productName": "Securities Services Products",
        "subProduct": null,
        ...controlDateHelper
    },
    {
        "id": "continuous_link_settlement",
        "productName": "Continuous Link Settlement",
        "subProduct": null,
        ...controlDateHelper
    },
    {
        "id": "administration",
        "productName": "Administration",
        "subProduct": null,
        ...controlDateHelper
    },
    {
        "id": "corporate_action_manager",
        "productName": "Corporate Action Manager",
        "subProduct": null,
        ...controlDateHelper
    },
    {
        "id": "corporate_action_manager_corporate_instruction",
        "productName": "Corporate Action Manager",
        "subProduct": "Corporate Instruction",
        ...controlDateHelper
    },
    {
        "id": "corporate_action_manager_instruction_without_event",
        "productName": "Corporate Action Manager",
        "subProduct": "Instruction Without Event",
        ...controlDateHelper
    }
];


export const PROFILES_FUNCTIONS: ProfileFunctionType[] = [
    {
        "profileId": "administrator",
        "id": "administrator_manage_reports",
        "functionId": "manage_reports"
    },
    {
        "profileId": "administrator",
        "id": "administrator_client_location_groups",
        "functionId": "client_location_groups"
    },
    {
        "profileId": "administrator",
        "id": "administrator_create",
        "functionId": "create"
    },
    {
        "profileId": "administrator",
        "id": "administrator_view",
        "functionId": "view"
    },
    {
        "profileId": "administrator",
        "id": "administrator_links_online",
        "functionId": "links_online"
    },
    {
        "profileId": "administrator",
        "id": "administrator_view_client",
        "functionId": "view_client"
    },
    {
        "profileId": "administrator",
        "id": "administrator_manage_templates",
        "functionId": "manage_templates"
    },
    {
        "profileId": "administrator",
        "id": "administrator_visibility",
        "functionId": "visibility"
    },
    {
        "profileId": "administrator",
        "id": "administrator_additional_token_request",
        "functionId": "additional_token_request"
    },
    {
        "profileId": "administrator",
        "id": "administrator_common_services",
        "functionId": "common_services"
    },
    {
        "profileId": "administrator",
        "id": "administrator_custody_fund_services",
        "functionId": "custody_fund_services"
    },
    {
        "profileId": "administrator",
        "id": "administrator_run_reports",
        "functionId": "run_reports"
    },
    {
        "profileId": "administrator",
        "id": "administrator_view_request",
        "functionId": "view_request"
    },
    {
        "profileId": "administrator",
        "id": "administrator_view_accounts",
        "functionId": "view_accounts"
    },
    {
        "profileId": "administrator",
        "id": "administrator_delete",
        "functionId": "delete"
    },
    {
        "profileId": "administrator",
        "id": "administrator_manage_credentials",
        "functionId": "manage_credentials"
    },
    {
        "profileId": "administrator",
        "id": "administrator_approve_credentials",
        "functionId": "approve_credentials"
    },
    {
        "profileId": "administrator",
        "id": "administrator_delete_request",
        "functionId": "delete_request"
    },
    {
        "profileId": "administrator",
        "id": "administrator_manage_product_settings",
        "functionId": "manage_product_settings"
    },
    {
        "profileId": "administrator",
        "id": "administrator_view_client_location_groups",
        "functionId": "view_client_location_groups"
    },
    {
        "profileId": "administrator",
        "id": "administrator_view_reports",
        "functionId": "view_reports"
    },
    {
        "profileId": "administrator",
        "id": "administrator_clone",
        "functionId": "clone"
    },
    {
        "profileId": "administrator",
        "id": "administrator_modify",
        "functionId": "modify"
    },
    {
        "profileId": "administrator",
        "id": "administrator_approve",
        "functionId": "approve"
    },
    {
        "profileId": "administrator",
        "id": "administrator_view_products",
        "functionId": "view_products"
    },
    {
        "profileId": "authorization",
        "id": "authorization_visibility",
        "functionId": "visibility"
    },
    {
        "profileId": "authorization",
        "id": "authorization_view",
        "functionId": "view"
    },
    {
        "profileId": "authorization",
        "id": "authorization_release",
        "functionId": "release"
    },
    {
        "profileId": "authorization",
        "id": "authorization_usgen2ccy",
        "functionId": "usgen2ccy"
    },
    {
        "profileId": "authorization",
        "id": "authorization_allow_cls",
        "functionId": "allow_cls"
    },
    {
        "profileId": "authorization",
        "id": "authorization_file_import",
        "functionId": "file_import"
    },
    {
        "profileId": "capture",
        "id": "capture_cancel",
        "functionId": "cancel"
    },
    {
        "profileId": "capture",
        "id": "capture_visibility",
        "functionId": "visibility"
    },
    {
        "profileId": "capture",
        "id": "capture_create_template",
        "functionId": "create_template"
    },
    {
        "profileId": "capture",
        "id": "capture_amend",
        "functionId": "amend"
    },
    {
        "profileId": "capture",
        "id": "capture_view",
        "functionId": "view"
    },
    {
        "profileId": "capture",
        "id": "capture_input",
        "functionId": "input"
    },
    {
        "profileId": "capture",
        "id": "capture_usgen2ccy",
        "functionId": "usgen2ccy"
    },
    {
        "profileId": "capture",
        "id": "capture_allow_cls",
        "functionId": "allow_cls"
    },
    {
        "profileId": "capture",
        "id": "capture_view_template",
        "functionId": "view_template"
    },
    {
        "profileId": "verification",
        "id": "verification_approve",
        "functionId": "approve"
    },
    {
        "profileId": "verification",
        "id": "verification_allow_cls",
        "functionId": "allow_cls"
    },
    {
        "profileId": "verification",
        "id": "verification_view",
        "functionId": "view"
    },
    {
        "profileId": "verification",
        "id": "verification_file_import",
        "functionId": "file_import"
    },
    {
        "profileId": "verification",
        "id": "verification_usgen2ccy",
        "functionId": "usgen2ccy"
    },
    {
        "profileId": "verification",
        "id": "verification_approve_template",
        "functionId": "approve_template"
    },
    {
        "profileId": "verification",
        "id": "verification_visibility",
        "functionId": "visibility"
    },
    {
        "profileId": "verification",
        "id": "verification_view_template",
        "functionId": "view_template"
    },
    {
        "profileId": "viewer",
        "id": "viewer_positions_and_settlement_status",
        "functionId": "positions_and_settlement_status"
    },
    {
        "profileId": "viewer",
        "id": "viewer_investigations",
        "functionId": "investigations"
    },
    {
        "profileId": "viewer",
        "id": "viewer_system",
        "functionId": "system"
    },
    {
        "profileId": "viewer",
        "id": "viewer_visibility",
        "functionId": "visibility"
    },
    {
        "profileId": "viewer",
        "id": "viewer_alerts_and_events",
        "functionId": "alerts_and_events"
    },
    {
        "profileId": "viewer",
        "id": "viewer_reports",
        "functionId": "reports"
    }
];


export const PROFILES: ProfileType[] = [
    {
        "id": "capture",
        "profileName": "Capture",
        "createdAt": new Date(),
        "updatedAt": new Date()
    },
    {
        "id": "verification",
        "profileName": "Verification",
        "createdAt": new Date(),
        "updatedAt": new Date()
    },
    {
        "id": "authorization",
        "profileName": "Authorization",
        "createdAt": new Date(),
        "updatedAt": new Date()
    },
    {
        "id": "administrator",
        "profileName": "Administrador",
        "createdAt": new Date(),
        "updatedAt": new Date()
    },
    {
        "id": "viewer",
        "profileName": "Viewer",
        "createdAt": new Date(),
        "updatedAt": new Date()
    }
];


export const USER_ENTITLEMENTS: UserEntitlementType[] = [
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_p_35946_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_p_46407_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_s_17006_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_82783_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_epr68_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_p_92590_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_s_97871_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_p_88529_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_p_46408_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_emh26_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_05421_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_emh27_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_eid10_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_fda63_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_p_79897_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "adiazcortes_aif62_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_p_35946_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_p_46407_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_82783_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_s_17006_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_epr68_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_p_92590_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_s_97871_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_p_88529_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_p_46408_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_emh26_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_emh27_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_05421_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_eid10_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_p_79897_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_fda63_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "adiazcortes_aif62_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "cancel",
        "id": "adiazcortes__tim_listed_securities_inter_account_trade_transfer_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "input",
        "id": "adiazcortes__tim_listed_securities_inter_account_trade_transfer_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "amend",
        "id": "adiazcortes__tim_listed_securities_inter_account_trade_transfer_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "cancel",
        "id": "adiazcortes__tim_listed_securities_receive_free_of_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "input",
        "id": "adiazcortes__tim_listed_securities_receive_free_of_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "amend",
        "id": "adiazcortes__tim_listed_securities_receive_free_of_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "cancel",
        "id": "adiazcortes__tim_cash_advice_to_receive_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "input",
        "id": "adiazcortes__tim_cash_advice_to_receive_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "cancel",
        "id": "adiazcortes__tim_listed_securities_deliver_against_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "input",
        "id": "adiazcortes__tim_listed_securities_deliver_against_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "amend",
        "id": "adiazcortes__tim_listed_securities_deliver_against_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_cash_payment_order",
        "functionId": "cancel",
        "id": "adiazcortes__tim_cash_payment_order_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_cash_payment_order",
        "functionId": "input",
        "id": "adiazcortes__tim_cash_payment_order_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "cancel",
        "id": "adiazcortes__tim_foreign_exchange_3rd_party_fx_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "input",
        "id": "adiazcortes__tim_foreign_exchange_3rd_party_fx_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "allow_cls",
        "id": "adiazcortes__tim_foreign_exchange_3rd_party_fx_allow_cls_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "amend",
        "id": "adiazcortes__tim_foreign_exchange_3rd_party_fx_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "import_manager_and_template_manager",
        "functionId": "usgen2ccy",
        "id": "adiazcortes__import_manager_and_template_manager_usgen2ccy_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "import_manager_and_template_manager",
        "functionId": "view_template",
        "id": "adiazcortes__import_manager_and_template_manager_view_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "import_manager_and_template_manager",
        "functionId": "create_template",
        "id": "adiazcortes__import_manager_and_template_manager_create_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "adiazcortes__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_p_35946_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_p_46407_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_82783_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_s_17006_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_epr68_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_s_97871_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_p_92590_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_p_88529_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_p_46408_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_emh26_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_emh27_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_05421_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_eid10_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_p_79897_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_fda63_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "adiazcortes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "adiazcortes_aif62_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "cancel",
        "id": "adiazcortes__tim_cash_inter_account_transfer_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "input",
        "id": "adiazcortes__tim_cash_inter_account_transfer_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "cancel",
        "id": "adiazcortes__tim_listed_securities_deliver_free_of_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "input",
        "id": "adiazcortes__tim_listed_securities_deliver_free_of_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "amend",
        "id": "adiazcortes__tim_listed_securities_deliver_free_of_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "cancel",
        "id": "adiazcortes__tim_listed_securities_receive_against_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "input",
        "id": "adiazcortes__tim_listed_securities_receive_against_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "amend",
        "id": "adiazcortes__tim_listed_securities_receive_against_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "adiazcortes__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "adiazcortes",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "adiazcortes__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "amachete",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "amachete__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "amachete",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "amachete__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "amachete",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "amachete__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_p_35946_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_p_46407_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_s_17006_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_82783_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_epr68_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_s_97871_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_p_92590_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_p_88529_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_p_46408_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_emh26_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_05421_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_emh27_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_eid10_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_p_79897_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_fda63_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "carlespinosa_aif62_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_p_35946_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_p_46407_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_s_17006_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_82783_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_epr68_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_p_92590_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_s_97871_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_p_88529_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_p_46408_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_emh26_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_05421_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_emh27_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_eid10_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_p_79897_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_fda63_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "carlespinosa_aif62_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "approve",
        "id": "carlespinosa__tim_listed_securities_inter_account_trade_transfer_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "approve",
        "id": "carlespinosa__tim_listed_securities_receive_free_of_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "approve",
        "id": "carlespinosa__tim_cash_advice_to_receive_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "approve",
        "id": "carlespinosa__tim_listed_securities_deliver_against_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "tim_cash_payment_order",
        "functionId": "approve",
        "id": "carlespinosa__tim_cash_payment_order_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "approve",
        "id": "carlespinosa__tim_foreign_exchange_3rd_party_fx_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "allow_cls",
        "id": "carlespinosa__tim_foreign_exchange_3rd_party_fx_allow_cls_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "import_manager_and_template_manager",
        "functionId": "approve_template",
        "id": "carlespinosa__import_manager_and_template_manager_approve_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "import_manager_and_template_manager",
        "functionId": "usgen2ccy",
        "id": "carlespinosa__import_manager_and_template_manager_usgen2ccy_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "import_manager_and_template_manager",
        "functionId": "file_import",
        "id": "carlespinosa__import_manager_and_template_manager_file_import_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "import_manager_and_template_manager",
        "functionId": "view_template",
        "id": "carlespinosa__import_manager_and_template_manager_view_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "carlespinosa__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_p_35946_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_p_46407_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_82783_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_s_17006_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_epr68_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_s_97871_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_p_92590_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_p_88529_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_p_46408_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_emh26_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_emh27_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_05421_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_eid10_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_p_79897_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_fda63_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "carlespinosa",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "carlespinosa_aif62_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "approve",
        "id": "carlespinosa__tim_cash_inter_account_transfer_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "approve",
        "id": "carlespinosa__tim_listed_securities_deliver_free_of_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "approve",
        "id": "carlespinosa__tim_listed_securities_receive_against_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "carlespinosa__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "carlespinosa",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "carlespinosa__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "cecanon",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "cecanon__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "cecanon",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "cecanon__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "cecanon",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "cecanon__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_p_46407_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_s_17006_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_82783_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_epr68_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_s_97871_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_p_92590_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_p_88529_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_p_46408_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_emh26_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_emh27_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_05421_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_eid10_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_fda63_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "claudiamartin_p_79897_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_p_46407_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_82783_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_s_17006_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_epr68_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_s_97871_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_p_92590_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_p_88529_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_p_46408_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_emh26_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_emh27_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_05421_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_eid10_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_p_79897_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "claudiamartin_fda63_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "release",
        "id": "claudiamartin__tim_listed_securities_inter_account_trade_transfer_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "release",
        "id": "claudiamartin__tim_listed_securities_receive_free_of_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "release",
        "id": "claudiamartin__tim_cash_advice_to_receive_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "release",
        "id": "claudiamartin__tim_listed_securities_deliver_against_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "tim_cash_payment_order",
        "functionId": "release",
        "id": "claudiamartin__tim_cash_payment_order_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "release",
        "id": "claudiamartin__tim_foreign_exchange_3rd_party_fx_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "allow_cls",
        "id": "claudiamartin__tim_foreign_exchange_3rd_party_fx_allow_cls_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "import_manager_and_template_manager",
        "functionId": "",
        "id": "claudiamartin__import_manager_and_template_manager__",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "claudiamartin__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_p_46407_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_s_17006_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_82783_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_epr68_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_p_92590_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_s_97871_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_p_88529_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_p_46408_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_emh26_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_emh27_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_05421_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_eid10_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_fda63_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "claudiamartin",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "claudiamartin_p_79897_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "release",
        "id": "claudiamartin__tim_cash_inter_account_transfer_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "release",
        "id": "claudiamartin__tim_listed_securities_deliver_free_of_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "release",
        "id": "claudiamartin__tim_listed_securities_receive_against_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "claudiamartin__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "claudiamartin",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "claudiamartin__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "glperalta",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "glperalta__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "Continuous Links Settlement",
        "accountNumber": "",
        "accessId": "glperalta",
        "productId": "continuous_link_settlement",
        "functionId": "system",
        "id": "glperalta__continuous_link_settlement_system_continuous_links_settlement",
        ...controlDateHelper
    },
    {
        "functionType": "Continuous Links Settlement",
        "accountNumber": "",
        "accessId": "glperalta",
        "productId": "continuous_link_settlement",
        "functionId": "positions_and_settlement_status",
        "id": "glperalta__continuous_link_settlement_positions_and_settlement_status_continuous_links_settlement",
        ...controlDateHelper
    },
    {
        "functionType": "Continuous Links Settlement",
        "accountNumber": "",
        "accessId": "glperalta",
        "productId": "continuous_link_settlement",
        "functionId": "reports",
        "id": "glperalta__continuous_link_settlement_reports_continuous_links_settlement",
        ...controlDateHelper
    },
    {
        "functionType": "Continuous Links Settlement",
        "accountNumber": "",
        "accessId": "glperalta",
        "productId": "continuous_link_settlement",
        "functionId": "alerts_and_events",
        "id": "glperalta__continuous_link_settlement_alerts_and_events_continuous_links_settlement",
        ...controlDateHelper
    },
    {
        "functionType": "Continuous Links Settlement",
        "accountNumber": "",
        "accessId": "glperalta",
        "productId": "continuous_link_settlement",
        "functionId": "investigations",
        "id": "glperalta__continuous_link_settlement_investigations_continuous_links_settlement",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "glperalta",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "glperalta__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "glperalta",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "glperalta__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_p_35946_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_p_46407_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_82783_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_s_17006_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_epr68_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_s_97871_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_p_92590_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_p_88529_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_p_46408_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_emh26_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_emh27_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_05421_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_eid10_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_fda63_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_p_79897_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "jackbohn8002_aif62_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_p_35946_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_p_46407_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_s_17006_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_82783_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_epr68_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_p_92590_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_s_97871_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_p_88529_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_p_46408_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_emh26_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_emh27_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_05421_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_eid10_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_p_79897_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_fda63_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "jackbohn8002_aif62_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "approve",
        "id": "jackbohn8002__tim_listed_securities_inter_account_trade_transfer_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "approve",
        "id": "jackbohn8002__tim_listed_securities_receive_free_of_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "approve",
        "id": "jackbohn8002__tim_cash_advice_to_receive_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "approve",
        "id": "jackbohn8002__tim_listed_securities_deliver_against_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "tim_cash_payment_order",
        "functionId": "approve",
        "id": "jackbohn8002__tim_cash_payment_order_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "approve",
        "id": "jackbohn8002__tim_foreign_exchange_3rd_party_fx_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "allow_cls",
        "id": "jackbohn8002__tim_foreign_exchange_3rd_party_fx_allow_cls_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "import_manager_and_template_manager",
        "functionId": "approve_template",
        "id": "jackbohn8002__import_manager_and_template_manager_approve_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "import_manager_and_template_manager",
        "functionId": "usgen2ccy",
        "id": "jackbohn8002__import_manager_and_template_manager_usgen2ccy_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "import_manager_and_template_manager",
        "functionId": "file_import",
        "id": "jackbohn8002__import_manager_and_template_manager_file_import_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "import_manager_and_template_manager",
        "functionId": "view_template",
        "id": "jackbohn8002__import_manager_and_template_manager_view_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "jackbohn8002__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_p_35946_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_p_46407_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_s_17006_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_82783_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_epr68_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_s_97871_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_p_92590_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_p_88529_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_p_46408_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_emh26_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_emh27_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_05421_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_eid10_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_p_79897_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_fda63_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "jackbohn8002",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "jackbohn8002_aif62_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "approve",
        "id": "jackbohn8002__tim_cash_inter_account_transfer_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "approve",
        "id": "jackbohn8002__tim_listed_securities_deliver_free_of_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "approve",
        "id": "jackbohn8002__tim_listed_securities_receive_against_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "jackbohn8002__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "jackbohn8002",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "jackbohn8002__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "manage_product_settings",
        "id": "jammoreno__administration_manage_product_settings_",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "clone",
        "id": "jammoreno__administration_clone_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "create",
        "id": "jammoreno__administration_create_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "approve",
        "id": "jammoreno__administration_approve_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "view",
        "id": "jammoreno__administration_view_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "delete",
        "id": "jammoreno__administration_delete_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "modify",
        "id": "jammoreno__administration_modify_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "run_reports",
        "id": "jammoreno__administration_run_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "manage_reports",
        "id": "jammoreno__administration_manage_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "view_reports",
        "id": "jammoreno__administration_view_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "manage_templates",
        "id": "jammoreno__administration_manage_templates_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "view_client_location_groups",
        "id": "jammoreno__administration_view_client_location_groups_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "additional_token_request",
        "id": "jammoreno__administration_additional_token_request_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "manage_credentials",
        "id": "jammoreno__administration_manage_credentials_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "client_location_groups",
        "id": "jammoreno__administration_client_location_groups_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "approve_credentials",
        "id": "jammoreno__administration_approve_credentials_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "custody_fund_services",
        "id": "jammoreno__administration_custody_fund_services_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "links_online",
        "id": "jammoreno__administration_links_online_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "common_services",
        "id": "jammoreno__administration_common_services_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Requests",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "delete_request",
        "id": "jammoreno__administration_delete_request_manage_requests",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Requests",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "view_request",
        "id": "jammoreno__administration_view_request_manage_requests",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "delete",
        "id": "jammoreno__administration_delete_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "view",
        "id": "jammoreno__administration_view_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "modify",
        "id": "jammoreno__administration_modify_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "clone",
        "id": "jammoreno__administration_clone_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "create",
        "id": "jammoreno__administration_create_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "approve",
        "id": "jammoreno__administration_approve_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "view_accounts",
        "id": "jammoreno__administration_view_accounts_other",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "view_products",
        "id": "jammoreno__administration_view_products_other",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "jammoreno",
        "productId": "administration",
        "functionId": "view_client",
        "id": "jammoreno__administration_view_client_other",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "manage_product_settings",
        "id": "jsandovalfernandez__administration_manage_product_settings_",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "clone",
        "id": "jsandovalfernandez__administration_clone_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "create",
        "id": "jsandovalfernandez__administration_create_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "approve",
        "id": "jsandovalfernandez__administration_approve_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "view",
        "id": "jsandovalfernandez__administration_view_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "delete",
        "id": "jsandovalfernandez__administration_delete_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "modify",
        "id": "jsandovalfernandez__administration_modify_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "run_reports",
        "id": "jsandovalfernandez__administration_run_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "manage_reports",
        "id": "jsandovalfernandez__administration_manage_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "view_reports",
        "id": "jsandovalfernandez__administration_view_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "manage_templates",
        "id": "jsandovalfernandez__administration_manage_templates_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "view_client_location_groups",
        "id": "jsandovalfernandez__administration_view_client_location_groups_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "additional_token_request",
        "id": "jsandovalfernandez__administration_additional_token_request_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "manage_credentials",
        "id": "jsandovalfernandez__administration_manage_credentials_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "client_location_groups",
        "id": "jsandovalfernandez__administration_client_location_groups_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "approve_credentials",
        "id": "jsandovalfernandez__administration_approve_credentials_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "custody_fund_services",
        "id": "jsandovalfernandez__administration_custody_fund_services_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "links_online",
        "id": "jsandovalfernandez__administration_links_online_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "common_services",
        "id": "jsandovalfernandez__administration_common_services_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Requests",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "delete_request",
        "id": "jsandovalfernandez__administration_delete_request_manage_requests",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Requests",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "view_request",
        "id": "jsandovalfernandez__administration_view_request_manage_requests",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "delete",
        "id": "jsandovalfernandez__administration_delete_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "view",
        "id": "jsandovalfernandez__administration_view_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "modify",
        "id": "jsandovalfernandez__administration_modify_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "clone",
        "id": "jsandovalfernandez__administration_clone_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "create",
        "id": "jsandovalfernandez__administration_create_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "approve",
        "id": "jsandovalfernandez__administration_approve_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "view_accounts",
        "id": "jsandovalfernandez__administration_view_accounts_other",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "view_products",
        "id": "jsandovalfernandez__administration_view_products_other",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "jsandovalfernandez",
        "productId": "administration",
        "functionId": "view_client",
        "id": "jsandovalfernandez__administration_view_client_other",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "juandiaz1980",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "juandiaz1980__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "juandiaz1980",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "juandiaz1980__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "juandiaz1980",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "juandiaz1980__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_p_35946_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_p_46407_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_s_17006_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_82783_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_epr68_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_p_92590_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_s_97871_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_p_88529_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_p_46408_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_emh26_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_emh27_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_05421_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_eid10_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_fda63_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_p_79897_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "juangutierrez0496_aif62_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_p_35946_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_p_46407_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_s_17006_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_82783_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_epr68_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_s_97871_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_p_92590_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_p_88529_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_p_46408_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_emh26_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_05421_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_emh27_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_eid10_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_p_79897_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_fda63_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "juangutierrez0496_aif62_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "cancel",
        "id": "juangutierrez0496__tim_listed_securities_inter_account_trade_transfer_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "input",
        "id": "juangutierrez0496__tim_listed_securities_inter_account_trade_transfer_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "amend",
        "id": "juangutierrez0496__tim_listed_securities_inter_account_trade_transfer_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "cancel",
        "id": "juangutierrez0496__tim_listed_securities_receive_free_of_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "input",
        "id": "juangutierrez0496__tim_listed_securities_receive_free_of_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "amend",
        "id": "juangutierrez0496__tim_listed_securities_receive_free_of_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "cancel",
        "id": "juangutierrez0496__tim_cash_advice_to_receive_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "input",
        "id": "juangutierrez0496__tim_cash_advice_to_receive_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "cancel",
        "id": "juangutierrez0496__tim_listed_securities_deliver_against_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "input",
        "id": "juangutierrez0496__tim_listed_securities_deliver_against_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "amend",
        "id": "juangutierrez0496__tim_listed_securities_deliver_against_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash_payment_order",
        "functionId": "cancel",
        "id": "juangutierrez0496__tim_cash_payment_order_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash_payment_order",
        "functionId": "input",
        "id": "juangutierrez0496__tim_cash_payment_order_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "cancel",
        "id": "juangutierrez0496__tim_foreign_exchange_3rd_party_fx_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "input",
        "id": "juangutierrez0496__tim_foreign_exchange_3rd_party_fx_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "allow_cls",
        "id": "juangutierrez0496__tim_foreign_exchange_3rd_party_fx_allow_cls_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "amend",
        "id": "juangutierrez0496__tim_foreign_exchange_3rd_party_fx_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "import_manager_and_template_manager",
        "functionId": "usgen2ccy",
        "id": "juangutierrez0496__import_manager_and_template_manager_usgen2ccy_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "import_manager_and_template_manager",
        "functionId": "view_template",
        "id": "juangutierrez0496__import_manager_and_template_manager_view_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "import_manager_and_template_manager",
        "functionId": "create_template",
        "id": "juangutierrez0496__import_manager_and_template_manager_create_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "juangutierrez0496__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_p_35946_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_p_46407_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_s_17006_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_82783_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_epr68_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_p_92590_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_s_97871_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_p_88529_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_p_46408_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_emh26_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_emh27_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_05421_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_eid10_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_fda63_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_p_79897_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "juangutierrez0496_aif62_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "cancel",
        "id": "juangutierrez0496__tim_cash_inter_account_transfer_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "input",
        "id": "juangutierrez0496__tim_cash_inter_account_transfer_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "cancel",
        "id": "juangutierrez0496__tim_listed_securities_deliver_free_of_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "input",
        "id": "juangutierrez0496__tim_listed_securities_deliver_free_of_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "amend",
        "id": "juangutierrez0496__tim_listed_securities_deliver_free_of_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "cancel",
        "id": "juangutierrez0496__tim_listed_securities_receive_against_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "input",
        "id": "juangutierrez0496__tim_listed_securities_receive_against_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "amend",
        "id": "juangutierrez0496__tim_listed_securities_receive_against_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "juangutierrez0496__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "juangutierrez0496",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "juangutierrez0496__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "manage_product_settings",
        "id": "julioalvarez1052__administration_manage_product_settings_",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "clone",
        "id": "julioalvarez1052__administration_clone_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "create",
        "id": "julioalvarez1052__administration_create_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "approve",
        "id": "julioalvarez1052__administration_approve_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "view",
        "id": "julioalvarez1052__administration_view_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "delete",
        "id": "julioalvarez1052__administration_delete_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "modify",
        "id": "julioalvarez1052__administration_modify_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "run_reports",
        "id": "julioalvarez1052__administration_run_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "manage_reports",
        "id": "julioalvarez1052__administration_manage_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "view_reports",
        "id": "julioalvarez1052__administration_view_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "manage_templates",
        "id": "julioalvarez1052__administration_manage_templates_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "view_client_location_groups",
        "id": "julioalvarez1052__administration_view_client_location_groups_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "additional_token_request",
        "id": "julioalvarez1052__administration_additional_token_request_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "manage_credentials",
        "id": "julioalvarez1052__administration_manage_credentials_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "client_location_groups",
        "id": "julioalvarez1052__administration_client_location_groups_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "approve_credentials",
        "id": "julioalvarez1052__administration_approve_credentials_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "custody_fund_services",
        "id": "julioalvarez1052__administration_custody_fund_services_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "links_online",
        "id": "julioalvarez1052__administration_links_online_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "common_services",
        "id": "julioalvarez1052__administration_common_services_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Requests",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "delete_request",
        "id": "julioalvarez1052__administration_delete_request_manage_requests",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Requests",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "view_request",
        "id": "julioalvarez1052__administration_view_request_manage_requests",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "delete",
        "id": "julioalvarez1052__administration_delete_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "view",
        "id": "julioalvarez1052__administration_view_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "modify",
        "id": "julioalvarez1052__administration_modify_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "clone",
        "id": "julioalvarez1052__administration_clone_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "create",
        "id": "julioalvarez1052__administration_create_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "approve",
        "id": "julioalvarez1052__administration_approve_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "view_accounts",
        "id": "julioalvarez1052__administration_view_accounts_other",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "view_products",
        "id": "julioalvarez1052__administration_view_products_other",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "julioalvarez1052",
        "productId": "administration",
        "functionId": "view_client",
        "id": "julioalvarez1052__administration_view_client_other",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_p_35946_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_p_46407_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_82783_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_s_17006_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_epr68_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_s_97871_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_p_92590_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_p_88529_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_p_46408_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_emh26_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_emh27_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_05421_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_eid10_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_p_79897_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_fda63_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lacifuentes_aif62_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_p_35946_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_p_46407_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_s_17006_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_82783_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_epr68_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_s_97871_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_p_92590_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_p_88529_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_p_46408_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_emh26_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_emh27_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_05421_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_eid10_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_fda63_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_p_79897_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lacifuentes_aif62_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "release",
        "id": "lacifuentes__tim_listed_securities_inter_account_trade_transfer_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "release",
        "id": "lacifuentes__tim_listed_securities_receive_free_of_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "release",
        "id": "lacifuentes__tim_cash_advice_to_receive_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "release",
        "id": "lacifuentes__tim_listed_securities_deliver_against_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "tim_cash_payment_order",
        "functionId": "release",
        "id": "lacifuentes__tim_cash_payment_order_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "release",
        "id": "lacifuentes__tim_foreign_exchange_3rd_party_fx_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "allow_cls",
        "id": "lacifuentes__tim_foreign_exchange_3rd_party_fx_allow_cls_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "import_manager_and_template_manager",
        "functionId": "usgen2ccy",
        "id": "lacifuentes__import_manager_and_template_manager_usgen2ccy_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "import_manager_and_template_manager",
        "functionId": "file_import",
        "id": "lacifuentes__import_manager_and_template_manager_file_import_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "lacifuentes__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_p_35946_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_p_46407_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_s_17006_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_82783_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_epr68_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_s_97871_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_p_92590_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_p_88529_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_p_46408_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_emh26_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_05421_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_emh27_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_eid10_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_fda63_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_p_79897_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "lacifuentes",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lacifuentes_aif62_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "release",
        "id": "lacifuentes__tim_cash_inter_account_transfer_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "release",
        "id": "lacifuentes__tim_listed_securities_deliver_free_of_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "release",
        "id": "lacifuentes__tim_listed_securities_receive_against_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "lacifuentes__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "lacifuentes",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "lacifuentes__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_p_35946_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_p_46407_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_82783_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_s_17006_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_epr68_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_p_92590_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_s_97871_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_p_88529_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_p_46408_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_emh26_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_05421_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_emh27_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_eid10_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_p_79897_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_fda63_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "larincon_aif62_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_p_35946_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_p_46407_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_82783_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_s_17006_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_epr68_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_p_92590_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_s_97871_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_p_88529_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_p_46408_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_emh26_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_emh27_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_05421_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_eid10_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_p_79897_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_fda63_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "larincon",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "larincon_aif62_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "approve",
        "id": "larincon__tim_listed_securities_inter_account_trade_transfer_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "approve",
        "id": "larincon__tim_listed_securities_receive_free_of_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "approve",
        "id": "larincon__tim_cash_advice_to_receive_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "approve",
        "id": "larincon__tim_listed_securities_deliver_against_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "tim_cash_payment_order",
        "functionId": "approve",
        "id": "larincon__tim_cash_payment_order_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "approve",
        "id": "larincon__tim_foreign_exchange_3rd_party_fx_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "allow_cls",
        "id": "larincon__tim_foreign_exchange_3rd_party_fx_allow_cls_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "import_manager_and_template_manager",
        "functionId": "approve_template",
        "id": "larincon__import_manager_and_template_manager_approve_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "import_manager_and_template_manager",
        "functionId": "usgen2ccy",
        "id": "larincon__import_manager_and_template_manager_usgen2ccy_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "import_manager_and_template_manager",
        "functionId": "file_import",
        "id": "larincon__import_manager_and_template_manager_file_import_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "import_manager_and_template_manager",
        "functionId": "view_template",
        "id": "larincon__import_manager_and_template_manager_view_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "larincon__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_p_35946_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_p_46407_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_82783_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_s_17006_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_epr68_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_s_97871_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_p_92590_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_p_88529_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_p_46408_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_emh26_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_emh27_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_05421_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_eid10_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_fda63_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_p_79897_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "larincon",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "larincon_aif62_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "approve",
        "id": "larincon__tim_cash_inter_account_transfer_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "approve",
        "id": "larincon__tim_listed_securities_deliver_free_of_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "approve",
        "id": "larincon__tim_listed_securities_receive_against_payment_approve_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "larincon__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "larincon",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "larincon__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_35946_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_46407_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_82783_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_s_17006_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_epr68_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_s_97871_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_92590_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_88529_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_46408_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_emh26_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_emh27_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_05421_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_eid10_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_fda63_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_79897_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "lorenagutierrez0120_aif62_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_35946_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_46407_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_82783_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_s_17006_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_epr68_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_s_97871_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_92590_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_88529_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_46408_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_emh26_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_emh27_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_05421_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_eid10_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_79897_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_fda63_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "lorenagutierrez0120_aif62_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "cancel",
        "id": "lorenagutierrez0120__tim_listed_securities_inter_account_trade_transfer_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "input",
        "id": "lorenagutierrez0120__tim_listed_securities_inter_account_trade_transfer_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "amend",
        "id": "lorenagutierrez0120__tim_listed_securities_inter_account_trade_transfer_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "cancel",
        "id": "lorenagutierrez0120__tim_listed_securities_receive_free_of_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "input",
        "id": "lorenagutierrez0120__tim_listed_securities_receive_free_of_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "amend",
        "id": "lorenagutierrez0120__tim_listed_securities_receive_free_of_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "cancel",
        "id": "lorenagutierrez0120__tim_cash_advice_to_receive_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "input",
        "id": "lorenagutierrez0120__tim_cash_advice_to_receive_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "cancel",
        "id": "lorenagutierrez0120__tim_listed_securities_deliver_against_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "input",
        "id": "lorenagutierrez0120__tim_listed_securities_deliver_against_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "amend",
        "id": "lorenagutierrez0120__tim_listed_securities_deliver_against_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash_payment_order",
        "functionId": "cancel",
        "id": "lorenagutierrez0120__tim_cash_payment_order_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash_payment_order",
        "functionId": "input",
        "id": "lorenagutierrez0120__tim_cash_payment_order_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "cancel",
        "id": "lorenagutierrez0120__tim_foreign_exchange_3rd_party_fx_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "input",
        "id": "lorenagutierrez0120__tim_foreign_exchange_3rd_party_fx_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "allow_cls",
        "id": "lorenagutierrez0120__tim_foreign_exchange_3rd_party_fx_allow_cls_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "amend",
        "id": "lorenagutierrez0120__tim_foreign_exchange_3rd_party_fx_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "import_manager_and_template_manager",
        "functionId": "usgen2ccy",
        "id": "lorenagutierrez0120__import_manager_and_template_manager_usgen2ccy_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "import_manager_and_template_manager",
        "functionId": "view_template",
        "id": "lorenagutierrez0120__import_manager_and_template_manager_view_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "import_manager_and_template_manager",
        "functionId": "create_template",
        "id": "lorenagutierrez0120__import_manager_and_template_manager_create_template_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "lorenagutierrez0120__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_35946_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_46407_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_s_17006_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_82783_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_epr68_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_s_97871_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_92590_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_88529_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_46408_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_emh26_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_05421_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_emh27_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_eid10_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_p_79897_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_fda63_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "lorenagutierrez0120_aif62_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "cancel",
        "id": "lorenagutierrez0120__tim_cash_inter_account_transfer_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "input",
        "id": "lorenagutierrez0120__tim_cash_inter_account_transfer_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "cancel",
        "id": "lorenagutierrez0120__tim_listed_securities_deliver_free_of_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "input",
        "id": "lorenagutierrez0120__tim_listed_securities_deliver_free_of_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "amend",
        "id": "lorenagutierrez0120__tim_listed_securities_deliver_free_of_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "cancel",
        "id": "lorenagutierrez0120__tim_listed_securities_receive_against_payment_cancel_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "input",
        "id": "lorenagutierrez0120__tim_listed_securities_receive_against_payment_input_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "amend",
        "id": "lorenagutierrez0120__tim_listed_securities_receive_against_payment_amend_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "lorenagutierrez0120__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "lorenagutierrez0120",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "lorenagutierrez0120__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "martbarreto",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "martbarreto__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "martbarreto",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "martbarreto__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "martbarreto",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "martbarreto__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_p_46407_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_s_17006_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_82783_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_epr68_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_p_92590_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_s_97871_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_p_88529_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_p_46408_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_emh26_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_emh27_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_05421_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_eid10_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_p_79897_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange",
        "functionId": "view",
        "id": "nathalortiz_fda63_tim_foreign_exchange_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_p_35946_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_p_46407_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_s_17006_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_82783_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_epr68_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_p_92590_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_s_97871_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_p_88529_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_p_46408_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_emh26_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_05421_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_emh27_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_eid10_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_fda63_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_p_79897_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities",
        "functionId": "view",
        "id": "nathalortiz_aif62_tim_listed_securities_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities_inter_account_trade_transfer",
        "functionId": "release",
        "id": "nathalortiz__tim_listed_securities_inter_account_trade_transfer_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities_receive_free_of_payment",
        "functionId": "release",
        "id": "nathalortiz__tim_listed_securities_receive_free_of_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "tim_cash_advice_to_receive",
        "functionId": "release",
        "id": "nathalortiz__tim_cash_advice_to_receive_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities_deliver_against_payment",
        "functionId": "release",
        "id": "nathalortiz__tim_listed_securities_deliver_against_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "tim_cash_payment_order",
        "functionId": "release",
        "id": "nathalortiz__tim_cash_payment_order_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "release",
        "id": "nathalortiz__tim_foreign_exchange_3rd_party_fx_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "tim_foreign_exchange_3rd_party_fx",
        "functionId": "allow_cls",
        "id": "nathalortiz__tim_foreign_exchange_3rd_party_fx_allow_cls_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "import_manager_and_template_manager",
        "functionId": "",
        "id": "nathalortiz__import_manager_and_template_manager__",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "nathalortiz__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 35946",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_p_35946_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46407",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_p_46407_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "82783",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_82783_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 17006",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_s_17006_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EPR68",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_epr68_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "S 97871",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_s_97871_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 92590",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_p_92590_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 88529",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_p_88529_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 46408",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_p_46408_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH26",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_emh26_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EMH27",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_emh27_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "05421",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_05421_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "EID10",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_eid10_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "FDA63",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_fda63_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "P 79897",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_p_79897_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "AIF62",
        "accessId": "nathalortiz",
        "productId": "tim_cash",
        "functionId": "view",
        "id": "nathalortiz_aif62_tim_cash_view_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "tim_cash_inter_account_transfer",
        "functionId": "release",
        "id": "nathalortiz__tim_cash_inter_account_transfer_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities_deliver_free_of_payment",
        "functionId": "release",
        "id": "nathalortiz__tim_listed_securities_deliver_free_of_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "TIM - Transaction Intiation Manager",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "tim_listed_securities_receive_against_payment",
        "functionId": "release",
        "id": "nathalortiz__tim_listed_securities_receive_against_payment_release_tim_transaction_intiation_manager",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "nathalortiz__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "nathalortiz",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "nathalortiz__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "vibenavides__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "manage_product_settings",
        "id": "vibenavides__administration_manage_product_settings_",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "clone",
        "id": "vibenavides__administration_clone_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "create",
        "id": "vibenavides__administration_create_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "approve",
        "id": "vibenavides__administration_approve_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "view",
        "id": "vibenavides__administration_view_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "delete",
        "id": "vibenavides__administration_delete_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "modify",
        "id": "vibenavides__administration_modify_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "run_reports",
        "id": "vibenavides__administration_run_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "manage_reports",
        "id": "vibenavides__administration_manage_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "view_reports",
        "id": "vibenavides__administration_view_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "manage_templates",
        "id": "vibenavides__administration_manage_templates_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "view_client_location_groups",
        "id": "vibenavides__administration_view_client_location_groups_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "additional_token_request",
        "id": "vibenavides__administration_additional_token_request_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "manage_credentials",
        "id": "vibenavides__administration_manage_credentials_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "client_location_groups",
        "id": "vibenavides__administration_client_location_groups_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "approve_credentials",
        "id": "vibenavides__administration_approve_credentials_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "custody_fund_services",
        "id": "vibenavides__administration_custody_fund_services_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "links_online",
        "id": "vibenavides__administration_links_online_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "common_services",
        "id": "vibenavides__administration_common_services_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Requests",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "delete_request",
        "id": "vibenavides__administration_delete_request_manage_requests",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Requests",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "view_request",
        "id": "vibenavides__administration_view_request_manage_requests",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "delete",
        "id": "vibenavides__administration_delete_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "view",
        "id": "vibenavides__administration_view_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "modify",
        "id": "vibenavides__administration_modify_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "clone",
        "id": "vibenavides__administration_clone_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "create",
        "id": "vibenavides__administration_create_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "approve",
        "id": "vibenavides__administration_approve_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "view_accounts",
        "id": "vibenavides__administration_view_accounts_other",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "view_products",
        "id": "vibenavides__administration_view_products_other",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "administration",
        "functionId": "view_client",
        "id": "vibenavides__administration_view_client_other",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "corporate_action_manager",
        "functionId": "",
        "id": "vibenavides__corporate_action_manager__",
        ...controlDateHelper
    },
    {
        "functionType": "CFS - Corporate Action Instruction",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "corporate_action_manager_corporate_instruction",
        "functionId": "view",
        "id": "vibenavides__corporate_action_manager_corporate_instruction_view_cfs_corporate_action_instruction",
        ...controlDateHelper
    },
    {
        "functionType": "CFS - Corporate Action Instruction",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "corporate_action_manager_instruction_without_event",
        "functionId": "view",
        "id": "vibenavides__corporate_action_manager_instruction_without_event_view_cfs_corporate_action_instruction",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "vibenavides__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "vibenavides",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "vibenavides__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "xiomgalvis",
        "productId": "securities_services_products_views_portfolio_reporting",
        "functionId": "visibility",
        "id": "xiomgalvis__securities_services_products_views_portfolio_reporting_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "Merchant Services Reporting Functions",
        "accountNumber": "",
        "accessId": "xiomgalvis",
        "productId": "securities_services_products_custody_dashboard",
        "functionId": "visibility",
        "id": "xiomgalvis__securities_services_products_custody_dashboard_visibility_merchant_services_reporting_functions",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "xiomgalvis",
        "productId": "securities_services_products",
        "functionId": "",
        "id": "xiomgalvis__securities_services_products__",
        ...controlDateHelper
    },
    {
        "functionType": "",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "manage_product_settings",
        "id": "yureyes__administration_manage_product_settings_",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "clone",
        "id": "yureyes__administration_clone_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "create",
        "id": "yureyes__administration_create_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "approve",
        "id": "yureyes__administration_approve_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "view",
        "id": "yureyes__administration_view_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "delete",
        "id": "yureyes__administration_delete_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Account Groups",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "modify",
        "id": "yureyes__administration_modify_manage_account_groups",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "run_reports",
        "id": "yureyes__administration_run_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "manage_reports",
        "id": "yureyes__administration_manage_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "view_reports",
        "id": "yureyes__administration_view_reports_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Administration Reports",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "manage_templates",
        "id": "yureyes__administration_manage_templates_manage_administration_reports",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "view_client_location_groups",
        "id": "yureyes__administration_view_client_location_groups_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "additional_token_request",
        "id": "yureyes__administration_additional_token_request_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "manage_credentials",
        "id": "yureyes__administration_manage_credentials_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "client_location_groups",
        "id": "yureyes__administration_client_location_groups_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Credentials",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "approve_credentials",
        "id": "yureyes__administration_approve_credentials_manage_credentials",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "custody_fund_services",
        "id": "yureyes__administration_custody_fund_services_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "links_online",
        "id": "yureyes__administration_links_online_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Products",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "common_services",
        "id": "yureyes__administration_common_services_manage_products",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Requests",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "delete_request",
        "id": "yureyes__administration_delete_request_manage_requests",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Requests",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "view_request",
        "id": "yureyes__administration_view_request_manage_requests",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "delete",
        "id": "yureyes__administration_delete_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "view",
        "id": "yureyes__administration_view_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "modify",
        "id": "yureyes__administration_modify_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "clone",
        "id": "yureyes__administration_clone_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "create",
        "id": "yureyes__administration_create_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Manage Users",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "approve",
        "id": "yureyes__administration_approve_manage_users",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "view_accounts",
        "id": "yureyes__administration_view_accounts_other",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "view_products",
        "id": "yureyes__administration_view_products_other",
        ...controlDateHelper
    },
    {
        "functionType": "Other",
        "accountNumber": "",
        "accessId": "yureyes",
        "productId": "administration",
        "functionId": "view_client",
        "id": "yureyes__administration_view_client_other",
        ...controlDateHelper
    }
];