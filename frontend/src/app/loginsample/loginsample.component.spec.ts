import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsampleComponent } from './loginsample.component';

describe('LoginsampleComponent', () => {
  let component: LoginsampleComponent;
  let fixture: ComponentFixture<LoginsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
