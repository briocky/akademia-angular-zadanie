import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletionandsearchComponent } from './autocompletionandsearch.component';

describe('AutocompletionandsearchComponent', () => {
  let component: AutocompletionandsearchComponent;
  let fixture: ComponentFixture<AutocompletionandsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompletionandsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletionandsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
