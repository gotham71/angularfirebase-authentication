import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlatformsComponent } from './select-platforms.component';

describe('SelectPlatformsComponent', () => {
  let component: SelectPlatformsComponent;
  let fixture: ComponentFixture<SelectPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPlatformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
