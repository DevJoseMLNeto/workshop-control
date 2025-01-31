import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosC } from 'src/app/model/dadosCliente';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [CadastroService]
})
export class CadastroComponent{

  indexForms: boolean = false
  indexMain: boolean = true
  indexEdit: boolean = false
  indexMenssages: boolean = false
  classeFicha:string = ""
  clientesCadastrados: any[] = [];
  clientesEditveis: any[] = []
  habBTNEdit: boolean = true
  copiaClientesCadastrados: any[] = []
 

constructor(private router: Router, private cadastroService: CadastroService){
  this.cadastroService.obterDadosStorage()
  this.clientesCadastrados = this.cadastroService.clientesCadastrados
  
}

setClienteCadastrado(cliente: any){
  this.clientesCadastrados = cliente
}

buscaClientes(busca: string){
  this.cadastroService.obterDadosStorage()
  console.log(this.cadastroService.clientesCadastrados)
  let encontrado = this.cadastroService.clientesCadastrados.filter((evt)=>{
    if(evt._nome.startsWith(busca)){
      return evt
    }
  })

  this.clientesCadastrados = []
  for(let c = 0; c < encontrado.length; c++){
    this.clientesCadastrados.push(encontrado[c])
  }
  
}

habilitarEdit(cliente: string){
  this.habBTNEdit = false

  if( this.clientesEditveis.length > 0){
    this.clientesEditveis.pop()
  }

  this.clientesEditveis.push(this.cadastroService.obterDadosStorageEditavel(cliente))
}
abrirForm(){
  this.indexForms = true
  this.indexMain =false
}



abrirFormEdit(){
  this.indexEdit = true
  this.indexMain = false
}

fecharForm(){
  this.indexForms = false
  this.indexEdit = false
  this.indexMain = true
  if(this.indexMain){
    this.habBTNEdit = true
  }
}


abrirFicha(classe: string, ficha: any){
  ficha.classList.toggle(classe)
}

navegarHome(){
  this.router.navigate(['./'])
}

removerCadastro(){
  this.indexMenssages = true
  this.indexMain = false
  
}

messageConfirm(){
  let id = this.clientesEditveis[0]._id
  this.cadastroService.removerDado(id)
  this.setClienteCadastrado(this.cadastroService.clientesCadastrados)

  
}


}
