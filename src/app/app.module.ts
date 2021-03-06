import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


//Importar RUtas
import { ROUTES } from "./app.routes";
import { SpotifyService } from './services/spotify.service';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { DomseguroPipe } from "./pipes/domseguro.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    SearchComponent,
    NavbarComponent,
    LoadingComponent,
    NoimagePipe,
    TarjetasComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash:true} )
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
