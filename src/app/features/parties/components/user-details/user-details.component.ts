import { Component, Input } from '@angular/core'
import { IUserId } from './../../../../core/interfaces/user-id.interface'

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
    @Input() user!: IUserId
}
