import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmplyeeDialogComponent } from './add-emplyee-dialog.component';

describe('AddEmplyeeDialogComponent', () => {
  let component: AddEmplyeeDialogComponent;
  let fixture: ComponentFixture<AddEmplyeeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmplyeeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmplyeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
