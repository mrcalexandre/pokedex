import { Pipe, PipeTransform } from "@angular/core";
import { Pokemon } from "../interfaces/pokemon";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(listePokemon: Array<Pokemon>, minAttack: number): Array<Pokemon> {
    if (!minAttack) {
      return listePokemon;
    }
    return listePokemon.filter(card => {
      if (card.stats.attack >= minAttack) {
        return card;
      }
    });
  }
}
