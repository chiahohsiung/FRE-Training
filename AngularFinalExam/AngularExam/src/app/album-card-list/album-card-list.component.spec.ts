import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCardListComponent } from './album-card-list.component';

describe('AlbumCardListComponent', () => {
  let component: AlbumCardListComponent;
  let fixture: ComponentFixture<AlbumCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
