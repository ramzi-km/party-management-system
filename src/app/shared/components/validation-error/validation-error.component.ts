import { Component, Input } from '@angular/core'
import {
    FormControl,
    AbstractControl,
    FormGroupDirective,
} from '@angular/forms'
import { ValidationMessages } from 'src/app/core/interfaces/validation-messages'

@Component({
    selector: 'app-validation-error',
    templateUrl: './validation-error.component.html',
    styleUrls: ['./validation-error.component.scss'],
})
export class ValidationErrorComponent {
    @Input() control: FormControl | AbstractControl | undefined
    @Input() validationMessages: ValidationMessages | undefined

    constructor(public formDirective: FormGroupDirective) {}
}
