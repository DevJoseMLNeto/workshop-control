import { Component, OnInit } from '@angular/core';
import { Chart, ChartItem } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-grafico-mensal',
  templateUrl: './grafico-mensal.component.html',
  styleUrls: ['./grafico-mensal.component.css']
})
export class GraficoMensalComponent implements OnInit {

constructor(){
}

ngOnInit(): void {
  Chart.register(ChartDataLabels)
  this.atualizarGrafico()
}


atualizarGrafico(){
  let graf = document.getElementById("graficoMensal")

  let grafo = new Chart(graf as ChartItem, {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      datasets: [{
          barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [10, 20, 30, 40, 50, 60, 70]
      }]
    },
    options: {
      plugins:{
        title: {
          display: true,
          position: 'top',
          text: "Lucro em cada mês do ano"
        }
      },
      events: []
    }
  })
  grafo.data.datasets.map((el)=> {
    el.data
  })
}


}
