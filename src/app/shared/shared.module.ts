import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgIconsModule } from '@ng-icons/core'
import {
    remixAddFill,
    remixArrowLeftLine,
    remixBankCard2Fill,
    remixBankFill,
    remixBuilding2Fill,
    remixBuildingFill,
    remixCalendar2Fill,
    remixCalendarEventFill,
    remixCloseLine,
    remixDeleteBinFill,
    remixErrorWarningLine,
    remixEyeFill,
    remixFileTextFill,
    remixFlagFill,
    remixGitBranchFill,
    remixGovernmentFill,
    remixMailFill,
    remixMapPinLine,
    remixMoneyDollarCircleFill,
    remixPencilFill,
    remixPhoneFill,
    remixPushpinFill,
    remixShieldKeyholeFill,
    remixSmartphoneFill,
    remixUserFill,
    remixWhatsappFill,
} from '@ng-icons/remixicon'
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
        NgIconsModule.withIcons({
            remixCloseLine,
            remixErrorWarningLine,
            remixPencilFill,
            remixDeleteBinFill,
            remixEyeFill,
            remixAddFill,
            remixArrowLeftLine,
            remixBuildingFill,
            remixMailFill,
            remixBankCard2Fill,
            remixFileTextFill,
            remixSmartphoneFill,
            remixPhoneFill,
            remixWhatsappFill,
            remixCalendarEventFill,
            remixCalendar2Fill,
            remixMoneyDollarCircleFill,
            remixPushpinFill,
            remixUserFill,
            remixShieldKeyholeFill,
            remixBankFill,
            remixGitBranchFill,
            remixMapPinLine,
            remixBuilding2Fill,
            remixGovernmentFill,
            remixFlagFill,
        }),
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
