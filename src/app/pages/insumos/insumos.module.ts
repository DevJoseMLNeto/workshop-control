import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsumosComponent } from './insumos.component';


@NgModule({
  declarations: [
    InsumosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InsumosComponent
  ]
})
export class InsumosModule { }
