import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCompletedJobsComponent } from './customer-completed-jobs.component';

describe('CustomerCompletedJobsComponent', () => {
  let component: CustomerCompletedJobsComponent;
  let fixture: ComponentFixture<CustomerCompletedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCompletedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCompletedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
