import { Injectable } from '@angular/core';
import { DadosInsumo } from '../model/dadosInsumo';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {
  dadosInsumo: DadosInsumo = new DadosInsumo()
  insumos: DadosInsumo[] = []
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
      for(let i = 0; i <  localStorage.length; c++){
        let clienteId: string = localStorage.key(c) || ""
        let clienteConvertido = JSON.parse(localStorage.getItem(clienteId) || "")
        this.clientesCadastrados.push(clienteConvertido)
      }
   
  }
}
