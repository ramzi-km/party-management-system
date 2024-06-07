import { noSpaceValidator } from './../../../../shared/validators/no-space.validator'
import { noWhitespaceValidator } from './../../../../shared/validators/no-whitespace.validator'
import { Component, OnDestroy, OnInit } from '@angular/core'
import {
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms'
import { Subject, takeUntil } from 'rxjs'
import { AuthApiService } from '../../services/auth-api/auth-api.service'
import { AuthStateService } from './../../../../core/services/auth-state/auth-state.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy, OnInit {
    private ngUnsubscribe = new Subject<void>()
    loginForm!: FormGroup
    errMessage: string | null = null
    loading = false
    submitted = false

    constructor(
        private authApiService: AuthApiService,
        private authStateService: AuthStateService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl('', [
                Validators.required,
                noWhitespaceValidator,
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                noSpaceValidator,
            ]),
        })
    }

    get loginFormControls() {
        return this.loginForm.controls
    }

    submitForm() {
        this.submitted = true
        if (this.loginForm.invalid || this.loading) {
            return
        }
        this.loading = true
        this.authApiService
            .userLogin(this.loginForm.value)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe({
                next: (res) => {
                    this.errMessage = null
                    this.loading = false
                    this.authStateService.setLoggedIn(true)
                    this.authStateService.setUserToken(res.token)
                    this.router.navigate(['/'])
                },
                error: (err) => {
                    this.errMessage = err.msg
                    this.loading = false
                },
            })
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next()
        this.ngUnsubscribe.complete()
    }
}
