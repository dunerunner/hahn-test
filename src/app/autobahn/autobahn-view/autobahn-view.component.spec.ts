import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobahnViewComponent } from './autobahn-view.component';

describe('AutobahnViewComponent', () => {
  let component: AutobahnViewComponent;
  let fixture: ComponentFixture<AutobahnViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutobahnViewComponent]
    });
    fixture = TestBed.createComponent(AutobahnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
