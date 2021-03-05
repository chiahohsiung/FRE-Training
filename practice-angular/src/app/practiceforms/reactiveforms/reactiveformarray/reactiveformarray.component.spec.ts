import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformarrayComponent } from './reactiveformarray.component';

describe('ReactiveformarrayComponent', () => {
  let component: ReactiveformarrayComponent;
  let fixture: ComponentFixture<ReactiveformarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
