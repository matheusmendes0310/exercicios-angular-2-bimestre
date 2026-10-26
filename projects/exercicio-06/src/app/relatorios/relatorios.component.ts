import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './relatorios.component.html'
})
export class RelatoriosComponent {}
