import { Pipe, PipeTransform } from '@angular/core'
import { ValidationErrors } from '@angular/forms'
import { ValidationMessages } from 'src/app/core/interfaces/validation-messages'


@Pipe({
    name: 'validation',
})
export class ValidationPipe implements PipeTransform {
    transform(
        value: ValidationMessages,
        validationErrors: ValidationErrors
    ): string  {
        return value[Object.keys(validationErrors)[0]]
    }
}
