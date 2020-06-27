import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  alunos = [
    new Aluno(
      'Gabriel Euzébio Dicieri',
      24,
      'dicierigabriel@gmail.com',
      'Engenharia da Computação'
    ),
    new Aluno(
      'Paulo Belo Kaari',
      20,
      'caidiboca_paulinho@gmail.com',
      'Engenharia da Computação'
    ),
    new Aluno('Nubia Nunes', 25, 'nubianunes@gmail.com', 'Design'),
    new Aluno(
      'Arthur Moledo do Val',
      33,
      'ass.arthurdoval@gmail.com',
      'Engenharia Química'
    ),
    new Aluno(
      'Alfredo Egydio Arruda Villela Filho',
      51,
      'alfredo.egydio@itausa.com.br',
      'Engenharia Mecânica'
    ),
  ];

  saveAluno(aluno: Aluno) {
    this.alunos.unshift(aluno);
  }

  constructor() {}

  ngOnInit(): void {}
}
