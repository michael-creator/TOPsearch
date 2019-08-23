import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsearchFormComponent } from './topsearch-form.component';

describe('TopsearchFormComponent', () => {
  let component: TopsearchFormComponent;
  let fixture: ComponentFixture<TopsearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
