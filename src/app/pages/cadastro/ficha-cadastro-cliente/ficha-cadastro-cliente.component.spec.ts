import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCadastroClienteComponent } from './ficha-cadastro-cliente.component';

describe('FichaCadastroClienteComponent', () => {
  let component: FichaCadastroClienteComponent;
  let fixture: ComponentFixture<FichaCadastroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaCadastroClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaCadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
