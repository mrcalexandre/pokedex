export interface Pokemon {
  _id?: string;
  poke_id?: number;
  name: string;
  image: string;
  type: string;
  stats: {
    attack: number;
    hp: string;
    speed: string;
    defense: string;
  };
  __v?: number;
}
