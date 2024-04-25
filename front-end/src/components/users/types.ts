export interface UserModel {
    id: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    telephoneNumber: string;
}

export interface UsersResponseModel {
    data: UserModel[];
    serverName: string;
}

export interface UseUsersModel {
    users: UserModel[] | undefined;
    serverName: string | undefined;
    isLoading: boolean;
    // SWR returns any, so a more explicit type cannot be used
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
}