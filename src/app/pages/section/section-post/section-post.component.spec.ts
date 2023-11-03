import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPostComponent } from './section-post.component';

describe('SectionPostComponent', () => {
  let component: SectionPostComponent;
  let fixture: ComponentFixture<SectionPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPostComponent]
    });
    fixture = TestBed.createComponent(SectionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
