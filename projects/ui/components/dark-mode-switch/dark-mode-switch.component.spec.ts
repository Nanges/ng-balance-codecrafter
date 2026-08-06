import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeSwitchComponent } from './dark-mode-switch.component';

describe('DarkModeSwitchComponent', () => {
  let component: DarkModeSwitchComponent;
  let fixture: ComponentFixture<DarkModeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkModeSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkModeSwitchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
