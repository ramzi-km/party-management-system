import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { AuthState } from '../../interfaces/auth-state.interface'

@Injectable({
    providedIn: 'root',
})
export class AuthStateService {
    private subject = new BehaviorSubject<AuthState>({
        userToken: null,
        isLoggedIn: false,
    })
    private loadingSubject = new BehaviorSubject<boolean>(false)

    authState$: Observable<AuthState>
    authStateLoading$: Observable<boolean>

    constructor() {
        const storedToken = localStorage.getItem('userToken')

        this.subject.next({
            userToken: storedToken,
            isLoggedIn: false,
        })
        this.authState$ = this.subject.asObservable()
        this.loadingSubject.next(false)
        this.authStateLoading$ = this.loadingSubject.asObservable()
    }

    // Setters for the authentication state

    setLoading(loading: boolean) {
        this.loadingSubject.next(loading)
    }

    setLoggedIn(isLoggedIn: boolean) {
        this.subject.next({ ...this.subject.getValue(), isLoggedIn })
    }

    setUserToken(userToken: string) {
        this.subject.next({ ...this.subject.getValue(), userToken })
    }

    setUserData(userData: { username: string; password: string }) {
        this.subject.next({ ...this.subject.getValue(), userData })
    }

    setAuthState(authState: AuthState) {
        this.subject.next(authState)
    }

    // Getter for the current authentication state
    getAuthState(): AuthState {
        return this.subject.getValue()
    }
    getLoading(): boolean {
        return this.loadingSubject.getValue()
    }
}
