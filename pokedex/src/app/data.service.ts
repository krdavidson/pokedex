import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Get the first 151 Pokémon basic data
  getAllPokemon(): Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  }

  // Get details for a specific Pokémon by URL
  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getPokemonDescription(id: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
} 
