import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarClientComponent } from './top-bar-client.component';

describe('TopBarClientComponent', () => {
  let component: TopBarClientComponent;
  let fixture: ComponentFixture<TopBarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
