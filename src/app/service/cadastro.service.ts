import { inject, Injectable } from '@angular/core';
import { Clientes } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CadastroService{
  dadosC! : Clientes;
  clientesCadastrados : Clientes[] = []
  clientesEditaveis?: string;
  API = "http://localhost:8080/api/v1/clientes"
  http = inject(HttpClient)

  constructor(){

  }

  findAll(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.API+"/get");
  }

  save(cliente: Clientes): Observable<string> {
    return this.http.post<string>(this.API+"/save", cliente);
  }

  updade(cliente: Clientes, id: number): Observable<string> {
    return this.http.put<string>(this.API+"/update/"+id,cliente)
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType:'json'})
  }
  
  findBynome(nome: String) : Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.API+"/findByNome?nome="+nome)
  }




  
 
}

