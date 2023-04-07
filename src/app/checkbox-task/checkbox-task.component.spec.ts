import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTaskComponent } from './checkbox-task.component';

describe('CheckboxTaskComponent', () => {
  let component: CheckboxTaskComponent;
  let fixture: ComponentFixture<CheckboxTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
