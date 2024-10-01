import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from "../details/details.component";

@Component({
  selector: 'app-index-card',
  standalone: true,
  imports: [RouterModule, DetailsComponent],
  templateUrl: './index-card.component.html',
  styleUrl: './index-card.component.css'
})
export class IndexCardComponent {
  @Input() pokemon!: Pokemon;
}
