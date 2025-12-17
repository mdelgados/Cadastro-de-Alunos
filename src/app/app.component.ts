import { Component } from '@angular/core';

interface Aluno {
  nome: string;
  nota1: number | null;
  nota2: number | null;
  media: number;
  condicao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-final';

  nome = '';
  nota1: number | null = null;
  nota2: number | null = null;

  alunos: Aluno[] = [];
  editandoIndex: number | null = null;

  salvar() {
    if (!this.nome || this.nota1 === null || this.nota2 === null) {
      return;
    }

    const media = (this.nota1 + this.nota2) / 2;
    const condicao = media >= 7 ? 'Aprovado' : 'Reprovado';

    const aluno: Aluno = {
      nome: this.nome,
      nota1: this.nota1,
      nota2: this.nota2,
      media,
      condicao
    };

    if (this.editandoIndex !== null) {
      this.alunos[this.editandoIndex] = aluno;
      this.editandoIndex = null;
    } else {
      this.alunos.push(aluno);
    }

    this.limparFormulario();
  }

  editar(index: number) {
    const aluno = this.alunos[index];
    this.nome = aluno.nome;
    this.nota1 = aluno.nota1;
    this.nota2 = aluno.nota2;
    this.editandoIndex = index;
  }

  excluir(index: number) {
    this.alunos.splice(index, 1);
  }

  limparFormulario() {
    this.nome = '';
    this.nota1 = null;
    this.nota2 = null;
  }
}