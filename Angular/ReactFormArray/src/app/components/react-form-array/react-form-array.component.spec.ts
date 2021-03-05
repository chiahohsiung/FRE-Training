import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormArrayComponent } from './react-form-array.component';

describe('ReactFormArrayComponent', () => {
  let component: ReactFormArrayComponent;
  let fixture: ComponentFixture<ReactFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactFormArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
