import { Component } from '@angular/core';
import { InsumosComponent } from '../insumos.component';
import { OnInit } from '@angular/core';
import { Insumos } from 'src/app/model/insumo';
import { InsumosService } from 'src/app/service/insumos.service';
@Component({
  selector: 'app-formulario-insumos',
  templateUrl: './formulario-insumos.component.html',
  styleUrls: ['./formulario-insumos.component.css']
})
export class FormularioInsumosComponent implements OnInit{

  constructor(private insumosComponent: InsumosComponent, private insumosService: InsumosService){

  }

  ngOnInit(){
  }

  fecharForm(){
    this.insumosComponent.fecharForms()
  }

  enviarDados(){

  }

  
}
