import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IndexComponent } from './index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosListComponent } from './carro/carros-list/carros-list.component';
import { LivrosListComponent } from './livro/livros-list/livros-list.component';
import { LoginComponent } from './system/login/login.component';
import { CarroDetailsComponent } from './carro/carro-details/carro-details.component';
import { LivroDetailComponent } from './livro/livro-detail/livro-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    CarrosListComponent,
    LivrosListComponent,
    LoginComponent,
    CarroDetailsComponent,
    LivroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
