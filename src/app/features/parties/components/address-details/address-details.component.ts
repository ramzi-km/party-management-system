import { IAddress } from './../../../../core/interfaces/address.interface'
import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-address-details',
    templateUrl: './address-details.component.html',
    styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent {
    @Input() addresses!: IAddress[]

    addressess: IAddress[] = [
        {
            id: 23,
            address_line_1: '123, Elm Street',
            address_line_2: 'Near Central Park',
            country: 'USA',
            state: 'New York',
            city: 'New York',
            pincode: 10001,
            is_active: true,
        },
        {
            id: 34,
            address_line_1: '456, Oak Avenue',
            address_line_2: 'Opposite Main Square',
            country: 'USA',
            state: 'California',
            city: 'Los Angeles',
            pincode: 90001,
            is_active: false,
        },
    ]
}
