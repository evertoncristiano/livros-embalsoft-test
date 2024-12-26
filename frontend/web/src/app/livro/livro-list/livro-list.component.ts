import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro';
import { LivroService } from '../services/livro.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-livro-list',
    templateUrl: './livro-list.component.html',
    styleUrl: './livro-list.component.scss'
})
export class LivroListComponent implements OnInit {

    livros: Livro[];

    constructor(
        private livroService: LivroService,
        private spinner: NgxSpinnerService
    ) {
    }

    ngOnInit(): void {
        this.spinner.show();

        this.livroService.obterTodos().subscribe((result) => {
            this.livros = result;
            this.spinner.hide();
        });
    }
}
