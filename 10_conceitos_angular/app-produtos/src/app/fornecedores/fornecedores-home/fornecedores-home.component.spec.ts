import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresHomeComponent } from './fornecedores-home.component';

describe('FornecedoresHomeComponent', () => {
  let component: FornecedoresHomeComponent;
  let fixture: ComponentFixture<FornecedoresHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedoresHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedoresHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
