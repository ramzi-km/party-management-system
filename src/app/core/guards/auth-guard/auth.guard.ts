import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthStateService } from '../../services/auth-state/auth-state.service'
import { catchError, finalize, map, of, switchMap } from 'rxjs'
import { AuthApiService } from 'src/app/features/auth/services/auth-api/auth-api.service'
import { HttpHeaders } from '@angular/common/http'

export const authGuard: CanActivateFn = (route, state) => {
    const authStateService: AuthStateService = inject(AuthStateService)
    const authApiService: AuthApiService = inject(AuthApiService)
    const router: Router = inject(Router)

    return authStateService.authState$.pipe(
        switchMap((authState) => {
            if (authState.userData) {
                authStateService.setLoading(false)
                if (state.url === '/login' && authState.isLoggedIn) {
                    router.navigate(['/'])
                    return of(false)
                } else if (state.url !== '/login' && !authState.isLoggedIn) {
                    router.navigate(['/login'])
                    return of(false)
                } else {
                    return of(true)
                }
            } else {
                authStateService.setLoading(true)
                const headers = new HttpHeaders({
                    Authorization: `Token ${authState.userToken}`,
                })
                return authApiService
                    .userLogin(
                        { username: 'sample', password: 'sample' },
                        headers
                    )
                    .pipe(
                        map((res) => {
                            console.log(res)
                            return true
                        }),
                        catchError((error) => {
                            if (error.msg) {
                           

                                authStateService.setLoggedIn(true)
                                authStateService.setUserData({
                                    username: 'sample',
                                    password: 'password',
                                })
                                if (state.url === '/login') {
                                    router.navigate(['/'])
                                    return of(false)
                                } else {
                                    return of(true)
                                }
                            } else {
                                if (state.url === '/login') {
                                    return of(true)
                                } else {
                                    router.navigate(['/login'])
                                    return of(false)
                                }
                            }
                        }),
                        finalize(() => authStateService.setLoading(false))
                    )
            }
        })
    )
}
