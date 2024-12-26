import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrl: './livro-list.component.scss'
})
export class LivroListComponent implements OnInit {

    livros: Livro[];
  
    constructor(private livroService: LivroService) { }
  
    ngOnInit(): void {
      this.livroService.obterTodos().subscribe((result) => this.livros = result);
    }
}
