import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CarrosListComponent } from './carro/carros-list/carros-list.component';
import { LivrosListComponent } from './livro/livros-list/livros-list.component';
import { LoginComponent } from './system/login/login.component';
import { CarroDetailsComponent } from './carro/carro-details/carro-details.component';
import { LivroDetailComponent } from './livro/livro-detail/livro-detail.component';

const routes: Routes = [

  {path:"", redirectTo: "login", pathMatch: 'full'},
  {path:"login", component: LoginComponent},
  {path:"home", component: IndexComponent},

  {
    path: "admin", component: IndexComponent, children: [


      { path: "carros", component: CarrosListComponent },
      { path: "carros/editar/:id", component: CarroDetailsComponent },

      { path: "livros", component: LivrosListComponent },
      { path: "livros/novo", component: LivroDetailComponent },
      { path: "livros/editar/:id", component: LivroDetailComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
