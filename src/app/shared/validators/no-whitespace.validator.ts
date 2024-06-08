import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export const noWhitespaceValidator: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    const trimmedValue = control.value.trim()
    if (trimmedValue === '') {
        return { noWhitespaceValidator: true }
    }
    return null
}
