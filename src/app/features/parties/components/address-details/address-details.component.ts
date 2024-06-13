import { IAddress } from './../../../../core/interfaces/address.interface'
import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-address-details',
    templateUrl: './address-details.component.html',
    styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent {
    @Input() addresses!: IAddress[]
}
