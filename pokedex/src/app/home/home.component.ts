import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexCardComponent } from '../index-card/index-card.component';
import { Pokemon } from '../pokemon';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IndexCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allPokemon: any[] = []; // Store all 151 Pokémon details

  // Inject the API service
  dataService: DataService = inject(DataService);

  constructor() {
    this.dataService.getAllPokemon().subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        this.dataService.getPokemonDetails(result.name)
          .subscribe((nextResponse: any) => {
            const mappedPokemon: Pokemon = {
              id: nextResponse.id,
              name: nextResponse.name,
              image: nextResponse.sprites.front_default,
              type: nextResponse.types.map((t: any) => t.type.name),
              height: nextResponse.height,
              weight: nextResponse.weight,
            };
            this.allPokemon.push(mappedPokemon);
          });
      });
    });
  }
}
