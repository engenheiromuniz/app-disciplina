import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisciplinaService } from '../../disciplina.service';
import { Disciplina } from '../../models/disciplina.model';

@Component({
  selector: 'app-form-disciplina',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-disciplina.component.html',
  styleUrls: ['./form-disciplina.component.scss']
})
export class FormDisciplinaComponent {
  disciplina: Disciplina = { nome: '', descricao: '' };

  constructor(private disciplinaService: DisciplinaService) {}

  salvar() {
    this.disciplinaService.salvar(this.disciplina).subscribe({
      next: () => {
        alert('Disciplina cadastrada com sucesso!');
        this.disciplina = { nome: '', descricao: '' };
      },
      error: (err) => {
        console.error('Erro ao salvar disciplina', err);
        alert('Erro ao salvar disciplina.');
      }
    });
  }
}
