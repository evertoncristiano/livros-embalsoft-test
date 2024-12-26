import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livro } from '../models/livro';
import { LivroService } from '../services/livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-livro-form',
    templateUrl: './livro-form.component.html',
    styleUrl: './livro-form.component.scss'
})
export class LivroFormComponent implements OnInit {

    title = "Novo Livro";
    livroForm: FormGroup;
    livro: Livro;

    constructor(
        private fb: FormBuilder,
        private livroService: LivroService,
        private router: Router,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private spinner: NgxSpinnerService
    ) {
        this.livroForm = this.fb.group({
            titulo: ['', Validators.required],
            autor: ['', Validators.required],
            genero: ['', Validators.required],
            ano: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');

        if (id) {
            this.spinner.show()

            this.livroService.obterPorId(id).subscribe((result) => {
                this.livro = result;
                this.title = "Editando Livro - " + this.livro.titulo;

                this.livroForm.patchValue({
                    id: this.livro.id,
                    titulo: this.livro.titulo,
                    autor: this.livro.autor,
                    genero: this.livro.genero,
                    ano: this.livro.ano
                });

                this.spinner.hide();
            });
        }
    }

    salvar() {
        if (this.livroForm.dirty && this.livroForm.valid) {
            this.spinner.show();

            this.livro = Object.assign({}, this.livro, this.livroForm.value);
            
            this.livroService.novo(this.livro).subscribe({
                next: (r) => {
                    this.spinner.hide()
                    this.toastr.success('Livro salvo com sucesso!', 'Sucesso!')
                    this.router.navigateByUrl("livros");
                },
                error: (e) => {
                    this.spinner.hide()
                    this.toastr.error('Não foi possível salvar o livro!', 'Ocorreu um erro!');
                    console.log(e);
                }
            });
        }
    }
}
