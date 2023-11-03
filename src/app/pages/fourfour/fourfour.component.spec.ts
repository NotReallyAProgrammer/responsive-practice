import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourfourComponent } from './fourfour.component';

describe('FourfourComponent', () => {
  let component: FourfourComponent;
  let fixture: ComponentFixture<FourfourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourfourComponent]
    });
    fixture = TestBed.createComponent(FourfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
