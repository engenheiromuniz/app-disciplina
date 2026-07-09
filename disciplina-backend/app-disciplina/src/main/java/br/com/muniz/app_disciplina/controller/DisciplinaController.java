package br.com.muniz.app_disciplina.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.muniz.app_disciplina.model.Disciplina;
import br.com.muniz.app_disciplina.service.DisciplinaService;

@RestController
@RequestMapping("/disciplinas")
public class DisciplinaController {
	
	@Autowired
	private DisciplinaService service;
	
	@PostMapping
	public Disciplina inserirDisciplina(@RequestBody Disciplina disciplina) {
		return service.inserirDisciplina(disciplina);
	}
	
	@PostMapping("/inserirLista")
	public List<Disciplina> inserirLista(@RequestBody List<Disciplina> disciplinas){
		return service.inserirLista(disciplinas);
	}
	
	@GetMapping
	public List<Disciplina> listarDisciplina(){
		return service.listarDisciplina();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Disciplina> buscarPorId(@PathVariable Long id){
		return service.buscarPorId(id)
				.map(ResponseEntity :: ok)
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PutMapping("/{id}")
	public Disciplina atualizarDisciplina(@PathVariable Long id, @RequestBody Disciplina disciplina) {
		return service.atualizarDisciplina(id, disciplina);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletarDisciplina(@PathVariable Long id){
		service.deletarDisciplina(id);
		return ResponseEntity.noContent().build();
		
	}

}
