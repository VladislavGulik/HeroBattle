import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiheroListComponent } from './antihero-list.component';

describe('AntiheroListComponent', () => {
  let component: AntiheroListComponent;
  let fixture: ComponentFixture<AntiheroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiheroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiheroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
