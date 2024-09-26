import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsService {
  pokemonCache: { [id: string]: any } = {};

  setPokemonCache(cache: any) {
    this.pokemonCache = cache;
  }

  getPokemonById(id: number) {
    return this.pokemonCache[id];
  }
}
