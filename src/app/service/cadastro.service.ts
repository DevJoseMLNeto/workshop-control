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

  
  receberDados(dados: DadosC){
    this.dadosC = dados
    this.dadosC.setId()
    this.enviarDados(this.dadosC, this.dadosC.Id)

  }

  receberDadosEditaveis(dados: DadosC, id: string){
    this.enviarDados(dados, id)
  }

  receberDadosNovosServicos(dados:DadosC, id: string, novoDados: any){
  
    this.dadosC = dados

    this.dadosC._ultServico.push({
      _data:  novoDados.novaData,
      _servico:   novoDados.novoServico,
      _valor:  novoDados.novoValor,
      _maisInfo:  novoDados.novaDescricao,
      _index: false
    })

    this.dadosC.index =  this.dadosC._ultServico.length -1

    

    console.log(this.dadosC)
    this.enviarDados(this.dadosC, id)
  }

  enviarDados(dados: DadosC, id: string){
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
        if(clienteId.charAt(0) == "C"){
          let clienteConvertido = JSON.parse(localStorage.getItem(clienteId) || "")
          this.clientesCadastrados.push(clienteConvertido)
        }else{}
      }
   
  }

 

  obterDadosStorageEditavel(id: string){
    let clienteConvertido = JSON.parse(localStorage.getItem(id) || "")
    this.clientesEditaveis = clienteConvertido
    return this.clientesEditaveis
  }


}

