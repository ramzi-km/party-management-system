export interface IAuthState {
    userToken: string | null
    isLoggedIn: boolean
    userData?: {
        username: string
        password: string
    }
}
