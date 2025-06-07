import { Component, OnInit } from '@angular/core';
import { Chart, ChartItem, PieController } from 'chart.js';
import { ContabioComponent } from '../contabio.component';
import ChartDataLabels from 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
entrada = 2100
saida = 210
total = this.entrada - this.saida

constructor(private contabioComponent: ContabioComponent){


}

ngOnInit(){
Chart.register(ChartDataLabels)
this.grafico()

}




grafico(){
  let graf = document.getElementById("grafico")

  new Chart(graf as ChartItem, {
      type: 'pie',
    data: {
      labels: ['Saida', 'Total'],
      datasets: [{
        label: '',
        data: [this.saida, this.total],
        borderWidth: 1,
        backgroundColor: ['#FFF700','#14FF30' ]
      }]
    },
    options: {
      plugins:{
        title: {
          display: true,
          position: 'top',
          text: "Entrada: R$ " + this.entrada
        }
      },
      events: []
    }
  })  
}


}
