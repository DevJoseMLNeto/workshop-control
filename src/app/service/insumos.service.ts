import { inject, Injectable } from '@angular/core';
import { Insumos, ProdutoMenssagem } from '../model/insumo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class InsumosService {



 http = inject(HttpClient)
 API = "http://localhost:8080/api/v1/produtos/"

 constructor(){}

 


 getAll(): Observable<Insumos[]>{
  return this.http.get<Insumos[]>(this.API+"getAll")
 }

 save(insumos: Insumos): Observable<ProdutoMenssagem>{
  return this.http.post<ProdutoMenssagem>(this.API+"save", insumos);
 }

 deleteById(id: number): Observable<ProdutoMenssagem>{
  return this.http.delete<ProdutoMenssagem>(this.API+"delete/"+id)
 }

 updateById(insumo: Insumos): Observable<ProdutoMenssagem>{
  console.log(insumo.id)
  return this.http.put<ProdutoMenssagem>(this.API+"update/"+insumo.id, insumo)
 }

 updateColumnById(id: number, res: boolean ): Observable<ProdutoMenssagem>{
  return this.http.put<ProdutoMenssagem>(this.API+"updateColumn/"+id, res)
 }


}
