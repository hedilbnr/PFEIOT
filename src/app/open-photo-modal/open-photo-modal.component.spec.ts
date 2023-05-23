import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPhotoModalComponent } from './open-photo-modal.component';

describe('OpenPhotoModalComponent', () => {
  let component: OpenPhotoModalComponent;
  let fixture: ComponentFixture<OpenPhotoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenPhotoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenPhotoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
