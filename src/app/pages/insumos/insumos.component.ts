import { Component, ElementRef } from '@angular/core';
import { OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { DadosInsumo } from 'src/app/model/dadosInsumo';
import { Router } from '@angular/router';
import { InsumosService } from 'src/app/service/insumos.service';
@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit, AfterViewInit{
dadosInsumos: DadosInsumo = new DadosInsumo()
insumo: any[] = []
insumoEditavel: any = []
indexFormularioAdd: boolean = false
indexMain: boolean = true
@ViewChildren('card') cards!: QueryList<ElementRef>;

constructor(private router: Router, private insumoService: InsumosService){
  
}

ngOnInit(): void {
    this.insumoService.obterDadosStorage()
    this.insumo = this.insumoService.insumos

}

ngAfterViewInit(): void {
      this.cards.forEach((evt)=>{
        if(evt.nativeElement.firstElementChild.checked === false){
          evt.nativeElement.classList.add('indisponivel')
        }
      })
}

attView(cards: QueryList<ElementRef>){
  cards.changes.subscribe(()=>{
    cards.forEach((evt)=>{
      console.log(evt)
      if(evt.nativeElement.firstElementChild.checked === false){
        evt.nativeElement.classList.add('indisponivel')
      }
    })
  })
}



checkagem(check: boolean, insumo: any, id: string){
  if(!check){
    this.validandoOperacao(check, insumo, id)
  }else if(check){
    this.validandoOperacao(check,insumo,id)
  }
}

validandoOperacao(check: boolean, insumo: any, id: string){
  insumo.classList.toggle('indisponivel')
  if(  this.insumoEditavel.length > 0){
    this.insumoEditavel.pop()
  }
  this.insumoEditavel.push(this.insumoService.obterDadosStorageEditavel(id))
  this.insumoEditavel[0]._disponibilidade = check
  console.log(this.insumoEditavel[0],check )
  this.insumoService.enviarDados(this.insumoEditavel[0], id)
}

abrirForms(){
  this.indexFormularioAdd = true
  this.indexMain = false
}

fecharForms(){
  this.indexFormularioAdd = false
  this.indexMain = true
  this.ngOnInit()
  this.attView(this.cards)
}

retornarHome(){
  this.router.navigate(['./'])
}


}
