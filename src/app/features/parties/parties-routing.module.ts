import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListPartiesComponent } from './pages/list-parties/list-parties.component'
import { PartyDetailsComponent } from './pages/party-details/party-details.component'

const routes: Routes = [
    {
        path: '',
        component: ListPartiesComponent,
    },
    {
        path: ':partyId',
        component: PartyDetailsComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PartiesRoutingModule {}
