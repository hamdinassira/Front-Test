import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfImageComponent } from './pdf-image.component';

describe('PdfImageComponent', () => {
  let component: PdfImageComponent;
  let fixture: ComponentFixture<PdfImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
