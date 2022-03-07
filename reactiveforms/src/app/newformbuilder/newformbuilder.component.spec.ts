import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewformbuilderComponent } from './newformbuilder.component';

describe('NewformbuilderComponent', () => {
  let component: NewformbuilderComponent;
  let fixture: ComponentFixture<NewformbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewformbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewformbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
