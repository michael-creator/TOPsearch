import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsearchNavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: TopsearchNavbarComponent;
  let fixture: ComponentFixture<TopsearchNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsearchNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsearchNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
