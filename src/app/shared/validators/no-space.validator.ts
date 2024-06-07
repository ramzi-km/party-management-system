import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export const noSpaceValidator: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    const controlValue = control.value as string
    if (controlValue.indexOf(' ') >= 0) {
        return { noSpaceValidator: true }
    } else {
        return null
    }
}
