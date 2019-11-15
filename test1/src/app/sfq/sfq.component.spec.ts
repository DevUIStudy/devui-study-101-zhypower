import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfqComponent } from './sfq.component';

describe('SfqComponent', () => {
  let component: SfqComponent;
  let fixture: ComponentFixture<SfqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
