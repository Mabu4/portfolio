import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintAndPrivacyComponent } from './imprint-and-privacy.component';

describe('ImprintAndPrivacyComponent', () => {
  let component: ImprintAndPrivacyComponent;
  let fixture: ComponentFixture<ImprintAndPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprintAndPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprintAndPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
