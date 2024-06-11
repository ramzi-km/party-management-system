import { IValidationMessages } from './../../../core/interfaces/validation-messages.interface';
import { Component, Input } from '@angular/core'
import {
    FormControl,
    AbstractControl,
    FormGroupDirective,
} from '@angular/forms'

@Component({
    selector: 'app-validation-error',
    templateUrl: './validation-error.component.html',
    styleUrls: ['./validation-error.component.scss'],
})
export class ValidationErrorComponent {
    @Input() control: FormControl | AbstractControl | undefined
    @Input() validationMessages: IValidationMessages | undefined

    constructor(public formDirective: FormGroupDirective) {}
}
