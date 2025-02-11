import { Component } from '@angular/core';
import { DadosC } from 'src/app/model/dadosCliente';
import { CadastroComponent } from '../cadastro.component';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-formulario-novo-servico',
  templateUrl: './formulario-novo-servico.component.html',
  styleUrls: ['./formulario-novo-servico.component.css']
})
export class FormularioNovoServicoComponent {
 dadosC = new DadosC()
 novosDados = {
   novaData: '',
   novoValor:'',
   novoServico: '',
   novaDescricao: '',
 }

  constructor(private cadastroComponent: CadastroComponent, private cadastroService:CadastroService){
    this.dadosC = this.cadastroComponent.clientesEditveis[0]
    this.novosDados.novaData = this.dadosC._ultServico[this.dadosC.index]._data
    this.novosDados.novoValor = this.dadosC._ultServico[this.dadosC.index]._valor
    this.novosDados.novoServico = this.dadosC._ultServico[this.dadosC.index]._servico
    this.novosDados.novaDescricao = this.dadosC._ultServico[this.dadosC.index]._maisInfo
  }

  enviarDados(){ 

    this.cadastroService.receberDadosNovosServicos(this.dadosC, this.dadosC._id, this.novosDados)
    this.cadastroService.obterDadosStorage()
     this.cadastroComponent.ngOnInit()
    this.cadastroComponent.fecharForm()
  }
  
  fecharForm(){
    this.cadastroComponent.fecharForm()
  }
}
