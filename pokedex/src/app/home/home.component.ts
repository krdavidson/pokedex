import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexCardComponent } from '../index-card/index-card.component';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IndexCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pokemon: Pokemon = {
    id: 1,
    name: "Bulbasaur",
    photo: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
    type: ["grass", "poison"],
    height: 1.6,
    weight: 6.9,
    description: "When the bulb on\nits back grows\nlarge, it appears\fto lose the\nability to stand\non its hind legs.",
  };
}
