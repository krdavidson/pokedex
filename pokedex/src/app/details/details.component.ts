import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";
import { PokemonDetailsService } from '../services/pokemon-details.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  pokemon!: Pokemon;
  pokeDescription = String;
  currentId = 0;
  pokemonCache: any;

  route: ActivatedRoute = inject(ActivatedRoute);
  dataService: DataService = inject(DataService);
  // Inject the Pokemon details service to get cached Pokemon:
  pokemonDetailsService: PokemonDetailsService = inject(PokemonDetailsService);

  constructor(){
    // Get the current Pokemon ID
    this.currentId = Number(this.route.snapshot.params["id"])
    // Get the details of the selected Pokemon from cached Pokemon details
    this.pokemon = this.pokemonDetailsService.getPokemonById(this.currentId)

    this.dataService.getPokemonDescription(this.currentId).subscribe((descriptionData: any) => {
      this.pokeDescription = descriptionData.flavor_text_entries.find(
        (entry: any) => entry.language.name === 'en').flavor_text
    });
  }
}
