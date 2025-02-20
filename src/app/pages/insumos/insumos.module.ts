import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsumosComponent } from './insumos.component';
import { FormularioInsumosComponent } from './formulario-insumos/formulario-insumos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InsumosComponent,
    FormularioInsumosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    InsumosComponent,
    FormularioInsumosComponent

  ]
})
export class InsumosModule { }
