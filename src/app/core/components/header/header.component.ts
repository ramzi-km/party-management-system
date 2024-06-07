import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    theme = 'light'

    ngOnInit(): void {
        const localStorageTheme = localStorage.getItem('theme')
        if (localStorageTheme) {
            this.theme = localStorageTheme
        }
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
