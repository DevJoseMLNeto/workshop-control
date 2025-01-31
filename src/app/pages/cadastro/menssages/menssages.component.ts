import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro.component';

@Component({
  selector: 'app-menssages',
  templateUrl: './menssages.component.html',
  styleUrls: ['./menssages.component.css']
})
export class MenssagesComponent {

  clienteRemover: any;
  constructor(private cadastroComponent: CadastroComponent){
    this.clienteRemover = this.cadastroComponent.clientesEditveis[0]
    console.log(this.clienteRemover)
  }

  cancelarOperation(){
    this.cadastroComponent.indexMenssages = false
    this.cadastroComponent.indexMain = true
    if(this.cadastroComponent.indexMain){
      this.cadastroComponent.habBTNEdit = true
    }
  }

  confirmarOperation(){
    this.cadastroComponent.messageConfirm()
    this.cadastroComponent.indexMenssages = false
    this.cadastroComponent.indexMain = true
    if(this.cadastroComponent.indexMain){
      this.cadastroComponent.habBTNEdit = true
    }
  }
}
