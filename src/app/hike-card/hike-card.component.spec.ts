import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeCardComponent } from './hike-card.component';

describe('TrailCardComponent', () => {
  let component: HikeCardComponent;
  let fixture: ComponentFixture<HikeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
