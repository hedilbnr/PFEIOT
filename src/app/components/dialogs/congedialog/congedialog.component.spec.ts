import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongedialogComponent } from './congedialog.component';

describe('CongedialogComponent', () => {
  let component: CongedialogComponent;
  let fixture: ComponentFixture<CongedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
