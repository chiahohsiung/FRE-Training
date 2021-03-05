import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvalidationformComponent } from './customvalidationform.component';

describe('CustomvalidationformComponent', () => {
  let component: CustomvalidationformComponent;
  let fixture: ComponentFixture<CustomvalidationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomvalidationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomvalidationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
