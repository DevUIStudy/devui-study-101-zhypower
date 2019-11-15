import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiebiaoComponent } from './liebiao.component';

describe('LiebiaoComponent', () => {
  let component: LiebiaoComponent;
  let fixture: ComponentFixture<LiebiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiebiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiebiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
