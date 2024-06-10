import { AuthStateService } from './../services/auth-state/auth-state.service'
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core'
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private authStateService: AuthStateService
    ) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const apiUrl = environment.API_URL

        // Get authorization token from local storage
        const token = this.authStateService.getAuthState().userToken
        const authHeaders = new HttpHeaders({
            Authorization: `Token ${token}`,
        })
        let modifiedReq = request.clone({
            url: `${apiUrl}/${request.url}`,
            headers: authHeaders,
        })
        if (request.url === 'login/') {
            modifiedReq = request.clone({
                url: `${apiUrl}/${request.url}`,
                headers: request.headers,
            })
        }

        return next.handle(modifiedReq).pipe(
            catchError((errResponse: HttpErrorResponse) => {
                // Handle errors here
                console.error('An error occurred:', errResponse.error)

                // Handle specific error codes or types if needed
                if (errResponse.status === 401) {
                    // Handle unauthorized errors (e.g., redirect to login)
                    this.authStateService.setAuthState({
                        userToken: null,
                        isLoggedIn: false,
                    })
                    this.authStateService.setUserData({
                        username: 'guest',
                        password: 'guest',
                    })
                    this.router.navigate(['/login'])
                } else if (errResponse.status === 404) {
                    // Handle not found errors (e.g., display a message)
                }

                console.log(errResponse.error)
                // Return an observable with a user-facing error message
                return throwError(() => errResponse.error)
            })
        )
    }
}
