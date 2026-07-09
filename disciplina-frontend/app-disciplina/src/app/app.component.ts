import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDisciplinaComponent } from './pages/lista-disciplina/lista-disciplina.component';
import { FormDisciplinaComponent } from './pages/form-disciplina/form-disciplina.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDisciplinaComponent, FormDisciplinaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-disciplina';
}
