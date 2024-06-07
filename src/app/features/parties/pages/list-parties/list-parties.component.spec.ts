import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ListPartiesComponent } from './list-parties.component'

describe('ListPartiesComponent', () => {
    let component: ListPartiesComponent
    let fixture: ComponentFixture<ListPartiesComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListPartiesComponent],
        })
        fixture = TestBed.createComponent(ListPartiesComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
