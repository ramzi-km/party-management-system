import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EditPartyModalComponent } from './edit-party-modal.component'

describe('EditPartyModalComponent', () => {
    let component: EditPartyModalComponent
    let fixture: ComponentFixture<EditPartyModalComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EditPartyModalComponent],
        })
        fixture = TestBed.createComponent(EditPartyModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
