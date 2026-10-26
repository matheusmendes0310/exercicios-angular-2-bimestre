import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {}
