import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './index-card.component.html',
  styleUrl: './index-card.component.css'
})
export class IndexCardComponent {
  @Input() pokemon!: Pokemon;
}
