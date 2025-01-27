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
  classeFicha:string = ""
  clientesCadastrados: any[] = this.cadastroService.clientesCadastrados
  clientesEditveis: any[] = []
  habBTNEdit: boolean = true
 

constructor(private router: Router, private cadastroService: CadastroService){
  this.cadastroService.obterDadosStorage()
}

setClienteCadastrado(cliente: any){
  this.clientesCadastrados = cliente
}

buscaClientes(nomes: string){
  console.log(nomes)
}

habilitarEdit(cliente: string){
  this.habBTNEdit = false

  if( this.clientesEditveis.length > 0){
    this.clientesEditveis.pop()
  }

  this.clientesEditveis.push(this.cadastroService.obterDadosStorageEditavel(cliente))
  console.log(this.clientesEditveis)
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
}

abrirFicha(classe: string, ficha: any){
  ficha.classList.toggle(classe)
}

navegarHome(){
  this.router.navigate(['./'])
}



}
