import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLinkComponent } from './third-link.component';

describe('ThirdLinkComponent', () => {
  let component: ThirdLinkComponent;
  let fixture: ComponentFixture<ThirdLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdLinkComponent]
    });
    fixture = TestBed.createComponent(ThirdLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
