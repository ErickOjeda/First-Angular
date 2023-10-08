import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';

@Component({
  selector: 'app-carro-details',
  templateUrl: './carro-details.component.html',
  styleUrls: ['./carro-details.component.scss']
})
export class CarroDetailsComponent {

  roteador = inject(ActivatedRoute);
  carro: Carro = new Carro("", 0);

  @Output() retorno = new EventEmitter<Carro>();


  constructor (){
    let id = this.roteador.snapshot.paramMap.get('id');
  }

  salvar(){
    this.retorno.emit(this.carro);
  }
}
