import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabioComponent } from './contabio.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ControleComponent } from './controle/controle.component';


@NgModule({
  declarations: [
    ContabioComponent,
    GraficosComponent,
    ControleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContabioComponent
  ]
})
export class ContabioModule { }
