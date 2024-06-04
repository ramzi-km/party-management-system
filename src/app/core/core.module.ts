import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [CommonModule, BrowserAnimationsModule, ToastrModule.forRoot()],
    exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
