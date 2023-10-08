import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carros-list',
  templateUrl: './carros-list.component.html',
  styleUrls: ['./carros-list.component.scss']
})
export class CarrosListComponent {

  lista: Carro[] = [];

  modalService = inject(NgbModal);


  constructor(){

    this.lista.push(new Carro("Subaru", 2002));
    this.lista.push(new Carro("123", 2003));
    this.lista.push(new Carro("321", 2020));
    this.lista.push(new Carro("AAAA", 2012));
    this.lista.push(new Carro("BBBB", 1950));
    this.lista.push(new Carro("CCCC", 1999));

  }

  abrirModal(abc: any, id?: number){
    this.modalService.open(abc, { size: 'lg' });
  }

  addNaLista(carro: Carro){
    this.lista.push(carro);
    this.modalService.dismissAll();
  }

}
