import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro[] = [];

  livroSelecionadaParaEdicao: Livro = new Livro();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  livroService = inject(LivroService);

  constructor() {

    this.listAll();
    //this.exemploErro();

  }


  listAll() {

    this.livroService.listAll().subscribe({
      next: lista => { 
        this.lista = lista;
      },
      error: erro => { 
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  exemploErro() {

    this.livroService.exemploErro().subscribe({
      next: lista => { 
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


  adicionar(modal: any) {
    this.livroSelecionadaParaEdicao = new Livro();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, livro: Livro, indice: number) {
    this.livroSelecionadaParaEdicao = Object.assign({}, livro); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarLivro(livro: Livro) {

    this.listAll();


    this.modalService.dismissAll();

  }

}
