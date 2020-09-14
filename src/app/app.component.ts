import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./interfaces/pokemon";
import { PokemonService } from "./services/pokemon/pokemon.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Pokedex";
  mesPokemon: Pokemon;

  constructor(private pokemon: PokemonService) {}

  ngOnInit() {}
}
