import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgIconsModule } from '@ng-icons/core'
import { remixCloseLine } from '@ng-icons/remixicon'
import { ValidationPipe } from './pipes/validation.pipe'
import { ValidationErrorComponent } from './components/validation-error/validation-error.component'

@NgModule({
    declarations: [ValidationPipe, ValidationErrorComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgIconsModule.withIcons({ remixCloseLine }),
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        NgIconsModule,
        ValidationErrorComponent,
    ],
})
export class SharedModule {}
