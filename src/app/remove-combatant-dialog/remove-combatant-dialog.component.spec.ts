import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCombatantDialogComponent } from './remove-combatant-dialog.component';

describe('RemoveCombatantDialogComponent', () => {
  let component: RemoveCombatantDialogComponent;
  let fixture: ComponentFixture<RemoveCombatantDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveCombatantDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCombatantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
