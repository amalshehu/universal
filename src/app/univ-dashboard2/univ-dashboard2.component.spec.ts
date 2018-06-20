
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivDashboard2Component } from './univ-dashboard2.component';

describe('UnivDashboard2Component', () => {
  let component: UnivDashboard2Component;
  let fixture: ComponentFixture<UnivDashboard2Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivDashboard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnivDashboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
