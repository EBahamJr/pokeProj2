import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.css']
})
export class PokemonAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: PokemonService) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.angForm = this.fb.group({
      PokemonName: [''],
      PokemonDescription: [''],
      PokemonType: ['']
    });
  }

  addPokemon(PokemonName, PokemonType, PokemonEntry){
    this.ps.addPokemon(PokemonName, PokemonType, PokemonEntry);
  }

}
