import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  apikey:string="356cc87831a69e9be4c633cbcf940a8b";

  constructor(private http:HttpClient) { }

  peliculasPopulares():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apikey}&language=en-US&page=1`)
  }

}
