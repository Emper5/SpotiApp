import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token :string = "Bearer BQAF7VbUDmE2BwwGTN5q5b_Qd7OxLy-gB_cwd_Mash39PXcxUJdbtyO_GOZoqV6gxYEV9c2W8hHn06cIIu4"

  constructor(private http: HttpClient ) { 
    console.log('Spotify service listo.')
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': this.token
    })

    return this.http.get(url, {  headers }
    )
  }
   

  getNewReleases() {
         
    return this.getQuery('browse/new-releases?limit=21')
              .pipe( map( data => data['albums'].items));
    
  }

  getArtistas(termino: string) {
        
  return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map( data => data['artists'].items));


  }

  verArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe( map( data => data['tracks']));
  
  }
}

