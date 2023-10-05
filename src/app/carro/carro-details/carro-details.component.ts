import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';

@Component({
  selector: 'app-carro-details',
  templateUrl: './carro-details.component.html',
  styleUrls: ['./carro-details.component.scss']
})
export class CarroDetailsComponent {

  roteador = inject(ActivatedRoute);
  carro!: Carro;

  constructor (){
    let id = this.roteador.snapshot.paramMap.get('id');

    if (id){
      console.log("Corolla");
      console.log(2003);
    }

  }

}
