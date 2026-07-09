package br.com.muniz.app_disciplina.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.muniz.app_disciplina.model.Disciplina;
import br.com.muniz.app_disciplina.repository.DisciplinaRepository;

@Service
public class DisciplinaService {
	
	@Autowired
	private DisciplinaRepository reposit;
	
	public Disciplina inserirDisciplina(Disciplina disciplina) {
		return reposit.save(disciplina);
	}
	
	public List<Disciplina> listarDisciplina(){
		return reposit.findAll();
	}
	
	public Optional<Disciplina> buscarPorId(Long id){
		return reposit.findById(id);		
	}
	
	public List<Disciplina> inserirLista(List<Disciplina> disciplina){
		return reposit.saveAll(disciplina);
	}
	
	public Disciplina atualizarDisciplina(Long id, Disciplina disciplina) {
		if(reposit.existsById(id)) {
			disciplina.setId(id);
			return reposit.save(disciplina);
		}else {
			throw new RuntimeException("Disciplina não cadastrada.");
		}
	}
	
	public void deletarDisciplina(Long id) {
		reposit.deleteById(id);
	}

}
