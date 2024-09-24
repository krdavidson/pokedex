import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  pokemon!: Pokemon;
  pokeDescription = String;
  
  route: ActivatedRoute = inject(ActivatedRoute);
  dataService: DataService = inject(DataService);

  currentId = 0;

  constructor(){
    // Get the current Pokemon ID
    this.currentId = Number(this.route.snapshot.params["id"])

    // Get the Pokemon details
    this.dataService.getPokemonDetails(String(this.currentId)).subscribe((data: any) => {
      this.pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default,
        type: data.types.map((typeInfo: any) => typeInfo.type.name),
        height: data.height,
        weight: data.weight,
      };
    });

    // Get the Pokémon description 
    this.dataService.getPokemonDescription(this.currentId).subscribe((descriptionData: any) => {
      this.pokeDescription = descriptionData.flavor_text_entries.find(
        (entry: any) => entry.language.name === 'en').flavor_text
    });
  }
}
