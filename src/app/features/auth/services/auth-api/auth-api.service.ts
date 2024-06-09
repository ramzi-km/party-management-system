import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class AuthApiService {
    constructor(private http: HttpClient) {}

    userLogin(
        data: { username: string; password: string },
        headers?: HttpHeaders
    ) {
        return this.http.post<{ user: boolean; token: string }>(
            `login/`,
            data,
            {
                headers,
            }
        )
    }
    userLogout() {
        return this.http.post<{ status: string }>(`logout/`, {})
    }
}
