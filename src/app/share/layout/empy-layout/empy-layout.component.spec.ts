import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpyLayoutComponent } from './empy-layout.component';

describe('EmpyLayoutComponent', () => {
  let component: EmpyLayoutComponent;
  let fixture: ComponentFixture<EmpyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
