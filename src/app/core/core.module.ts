import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { NgIconsModule } from '@ng-icons/core'
import { remixLogoutBoxLine } from '@ng-icons/remixicon'

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        NgIconsModule.withIcons({ remixLogoutBoxLine }),
        ToastrModule.forRoot(),
    ],
    exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
