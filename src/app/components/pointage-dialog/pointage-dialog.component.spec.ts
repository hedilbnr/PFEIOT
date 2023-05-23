import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointageDialogComponent } from './pointage-dialog.component';

describe('PointageDialogComponent', () => {
  let component: PointageDialogComponent;
  let fixture: ComponentFixture<PointageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
