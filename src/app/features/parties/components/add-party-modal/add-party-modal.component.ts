import { Component } from '@angular/core'

@Component({
    selector: 'app-add-party-modal',
    templateUrl: './add-party-modal.component.html',
    styleUrls: ['./add-party-modal.component.scss'],
})
export class AddPartyModalComponent {
    closeAddPartyModal() {
        const addPartyModal = document.getElementById(
            'add-party-modal'
        ) as HTMLDialogElement
        addPartyModal.close()
    }
}
