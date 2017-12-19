import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiheroDetailsComponent } from './antihero-details.component';

describe('AntiheroDetailsComponent', () => {
  let component: AntiheroDetailsComponent;
  let fixture: ComponentFixture<AntiheroDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiheroDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiheroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
