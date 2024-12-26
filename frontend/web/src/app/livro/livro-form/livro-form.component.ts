import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livro } from '../models/livro';
import { LivroService } from '../services/livro.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-livro-form',
    templateUrl: './livro-form.component.html',
    styleUrl: './livro-form.component.scss'
})
export class LivroFormComponent implements OnInit {

    title = "Novo Livro";
    livroForm: FormGroup;
    livro: Livro;

    constructor(private fb: FormBuilder,
                private livroService: LivroService,
                private router: Router,
                private toastr: ToastrService
    ) {
    
    }

    ngOnInit(): void {
        this.livroForm = this.fb.group({
            titulo: ['', Validators.required],
            autor: ['', Validators.required],
            genero: ['', Validators.required],
            ano: ['', Validators.required]
        });    
    }

    salvar() {
        if (this.livroForm.dirty && this.livroForm.valid) {

            this.livro = Object.assign({}, this.livro, this.livroForm.value);

            this.livroService.novo(this.livro).subscribe({
                next: (r) => {
                    this.toastr.success('Livro salvo com sucesso!', 'Sucesso!')
                    this.router.navigateByUrl("livros");
                },
                error: (e) => {
                    this.toastr.error('Não foi possível salvar o livro!', 'Ocorreu um erro!');
                    console.log(e);
                }
            });
        }
    }
}
