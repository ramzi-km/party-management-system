import { Component, OnDestroy, OnInit } from '@angular/core'
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms'
import { Subject } from 'rxjs'

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

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                this.noSpaceValidation,
            ]),
        })
    }

    get loginFormControls() {
        return this.loginForm.controls
    }

    noSpaceValidation(control: AbstractControl): ValidationErrors | null {
        const controlValue = control.value as string
        if (controlValue.indexOf(' ') >= 0) {
            return { noSpaceValidator: true }
        } else {
            return null
        }
    }

    submitForm() {
        this.submitted = true
        if (this.loginForm.invalid || this.loading) {
            return
        }
        this.loading = true
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next()
        this.ngUnsubscribe.complete()
    }
}
