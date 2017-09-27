import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePartyDialogComponent } from './delete-party-dialog.component';

describe('DeletePartyDialogComponent', () => {
  let component: DeletePartyDialogComponent;
  let fixture: ComponentFixture<DeletePartyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePartyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePartyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
