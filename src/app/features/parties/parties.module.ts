import { PartyService } from './services/party/party.service'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from './../../shared/shared.module'

import { PartiesRoutingModule } from './parties-routing.module'
import { ListPartiesComponent } from './pages/list-parties/list-parties.component'

@NgModule({
    declarations: [ListPartiesComponent],
    imports: [CommonModule, PartiesRoutingModule, SharedModule],
    providers: [PartyService],
})
export class PartiesModule {}
