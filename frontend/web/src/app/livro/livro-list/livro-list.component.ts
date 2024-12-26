import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro';
import { LivroService } from '../services/livro.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-livro-list',
    templateUrl: './livro-list.component.html',
    styleUrl: './livro-list.component.scss'
})
export class LivroListComponent implements OnInit {

    livros: Livro[];

    constructor(
        private livroService: LivroService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService
    ) {

    }

    ngOnInit(): void {
        this.ObterLivros();
    }

    ObterLivros() {
        this.spinner.show();

        this.livroService.obterTodos().subscribe((result) => {
            this.livros = result;
            this.spinner.hide();
        });
    }

    excluir(id: string) {
        this.spinner.show();

        this.livroService.excluir(id).subscribe({
            next: () => {
                this.toastr.success('Livro excluído com sucesso!', 'Sucesso!')
                this.ObterLivros();
            },
            error: (e) => {
                this.spinner.hide()
                this.toastr.error('Não foi possível excluir o livro!', 'Ocorreu um erro!');
                console.log(e);
            }
        });
    }
}
