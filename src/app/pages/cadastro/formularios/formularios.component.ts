import { Component, inject, Injectable } from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { CadastroComponent } from '../cadastro.component';
import { CadastroService } from 'src/app/service/cadastro.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DadosC } from 'src/app/model/dadosCliente';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
  providers: [CadastroService]
})


export class FormulariosComponent {
  nome: string = ""
  contato:string = ""
  endereco:string = ""
  bike:string = ""
  ultServico:string = ""
  data:string = ""
  retorno:string = ""
  valor:string = ""
  maisInfo:string = ""
  meuFormGroup! : FormGroup;

  constructor(private cadastroComponent: CadastroComponent, private cadastroService:CadastroService){
    
    
  }
  

fecharForm(){
  this.cadastroComponent.fecharForm()
}

enviarDados(){
  this.cadastroService.receberDados(this.nome,this.contato,this.endereco,this.bike,this.ultServico,this.data, this.retorno, this.valor, this.maisInfo)
  this.cadastroService.obterDadosStorage()
  this.cadastroComponent.setClienteCadastrado( this.cadastroService.clientesCadastrados)
  this.cadastroComponent.fecharForm()
}



}
