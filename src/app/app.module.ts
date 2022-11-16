import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
