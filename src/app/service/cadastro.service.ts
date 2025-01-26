import { Injectable } from '@angular/core';
import { DadosC } from '../model/dadosCliente';

@Injectable({
  providedIn: 'root'
})


export class CadastroService{
  dadosC = new DadosC()
  clientesCadastrados : any[] = []

  constructor(){
  }

  
  receberDados(nome: string, contato: string, endereco: string, bike: string, ultServico: string, data: string, retorno: string, valor: string, maisInfo: string){
    this.dadosC._Nome = nome
    this.dadosC._Contato = contato
    this.dadosC._Endereco = endereco
    this.dadosC._Bike = bike
    this.dadosC._UltServico = ultServico
    this.dadosC._Data = data
    this.dadosC._Retorno = retorno
    this.dadosC._MaisInfo = maisInfo
    this.dadosC._valor = valor
    this.dadosC.setId()
    this.enviarDados(this.dadosC, this.dadosC.Id)
  }

  enviarDados(dados: DadosC, id: string){
    let dadosConvertidos = JSON.stringify(dados)
    window.localStorage.setItem(id, dadosConvertidos)
  
  }

  obterDados(){
    if(localStorage.length > 0){
      for(let c = 0; c <  localStorage.length; c++){
        let clienteId: string = localStorage.key(c) || ""
        let clienteConvertido = JSON.parse(localStorage.getItem(clienteId) || "")
        this.clientesCadastrados.push(clienteConvertido)
      }
    }
    console.log(this.clientesCadastrados)
  }


}

