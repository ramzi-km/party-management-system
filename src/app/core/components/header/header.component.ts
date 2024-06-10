import { Component, OnInit } from '@angular/core'
import { AuthStateService } from '../../services/auth-state/auth-state.service'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    theme = 'light'
    authState$ = this.authStateService.authState$
    logoutLoading = false

    constructor(private authStateService: AuthStateService) {}

    ngOnInit(): void {
        const localStorageTheme = localStorage.getItem('theme')
        if (localStorageTheme) {
            this.theme = localStorageTheme
        }
    }

    showLogoutModal() {
        const logoutModal = document.getElementById(
            'logoutModal'
        ) as HTMLDialogElement
        logoutModal.showModal()
    }

    toggleDarkMode() {
        if (this.theme == 'light') {
            this.theme = 'dark'
            localStorage.setItem('theme', 'dark')
            document.documentElement.setAttribute('data-theme', 'dim')
        } else {
            this.theme = 'light'
            localStorage.setItem('theme', 'light')
            document.documentElement.setAttribute('data-theme', 'emerald')
        }
    }
}
