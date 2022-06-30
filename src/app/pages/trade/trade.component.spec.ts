import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcapiComponent } from './ccapi.component';

describe('PortfolioPageComponent', () => {
  let component: CcapiComponent;
  let fixture: ComponentFixture<CcapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
