import { Component } from '@angular/core';
import { InsumosComponent } from '../insumos.component';
import { OnInit } from '@angular/core';
import { DadosInsumo } from 'src/app/model/dadosInsumo';
import { InsumosService } from 'src/app/service/insumos.service';
@Component({
  selector: 'app-formulario-insumos',
  templateUrl: './formulario-insumos.component.html',
  styleUrls: ['./formulario-insumos.component.css']
})
export class FormularioInsumosComponent implements OnInit{
  dadosInsumo: DadosInsumo = new DadosInsumo()
  constructor(private insumosComponent: InsumosComponent, private insumosService: InsumosService){

  }

  ngOnInit(){
  }

  fecharForm(){
    this.insumosComponent.fecharForms()
  }

  enviarDados(){
    this.insumosService.receberDados(this.dadosInsumo)
    this.insumosComponent.fecharForms()
  }

  
}
