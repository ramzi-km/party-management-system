export interface AuthState {
    userToken: string | null
    isLoggedIn: boolean
    userData?: {
        username: string
        password: string
    }
}
