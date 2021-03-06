import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonAddComponent} from './pokemon-add/pokemon-add.component';
import {PokemonGetComponent} from './pokemon-get/pokemon-get.component';
import {PokemonEditComponent} from './pokemon-edit/pokemon-edit.component';



const routes: Routes = [
  {
    path: 'pokemon/create',
    component: PokemonAddComponent
  },
  {
    path: 'edit/id',
    component: PokemonEditComponent
  },
  {
    path: 'pokemon',
    component: PokemonGetComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
