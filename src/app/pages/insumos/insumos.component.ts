import { Component} from '@angular/core';
import { OnInit} from '@angular/core';
import { Insumos } from 'src/app/model/insumo';
import { Router } from '@angular/router';
import { InsumosService } from 'src/app/service/insumos.service';
@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit{

insumoCadastrado!: Insumos[];
insumoEditavel!: Insumos[];
indexFormularioAdd: boolean = false
indexMain: boolean = true


constructor(private router: Router, private insumoService: InsumosService){
  
}

ngOnInit(): void {
  this.insumoService.getAll().subscribe({
    next: insumos => {
      this.insumoCadastrado = insumos
      console.log(this.insumoCadastrado)
    },
    error: err => {
      console.log(err)
    }
  })
}

abrirForms(){
  this.indexFormularioAdd = true
  this.indexMain = false
}

fecharForms(){
  
  this.indexFormularioAdd = false
  this.indexMain = true
}

retornarHome(){
  this.router.navigate(['./'])
}


}
