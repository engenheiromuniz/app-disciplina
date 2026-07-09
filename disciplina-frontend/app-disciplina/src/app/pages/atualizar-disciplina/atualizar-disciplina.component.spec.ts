import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarDisciplinaComponent } from './atualizar-disciplina.component';

describe('AtualizarDisciplinaComponent', () => {
  let component: AtualizarDisciplinaComponent;
  let fixture: ComponentFixture<AtualizarDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
