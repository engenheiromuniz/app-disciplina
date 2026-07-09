import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from './models/disciplina.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private apiUrl = 'http://localhost:8080/disciplinas';

  constructor(private http: HttpClient) { }

  listar(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiUrl);
  }

  salvar(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.post<Disciplina>(this.apiUrl, disciplina);
  }

  atualizar(id: number, disciplina: Disciplina): Observable<Disciplina> {
    return this.http.put<Disciplina>(`${this.apiUrl}/${id}`, disciplina);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
