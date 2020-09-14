import { Injectable, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../../interfaces/pokemon";
import { User } from "../../interfaces/user";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  pokemon: Pokemon;
  user: User;

  ngOnInit() {}

  chargerPokemon(id: number): Promise<Pokemon> {
    return this.http
      .get<Pokemon>("http://lpweblannion.herokuapp.com/api/pokemon/" + id)
      .toPromise();
  }

  chargerDeck(id: string): Promise<User> {
    return this.http
      .get<User>("http://lpweblannion.herokuapp.com/api/user/" + id)
      .toPromise();
  }
}
