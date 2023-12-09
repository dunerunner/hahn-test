import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobahnSelectionComponent } from './autobahn-selection.component';

describe('AutobahnSelectionComponent', () => {
  let component: AutobahnSelectionComponent;
  let fixture: ComponentFixture<AutobahnSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutobahnSelectionComponent]
    });
    fixture = TestBed.createComponent(AutobahnSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
