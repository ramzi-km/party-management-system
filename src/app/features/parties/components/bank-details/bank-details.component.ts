import { Component, Input } from '@angular/core'
import { IBank } from './../../../../core/interfaces/bank.interface'

@Component({
    selector: 'app-bank-details',
    templateUrl: './bank-details.component.html',
    styleUrls: ['./bank-details.component.scss'],
})
export class BankDetailsComponent {
    @Input() banks!: IBank[]

    bankss: IBank[] = [
        {
            id: 323434,
            bank_name: 'hdfc',
            bank_ifsc_code: '323423',
            account_no: '2334323423423',
            account_holder_name: 'Ramzi K.M',
            branch_name: 'Vazhakkad',
            is_active: true,
        },
        {
            id: 323434,
            bank_name: 'Sbi',
            bank_ifsc_code: 'ss3dd23423',
            account_no: '2334323423423',
            account_holder_name: 'Ramzi K.M',
            branch_name: 'Kondotty',
            is_active: false,
        },
    ]
}
