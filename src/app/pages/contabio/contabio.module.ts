import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabioComponent } from './contabio.component';
import { GraficosComponent } from './graficos/graficos.component';


@NgModule({
  declarations: [
    ContabioComponent,
    GraficosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContabioComponent
  ]
})
export class ContabioModule { }
