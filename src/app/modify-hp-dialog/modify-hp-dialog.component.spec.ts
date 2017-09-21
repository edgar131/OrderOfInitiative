import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHpDialogComponent } from './modify-hp-dialog.component';

describe('ModifyHpDialogComponent', () => {
  let component: ModifyHpDialogComponent;
  let fixture: ComponentFixture<ModifyHpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyHpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyHpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
