import { Component, OnInit, Input } from '@angular/core';
import { CadastroService } from 'src/app/service/cadastro.service';
@Component({
  selector: 'app-ficha-cadastro-cliente',
  templateUrl: './ficha-cadastro-cliente.component.html',
  styleUrls: ['./ficha-cadastro-cliente.component.css'],
  providers: [CadastroService]
})
export class FichaCadastroClienteComponent{

  classeFicha:string = ""
  descricao:string = "Descrição" 
  clientesCadastrados: any[] = []
  
  constructor(private cadastroService:CadastroService){
    this.cadastroService.obterDados()
    this.clientesCadastrados = this.cadastroService.clientesCadastrados

  }



  abrirFicha(classe: string){
    if(this.classeFicha == ""){
      this.descricao = "Fechar descrição"
      this.classeFicha = classe
    }else if(this.classeFicha == classe){
      this.descricao = "Descrição"
      this.classeFicha = ""
    }
  }

  
}
