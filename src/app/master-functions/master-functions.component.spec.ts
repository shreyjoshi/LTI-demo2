import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFunctionsComponent } from './master-functions.component';

describe('MasterFunctionsComponent', () => {
  let component: MasterFunctionsComponent;
  let fixture: ComponentFixture<MasterFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
