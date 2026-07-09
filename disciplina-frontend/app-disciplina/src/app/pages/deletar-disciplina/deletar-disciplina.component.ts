import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisciplinaService } from '../../disciplina.service';

@Component({
  selector: 'app-deletar-disciplina',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './deletar-disciplina.component.html',
  styleUrls: ['./deletar-disciplina.component.scss']
})
export class DeletarDisciplinaComponent {
  id: number = 0;

  constructor(private disciplinaService: DisciplinaService) {}

  deletar() {
    if (this.id) {
      this.disciplinaService.deletar(this.id).subscribe({
        next: () => alert('Disciplina deletada com sucesso!'),
        error: (err) => alert('Erro ao deletar disciplina: ' + err)
      });
    }
  }
}
