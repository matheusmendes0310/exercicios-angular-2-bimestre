import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './professores.component.html'
})
export class ProfessoresComponent {}
