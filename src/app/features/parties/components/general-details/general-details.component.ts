import { environment } from 'src/environments/environment'
import { Component, Input } from '@angular/core'
import { IParty } from 'src/app/core/interfaces/party.interface'

@Component({
    selector: 'app-general-details',
    templateUrl: './general-details.component.html',
    styleUrls: ['./general-details.component.scss'],
})
export class GeneralDetailsComponent {
    @Input() party!: IParty

    apiUrl = environment.API_URL
}
