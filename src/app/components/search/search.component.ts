import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
  
})
export class SearchComponent  {
  busquedaArtistas:any[] = []
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string){
    
    this.loading = true;
    console.log(termino);
    this.spotify.getArtistas(termino)
        .subscribe( (data) =>{
          console.log(data);
          this.busquedaArtistas =  data;
          this.loading = false;

        });
  }
}
