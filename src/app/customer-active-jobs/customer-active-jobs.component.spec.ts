import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerActiveJobsComponent } from './customer-active-jobs.component';

describe('CustomerActiveJobsComponent', () => {
  let component: CustomerActiveJobsComponent;
  let fixture: ComponentFixture<CustomerActiveJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerActiveJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerActiveJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
