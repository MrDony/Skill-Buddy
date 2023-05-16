import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSignInSignUpComponent } from './client-sign-in-sign-up.component';

describe('ClientSignInSignUpComponent', () => {
  let component: ClientSignInSignUpComponent;
  let fixture: ComponentFixture<ClientSignInSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSignInSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSignInSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
