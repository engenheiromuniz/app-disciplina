import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormDisciplinaComponent } from './pages/form-disciplina/form-disciplina.component';
import { ListaDisciplinaComponent } from './pages/lista-disciplina/lista-disciplina.component';
import { AtualizarDisciplinaComponent } from './pages/atualizar-disciplina/atualizar-disciplina.component';
import { DeletarDisciplinaComponent } from './pages/deletar-disciplina/deletar-disciplina.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormDisciplinaComponent },
  { path: 'lista', component: ListaDisciplinaComponent },
  { path: 'atualizar', component: AtualizarDisciplinaComponent },
  { path: 'deletar', component: DeletarDisciplinaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } 
];
