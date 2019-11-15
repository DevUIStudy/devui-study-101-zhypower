import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoubianComponent } from './youbian.component';

describe('YoubianComponent', () => {
  let component: YoubianComponent;
  let fixture: ComponentFixture<YoubianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoubianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoubianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
