import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSideComponent } from './text-side.component';

describe('TextSideComponent', () => {
  let component: TextSideComponent;
  let fixture: ComponentFixture<TextSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
