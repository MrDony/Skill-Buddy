import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarCustomerComponent } from './top-bar-customer.component';

describe('TopBarCustomerComponent', () => {
  let component: TopBarCustomerComponent;
  let fixture: ComponentFixture<TopBarCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
