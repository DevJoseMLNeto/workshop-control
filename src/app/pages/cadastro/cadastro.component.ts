import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent{

  indexForms: boolean = false
  indexMain: boolean = true
  indexEdit: boolean = false

constructor(private router: Router){
}

buscaClientes(nomes: string){
  console.log(nomes)
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

navegarHome(){
  this.router.navigate(['./'])
}

}
