import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CaixaData, ContabioMenssagem, Entrada, Saida } from '../model/contabio';
@Injectable({
  providedIn: 'root'
})
export class ContabioService {
  http = inject(HttpClient)
  API = "http://localhost:8080/api/v1/"
 
  constructor() { }


  save(saida: Saida): Observable<ContabioMenssagem>{
    return this.http.post<ContabioMenssagem>(this.API+ "saida/save", saida, {responseType: 'json'}  )
  }
  
  findAllSaida(): Observable<Saida[]>{
    return this.http.get<Saida[]>(this.API+ "saida/findAll", {responseType: 'json'} )
  }
  
  findAllEntrada(): Observable<Entrada[]>{
    return this.http.get<Entrada[]>(this.API+ "entrada/findAll", {responseType: 'json'} )
  }

  findAll(): Observable<CaixaData[]>{
    return this.http.get<CaixaData[]>(this.API+ "contabio/findAll", {responseType: 'json'} )
  }

}
