import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../../services/pokemon/pokemon.service";
import { UserService } from "../../services/user/user.service";
import { Pokemon } from "../../interfaces/pokemon";
import { User } from "src/app/interfaces/user";
import { UserCoinsService } from "src/app/services/user/user-coins.service";

@Component({
  selector: "app-page-boutique",
  templateUrl: "./page-boutique.component.html",
  styleUrls: ["./page-boutique.component.css"]
})
export class PageBoutiqueComponent implements OnInit {
  //Les valeurs minimale et maximales des id de pokemon de l'api (Actuellement de 1 à 200)
  pokemonIdMin: number = 1;
  pokemonIdMax: number = 200;
  listePokemon: Array<Pokemon> = [];
  listeTempPokemon: Array<Pokemon> = [];
  loading: boolean = false;
  prixBooster: number = 10;
  remboursementCarte: number = 0.5;
  myUser: User;

  constructor(
    private pokemon: PokemonService,
    private user: UserService,
    private userCoin: UserCoinsService
  ) {}

  ngOnInit() {}

  entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async showPokemon(nombre: number) {
    this.myUser = await this.user.getUser();
    if (this.myUser.coins >= this.prixBooster) {
      this.userCoin.updateCoins(-this.prixBooster);
      this.userCoin.load();
      this.loading = true;
      for (let i = 0; i < nombre; i++) {
        let id = this.entierAleatoire(this.pokemonIdMin, this.pokemonIdMax);
        this.listeTempPokemon[i] = await this.pokemon.chargerPokemon(id);
      }
      this.listePokemon = this.listeTempPokemon;
      this.loading = false;
    }
  }

  delete(id: number) {
    console.log("carte supprimée");
    this.listePokemon.splice(id, 1);
    this.userCoin.updateCoins(this.remboursementCarte);
    this.userCoin.load();
  }

  async addDeck(id: number) {
    console.log("carte ajoutée");
    let idPokemon = this.listePokemon[id].poke_id;
    this.user.addCard(idPokemon);
    this.listePokemon.splice(id, 1);
  }
}
