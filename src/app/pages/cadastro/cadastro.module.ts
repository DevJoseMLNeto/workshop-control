import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FichaCadastroClienteComponent } from './ficha-cadastro-cliente/ficha-cadastro-cliente.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormularioEdicaoComponent } from './formulario-edicao/formulario-edicao.component';


@NgModule({
  declarations: [
    CadastroComponent,
    FichaCadastroClienteComponent,
    FormulariosComponent,
    FormularioEdicaoComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CadastroComponent,
    FormulariosComponent
  ]
})
export class CadastroModule { }
