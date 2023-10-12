import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CarroService } from 'src/app/services/carro.service';
import { Carro } from 'src/app/models/carro';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  @Input() carro: Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();

  carroService = inject(CarroService);


  constructor() {

  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.carroService.save(this.carro).subscribe({
      next: carro => { // QUANDO DÁ CERTO
        this.retorno.emit(carro);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }
}
