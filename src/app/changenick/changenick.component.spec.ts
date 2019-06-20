import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangenickComponent } from './changenick.component';

describe('ChangenickComponent', () => {
  let component: ChangenickComponent;
  let fixture: ComponentFixture<ChangenickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangenickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangenickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
