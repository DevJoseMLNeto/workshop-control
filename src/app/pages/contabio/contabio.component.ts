import { Component, OnInit, ViewChild } from '@angular/core';
import { Clientes } from 'src/app/model/cliente';
import { CaixaData, Entrada, Saida } from 'src/app/model/contabio';
import { CadastroService } from 'src/app/service/cadastro.service';
import { ContabioService } from 'src/app/service/contabio.service';
import { GraficosComponent } from './graficos/graficos.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contabio',
  templateUrl: './contabio.component.html',
  styleUrls: ['./contabio.component.css']
})
export class ContabioComponent implements OnInit{

  entrada!: Entrada[];
  saida!: Saida[];
  caixa!: CaixaData[];
  caixaAtual: CaixaData =  { data: '', entrada: 0, saida: 0, total: 0 };
  dataAtual = new Date().toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' });
  @ViewChild(GraficosComponent) graficosComponent!: GraficosComponent;

  constructor(private contabioService: ContabioService, private router:Router){}


  ngOnInit(): void {
    this.findCaixa()
    this.findEntrada()
    this.findSaida()
  }


  findEntrada(){
    this.contabioService.findAllEntrada().subscribe({
      next: valores => {
        this.entrada = valores
      },
      error: err => {
        console.error(err)
      }
    })
  }
  findSaida(){
    this.contabioService.findAllSaida().subscribe({
      next: valores => {
        this.saida = valores
      },
      error: err => {
        console.error(err)
      }
    })
  }

  findCaixa(){
    this.contabioService.findAll().subscribe({
      next: valores => {
           
        this.caixa = valores
        this.caixaAtual = this.caixa.find(elm => elm.data === this.dataAtual) || { data: '', entrada: 0, saida: 0, total: 0 }
        
        if (this.graficosComponent) {
        this.graficosComponent.atualizarGrafico();
      }
      },
      error: err => {
        console.error(err)
      }
    })
  }
  


  navegar(page: string){
    this.router.navigate(['./'+ page])
  }












}
