import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {}
  topTracks: any[] = [];


  loadingArtist: boolean ;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService
            
    ) {
    this.loadingArtist = false;
    this.router.params.subscribe( params => {
      this.verArtista(params['id']);
      this.getTopTracks(params['id']);
    } )

   }

  verArtista( id: string ){

    this.loadingArtist = false;

    this.spotify.verArtista(id)
        .subscribe(artista => {
          /* console.log(artista); */
          this.artista = artista;
          this.loadingArtist = true;
        })
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id)
        .subscribe(topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
          
        })
  }

}
