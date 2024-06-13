import { PartyService } from './services/party/party.service'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from './../../shared/shared.module'

import { PartiesRoutingModule } from './parties-routing.module'
import { ListPartiesComponent } from './pages/list-parties/list-parties.component'
import { AddPartyModalComponent } from './components/add-party-modal/add-party-modal.component'
import { PartyDetailsComponent } from './pages/party-details/party-details.component'
import { EditPartyModalComponent } from './components/edit-party-modal/edit-party-modal.component';
import { GeneralDetailsComponent } from './components/general-details/general-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component'

@NgModule({
    declarations: [
        ListPartiesComponent,
        AddPartyModalComponent,
        PartyDetailsComponent,
        EditPartyModalComponent,
        GeneralDetailsComponent,
        UserDetailsComponent,
        BankDetailsComponent,
        AddressDetailsComponent,
    ],
    imports: [CommonModule, PartiesRoutingModule, SharedModule],
    providers: [PartyService],
})
export class PartiesModule {}
