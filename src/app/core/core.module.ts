import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { NgIconsModule } from '@ng-icons/core'
import {
    remixLogoutBoxLine,
    remixMoonFill,
    remixSunFill,
} from '@ng-icons/remixicon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor'

import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgIconsModule.withIcons({
            remixLogoutBoxLine,
            remixSunFill,
            remixMoonFill,
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
    ],
})
export class CoreModule {}
