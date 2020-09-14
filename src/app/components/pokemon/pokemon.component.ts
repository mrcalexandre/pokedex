import { Component, OnInit, Input } from "@angular/core";
import { Pokemon } from "../../interfaces/pokemon";
import { PokemonService } from "../../services/pokemon/pokemon.service";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
  @Input() data: Pokemon;
  @Input() id: number;

  constructor() {}

  monPokemon: Pokemon;

  ngOnInit() {
    this.monPokemon = this.data;
  }
}
