import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent {}
