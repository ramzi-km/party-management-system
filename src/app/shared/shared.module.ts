import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgIconsModule } from '@ng-icons/core'
import { remixCloseLine } from '@ng-icons/remixicon'

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgIconsModule.withIcons({ remixCloseLine }),
    ],
    exports: [ReactiveFormsModule, FormsModule, NgIconsModule],
})
export class SharedModule {}
