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

    authState$: Observable<AuthState>

    constructor() {
        const storedToken = localStorage.getItem('userToken')

        this.subject.next({
            userToken: storedToken,
            isLoggedIn: false,
        })
        this.authState$ = this.subject.asObservable()
    }

    // Setters for the authentication state
    setLoggedIn(isLoggedIn: boolean) {
        this.subject.next({ ...this.subject.getValue(), isLoggedIn })
    }

    setUserToken(userToken: string) {
        this.subject.next({ ...this.subject.getValue(), userToken })
    }

    // Getter for the current authentication state
    getAuthState(): AuthState {
        return this.subject.getValue()
    }
}
