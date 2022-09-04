import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuteLinkTableComponent } from './cute-link-table.component';

describe('CuteLinkTableComponent', () => {
  let component: CuteLinkTableComponent;
  let fixture: ComponentFixture<CuteLinkTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuteLinkTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuteLinkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
