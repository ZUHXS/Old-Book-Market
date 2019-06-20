import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDashComponent } from './seller-dash.component';

describe('SellerDashComponent', () => {
  let component: SellerDashComponent;
  let fixture: ComponentFixture<SellerDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
