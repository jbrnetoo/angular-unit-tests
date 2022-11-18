import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ProdutoService } from './demos/arquitetura-componentes/services/produto.service';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { ContadorComponent } from './demos/contador/contador.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { TodoModule } from './demos/todo-list/todo.module';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NavegacaoModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca938c99a0e9ff91029dc'
    }),
    TodoModule
  ],
  providers: [
    ProdutoService,
    AuthGuard,
    CadastroGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
