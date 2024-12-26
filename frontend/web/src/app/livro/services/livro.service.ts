import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Livro } from "../models/livro";

import { environment } from "../../../environments/environment";

@Injectable()
export class LivroService {
    private urlV1: string = environment.apiUrlv1 + 'livros/';

    constructor(private http: HttpClient) { }

    obterTodos(): Observable<Livro[]> {
        return this.http.get<Livro[]>(this.urlV1);
    }
    
    obterPorId(id: string): Observable<Livro> {
        return this.http.get<Livro>(this.urlV1+id);
    }

    novo(livro: Livro): Observable<Livro> {
        return this.http.post<Livro>(this.urlV1, livro);
    }
}