export type AppUserType = {
    id: string;
    username: string;
    name: string;
    appRole: 'admin' | 'basic',
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null | undefined;
};