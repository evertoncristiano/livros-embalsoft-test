import { Host, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { Livro } from "../models/livro";

import { environment } from "../../../environments/environment";

@Injectable()
export class LivroService {
    protected apiUrlV1: string = environment.apiUrlv1;

    constructor(private http: HttpClient) { }

    novo(livro: Livro): Observable<Livro> {
        return this.http.post<Livro>(this.apiUrlV1 + "livros", livro);
    }
}