import { Component, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Subject, takeUntil } from 'rxjs'
import { AuthStateService } from '../../services/auth-state/auth-state.service'
import { AuthApiService } from './../../../features/auth/services/auth-api/auth-api.service'

@Component({
    selector: 'app-logout-modal',
    templateUrl: './logout-modal.component.html',
    styleUrls: ['./logout-modal.component.scss'],
})
export class LogoutModalComponent implements OnDestroy {
    private ngUnsubscribe$ = new Subject<void>()

    logoutLoading = false

    constructor(
        private authApiService: AuthApiService,
        private authStateService: AuthStateService,
        private router: Router
    ) {}

    closeLogoutModal() {
        const logoutModal = document.getElementById(
            'logoutModal'
        ) as HTMLDialogElement
        logoutModal.close()
    }

    logout() {
        this.logoutLoading = true
        this.authApiService
            .userLogout()
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe({
                next: (res) => {
                    console.log(res)
                    this.authStateService.setAuthState({
                        userToken: null,
                        isLoggedIn: false,
                    })
                    this.authStateService.setUserData({
                        username: 'guest',
                        password: 'guest',
                    })
                    this.logoutLoading = false
                    this.closeLogoutModal()
                    this.router.navigate(['/login'])
                },
                error: (error) => {
                    console.log(error)
                    this.logoutLoading = false
                },
            })
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next()
        this.ngUnsubscribe$.complete()
    }
}
