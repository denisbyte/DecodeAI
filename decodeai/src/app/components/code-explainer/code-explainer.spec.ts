import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExplainer } from './code-explainer';

describe('CodeExplainer', () => {
  let component: CodeExplainer;
  let fixture: ComponentFixture<CodeExplainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeExplainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeExplainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
