import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonGetComponent } from './pokemon-get/pokemon-get.component';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonGetComponent,
    PokemonAddComponent,
    PokemonEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
