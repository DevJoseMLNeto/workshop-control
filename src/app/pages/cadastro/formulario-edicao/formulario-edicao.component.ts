import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro.component';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-formulario-edicao',
  templateUrl: './formulario-edicao.component.html',
  styleUrls: ['./formulario-edicao.component.css'],
  providers: [CadastroService]
})
export class FormularioEdicaoComponent {
  nome:string = ""
  contato:string = ""
  endereco:string = ""
  bike:string = ""
  ultServico:string = ""
  data:string = ""
  retorno:string = ""
  valor:string = ""
  maisInfo:string = ""
  constructor(private cadastroComponent: CadastroComponent, private cadastroService:CadastroService){
    
  }

  enviarDados(){
    this.cadastroService.receberDados(this.nome,this.contato,this.endereco,this.bike,this.ultServico,this.data, this.retorno, this.valor, this.maisInfo)
    this.cadastroComponent.fecharForm()
  }
  fecharForm(){
    this.cadastroComponent.fecharForm()
  }

  

}
