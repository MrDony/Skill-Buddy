import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSignInSignUpComponent } from './customer-sign-in-sign-up.component';

describe('CustomerSignInSignUpComponent', () => {
  let component: CustomerSignInSignUpComponent;
  let fixture: ComponentFixture<CustomerSignInSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSignInSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSignInSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
