import { Component } from '@angular/core';
import { DadosInsumo } from 'src/app/model/dadosInsumo';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent {
dadosInsumos: DadosInsumo = new DadosInsumo()
indexFormularioAdd: boolean = false
indexMain: boolean = true
constructor(){
  
}

abrirForms(){
  this.indexFormularioAdd = true
  this.indexMain = false
}
fecharForms(){
  this.indexFormularioAdd = false
  this.indexMain = true

}
}
