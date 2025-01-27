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
  infos: DadosC = {
    _nome: "",
    _contato: "",
    _endereco: "",
    _bike: "",
    _ultServico: "",
    _data: "",
    _retorno: "",
    _valor: "",
    _maisInfo: "",
    _id: "",
    setId() {
    },
    Id: '',
    Nome: '',
    Contato: '',
    Endereco: '',
    Bike: '',
    UltServico: '',
    Data: '',
    Retorno: '',
    Valor: '',
    MaisInfo: '',
    _Nome: '',
    _Contato: '',
    _Endereco: '',
    _Bike: '',
    _UltServico: '',
    _Data: '',
    _Retorno: '',
    _Valo: '',
    _MaisInfo: '',
    _Id: ''
  }
  constructor(private cadastroComponent: CadastroComponent, private cadastroService:CadastroService){
    this.infos = this.cadastroComponent.clientesEditveis[0]
    
  }

  enviarDados(){
    this.cadastroService.receberDadosEditaveis(this.infos, this.infos._id)
    this.cadastroService.obterDadosStorage()
    this.cadastroComponent.setClienteCadastrado( this.cadastroService.clientesCadastrados)
    this.cadastroComponent.fecharForm()
  }
  fecharForm(){
    this.cadastroComponent.fecharForm()
  }

  

}
