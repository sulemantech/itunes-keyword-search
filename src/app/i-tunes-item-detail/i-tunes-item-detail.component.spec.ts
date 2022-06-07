import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITunesItemDetailComponent } from './i-tunes-item-detail.component';

describe('ITunesItemDetailComponent', () => {
  let component: ITunesItemDetailComponent;
  let fixture: ComponentFixture<ITunesItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITunesItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ITunesItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
