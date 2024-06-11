import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartyModalComponent } from './add-party-modal.component';

describe('AddPartyModalComponent', () => {
  let component: AddPartyModalComponent;
  let fixture: ComponentFixture<AddPartyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPartyModalComponent]
    });
    fixture = TestBed.createComponent(AddPartyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
