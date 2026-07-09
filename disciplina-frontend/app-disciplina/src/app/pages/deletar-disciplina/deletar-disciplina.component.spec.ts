import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarDisciplinaComponent } from './deletar-disciplina.component';

describe('DeletarDisciplinaComponent', () => {
  let component: DeletarDisciplinaComponent;
  let fixture: ComponentFixture<DeletarDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletarDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
