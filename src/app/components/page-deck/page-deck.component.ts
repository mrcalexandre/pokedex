import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../../services/pokemon/pokemon.service";
import { UserService } from "../../services/user/user.service";
import { Pokemon } from "../../interfaces/pokemon";
import { User } from "src/app/interfaces/user";

@Component({
  selector: "app-page-deck",
  templateUrl: "./page-deck.component.html",
  styleUrls: ["./page-deck.component.css"]
})
export class PageDeckComponent implements OnInit {
  deck: Array<Pokemon> = [];
  emptyDeck: boolean = true;
  myUser: User;

  constructor(private pokemon: PokemonService, private user: UserService) {}

  async ngOnInit() {
    this.myUser = await this.user.getUser();
    this.showDeck();
  }

  async showDeck() {
    for (let i = 0; i < this.myUser.deck.length; i++) {
      this.emptyDeck = false;
      this.deck.push(await this.pokemon.chargerPokemon(this.myUser.deck[i]));
    }
  }
}
