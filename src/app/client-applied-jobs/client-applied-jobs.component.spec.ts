import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAppliedJobsComponent } from './client-applied-jobs.component';

describe('ClientAppliedJobsComponent', () => {
  let component: ClientAppliedJobsComponent;
  let fixture: ComponentFixture<ClientAppliedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAppliedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
