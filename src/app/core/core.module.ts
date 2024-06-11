import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { NgIconsModule } from '@ng-icons/core'
import {
    remixCloseLine,
    remixLogoutBoxLine,
    remixMoonFill,
    remixSunFill,
} from '@ng-icons/remixicon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor'

import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { LogoutModalComponent } from './components/logout-modal/logout-modal.component'
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component'

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LogoutModalComponent,
        NotFoundPageComponent,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgIconsModule.withIcons({
            remixLogoutBoxLine,
            remixSunFill,
            remixMoonFill,
            remixCloseLine,
        }),
        ToastrModule.forRoot(),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ReactiveFormsModule,
        FormsModule,
        NotFoundPageComponent,
    ],
})
export class CoreModule {}
