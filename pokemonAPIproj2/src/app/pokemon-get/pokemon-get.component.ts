import { Component, OnInit } from '@angular/core';
import Pokemon from '../Pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-get',
  templateUrl: './pokemon-get.component.html',
  styleUrls: ['./pokemon-get.component.css']
})
export class PokemonGetComponent implements OnInit {


  pokemon: Pokemon[];
  constructor(private ps: PokemonService) { }

  ngOnInit() {
    this.ps
      .getPokemon()
      .subscribe((data: Pokemon[]) => {
        console.log(JSON.parse(JSON.stringify(data.results[0].name)));
        console.log(JSON.parse(JSON.stringify(data.results)));
        console.log(JSON.parse(JSON.stringify(data)));
        this.pokemon = JSON.parse(JSON.stringify(data.results));
      });
  }

}
