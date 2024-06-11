import { Pipe, PipeTransform } from '@angular/core'
import { ValidationErrors } from '@angular/forms'
import { IValidationMessages } from './../../core/interfaces/validation-messages.interface'

@Pipe({
    name: 'validation',
})
export class ValidationPipe implements PipeTransform {
    transform(
        value: IValidationMessages,
        validationErrors: ValidationErrors
    ): string {
        return value[Object.keys(validationErrors)[0]]
    }
}
