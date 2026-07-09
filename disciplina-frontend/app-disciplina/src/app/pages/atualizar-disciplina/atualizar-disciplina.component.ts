import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisciplinaService } from '../../disciplina.service';
import { Disciplina } from '../../models/disciplina.model';

@Component({
  selector: 'app-atualizar-disciplina',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atualizar-disciplina.component.html',
  styleUrls: ['./atualizar-disciplina.component.scss']
})
export class AtualizarDisciplinaComponent {
  disciplina: Disciplina = { id: 0, nome: '', descricao: '' };

  constructor(private disciplinaService: DisciplinaService) {}

  atualizar() {
    if (this.disciplina.id) {
      this.disciplinaService.atualizar(this.disciplina.id, this.disciplina).subscribe({
        next: () => alert('Disciplina atualizada com sucesso!'),
        error: (err) => alert('Erro ao atualizar disciplina: ' + err)
      });
    }
  }
}
