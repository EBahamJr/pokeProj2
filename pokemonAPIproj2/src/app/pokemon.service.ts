import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url2 = 'https://pokeapi.co/api/v2/pokemon';
  url = 'http://localhost:4000/products';

  constructor(private http:HttpClient) { }

  addPokemon(PokemonName, PokemonType, PokemonEntry){
    const obj = {
      PokemonName,
      PokemonType,
      PokemonEntry
    };
    console.log(obj);
    this.http.post(`${this.url}/add`, obj)
      .subscribe(res => console.log(`Done`));
  }
  getPokemon() {
    return this.http.get(`${this.url2}`)
    
  }
}
