import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro.component';
import { CadastroService } from 'src/app/service/cadastro.service';
import { DadosC } from 'src/app/model/dadosCliente';

@Component({
  selector: 'app-formulario-edicao',
  templateUrl: './formulario-edicao.component.html',
  styleUrls: ['./formulario-edicao.component.css'],
  providers: [CadastroService]
})

export class FormularioEdicaoComponent {

  dadosC = new DadosC()

  constructor(private cadastroComponent: CadastroComponent, private cadastroService:CadastroService){
  
    this.dadosC = this.cadastroComponent.clientesEditveis[0]
    console.log(this.dadosC)
  }

  enviarDados(){
    this.cadastroService.receberDadosEditaveis(this.dadosC, this.dadosC._id)
    this.cadastroService.obterDadosStorage()
    this.cadastroComponent.ngOnInit()
    this.cadastroComponent.fecharForm()
  }
  
  fecharForm(){
    this.cadastroComponent.fecharForm()
  }

  

}
