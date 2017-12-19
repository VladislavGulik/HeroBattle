import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAntiheroComponent } from './create-antihero.component';

describe('CreateAntiheroComponent', () => {
  let component: CreateAntiheroComponent;
  let fixture: ComponentFixture<CreateAntiheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAntiheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAntiheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
