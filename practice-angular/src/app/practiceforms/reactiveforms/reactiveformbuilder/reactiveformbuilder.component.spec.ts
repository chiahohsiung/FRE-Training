import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformbuilderComponent } from './reactiveformbuilder.component';

describe('ReactiveformbuilderComponent', () => {
  let component: ReactiveformbuilderComponent;
  let fixture: ComponentFixture<ReactiveformbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
