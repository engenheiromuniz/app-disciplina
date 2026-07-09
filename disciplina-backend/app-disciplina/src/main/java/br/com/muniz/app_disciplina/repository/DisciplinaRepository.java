package br.com.muniz.app_disciplina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.muniz.app_disciplina.model.Disciplina;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long>{

}
