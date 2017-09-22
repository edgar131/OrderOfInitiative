import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCombatantFormComponent } from './edit-combatant-form.component';

describe('EditCombatantFormComponent', () => {
  let component: EditCombatantFormComponent;
  let fixture: ComponentFixture<EditCombatantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCombatantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCombatantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
