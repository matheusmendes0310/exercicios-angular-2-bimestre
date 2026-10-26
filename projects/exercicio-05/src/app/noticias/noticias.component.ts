import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent {}
