import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmplyeeComponent } from './edit-emplyee.component';

describe('EditEmplyeeComponent', () => {
  let component: EditEmplyeeComponent;
  let fixture: ComponentFixture<EditEmplyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmplyeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
