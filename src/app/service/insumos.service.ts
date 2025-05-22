import { inject, Injectable } from '@angular/core';
import { Insumos } from '../model/insumo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {
 http = inject(HttpClient)
 API: String = "http://Localhost:8080/api/v1/produtos"
 constructor(){

 }

 getAll(): Observable<Insumos[]>{
  return this.http.get<Insumos[]>(this.API+"/getAll")
 }



}
