import { Injectable } from '@angular/core';
import { DadosInsumo } from '../model/dadosInsumo';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {
  dadosInsumo: DadosInsumo = new DadosInsumo()
  insumos: DadosInsumo[] = []
  insumoEditaveis?: string;
  constructor() { }



  receberDados(dados: DadosInsumo){
    this.dadosInsumo = dados
    this.dadosInsumo.setId()
    this.enviarDados(this.dadosInsumo, this.dadosInsumo.Id)
  }

  enviarDados(dados: DadosInsumo, id: string){
    let dadosConvertidos = JSON.stringify(dados)
    window.localStorage.setItem(id, dadosConvertidos)
  }

  obterDadosStorage(){
    this.insumos = []
      for(let i = 0; i <  localStorage.length; i++){
        let insumoId: string = localStorage.key(i) || ""
        if(insumoId.charAt(0)=="I"){
          let clienteConvertido = JSON.parse(localStorage.getItem(insumoId) || "")
          this.insumos.push(clienteConvertido)
        }
      }
   
  }

  obterDadosStorageEditavel(id: string){
    let clienteConvertido = JSON.parse(localStorage.getItem(id) || "")
    this.insumoEditaveis = clienteConvertido
    return this.insumoEditaveis
  }
}
