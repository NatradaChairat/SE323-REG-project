import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeStudentComponent } from './fee-student.component';

describe('FeeStudentComponent', () => {
  let component: FeeStudentComponent;
  let fixture: ComponentFixture<FeeStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
