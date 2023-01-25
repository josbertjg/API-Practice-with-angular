import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../services/peliculas.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private peliculas:PeliculasService) { }

  arrPeliculas:any;

  ngOnInit(): void {
   this.peliculas.peliculasPopulares().subscribe(data=>{
    this.arrPeliculas=data.results;
    console.log(this.arrPeliculas)
   });
  }

}
