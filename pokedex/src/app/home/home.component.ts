import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexCardComponent } from '../index-card/index-card.component';
import { Pokemon } from '../pokemon';
import { DataService } from '../data.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IndexCardComponent, DetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allPokemon: any[] = [];

  // Inject the API service
  dataService: DataService = inject(DataService);

  constructor() {
    // Get all 151 Pokemon
    this.dataService.getAllPokemon().subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        // Get the details of each Pokemon and map them to the interface
        this.dataService.getPokemonDetails(result.name)
          .subscribe((nextResponse: any) => {
            const mappedPokemon: Pokemon = {
              id: nextResponse.id,
              name: nextResponse.name,
              image: nextResponse.sprites.other['official-artwork'].front_default,
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
