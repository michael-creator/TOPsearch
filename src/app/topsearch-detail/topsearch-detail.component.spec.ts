import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsearchDetailComponent } from './topsearch-detail.component';

describe('TopsearchDetailComponent', () => {
  let component: TopsearchDetailComponent;
  let fixture: ComponentFixture<TopsearchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsearchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
