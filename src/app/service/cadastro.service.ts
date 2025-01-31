import { Injectable } from '@angular/core';
import { DadosC } from '../model/dadosCliente';

@Injectable({
  providedIn: 'root'
})


export class CadastroService{
  dadosC = new DadosC()
  clientesCadastrados : any[] = []
  clientesEditaveis?: string;

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
  receberDadosEditaveis(dados: DadosC, id: string){
    this.dadosC._Nome = dados._nome
    this.dadosC._Contato = dados._contato
    this.dadosC._Endereco = dados._endereco
    this.dadosC._Bike = dados._bike
    this.dadosC._UltServico = dados._ultServico
    this.dadosC._Data = dados._data
    this.dadosC._Retorno = dados._retorno
    this.dadosC._MaisInfo = dados._maisInfo
    this.dadosC._valor = dados._valor
    this.dadosC._Id = dados._id
    this.enviarDadosEditaveis(this.dadosC, id)
  }

  enviarDados(dados: DadosC, id: string){
    let dadosConvertidos = JSON.stringify(dados)
    window.localStorage.setItem(id, dadosConvertidos)
  
  }
  enviarDadosEditaveis(dados: DadosC, id: string){
    let dadosConvertidos = JSON.stringify(dados)
    window.localStorage.setItem(id, dadosConvertidos)
  
  }

  removerDado(id: string){
    localStorage.removeItem(id)
     this.obterDadosStorage()

  }

  obterDadosStorage(){
    this.clientesCadastrados = []
      for(let c = 0; c <  localStorage.length; c++){
        let clienteId: string = localStorage.key(c) || ""
        let clienteConvertido = JSON.parse(localStorage.getItem(clienteId) || "")
        this.clientesCadastrados.push(clienteConvertido)
      }
   
  }

 

  obterDadosStorageEditavel(id: string){
    let clienteConvertido = JSON.parse(localStorage.getItem(id) || "")
    this.clientesEditaveis = clienteConvertido
    return this.clientesEditaveis
  }


}

