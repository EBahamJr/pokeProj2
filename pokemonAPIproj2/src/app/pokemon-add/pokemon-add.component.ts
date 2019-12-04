import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.css']
})
export class PokemonAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.angForm = this.fb.group({
      PokemonName: ['', Validators.required ],
      PokemonDescription: ['', Validators.required ],
      PokemonType: ['', Validators.required ]
    });
  }

}
