import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaService } from '../../disciplina.service';
import { Disciplina } from '../../models/disciplina.model';

@Component({
  selector: 'app-lista-disciplina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-disciplina.component.html',
  styleUrl: './lista-disciplina.component.scss'
})
export class ListaDisciplinaComponent implements OnInit{
  disciplinas: Disciplina[] = [];

  constructor(private disciplinaService: DisciplinaService){}

  ngOnInit(): void {
    this.disciplinaService.listar().subscribe({
      next: (dados) => this.disciplinas = dados,
      error: (err) => console.error('Erro ao listar disciplina',err)
    });
  }

}
