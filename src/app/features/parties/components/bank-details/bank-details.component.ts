import { Component, Input } from '@angular/core'
import { IBank } from './../../../../core/interfaces/bank.interface'

@Component({
    selector: 'app-bank-details',
    templateUrl: './bank-details.component.html',
    styleUrls: ['./bank-details.component.scss'],
})
export class BankDetailsComponent {
    @Input() banks!: IBank[]
}
