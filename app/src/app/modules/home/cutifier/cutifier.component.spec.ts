import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutifierComponent } from './cutifier.component';

describe('CutifierComponent', () => {
  let component: CutifierComponent;
  let fixture: ComponentFixture<CutifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
