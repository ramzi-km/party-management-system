import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    theme = 'light'

    loading = false
    ngOnInit(): void {
        const localStorageTheme = localStorage.getItem('theme')
        if (localStorageTheme) {
            this.theme = localStorageTheme
            if (this.theme == 'dark') {
                document.documentElement.setAttribute('data-theme', 'dim')
            }
        }
    }
}
