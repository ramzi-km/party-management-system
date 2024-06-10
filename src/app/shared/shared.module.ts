import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgIconsModule } from '@ng-icons/core'
import { remixCloseLine, remixErrorWarningLine } from '@ng-icons/remixicon'
import { ValidationPipe } from './pipes/validation.pipe'
import { ValidationErrorComponent } from './components/validation-error/validation-error.component'
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component'

@NgModule({
    declarations: [
        ValidationPipe,
        ValidationErrorComponent,
        LoadingScreenComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgIconsModule.withIcons({ remixCloseLine, remixErrorWarningLine }),
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        NgIconsModule,
        ValidationErrorComponent,
        LoadingScreenComponent,
    ],
})
export class SharedModule {}
